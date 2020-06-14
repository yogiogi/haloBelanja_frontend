import React, { Component } from 'react';
import {
  Animated,
  PanResponder,
  ScrollView,
  Dimensions,
  View,
  Keyboard,
} from 'react-native';

import styles from './styles';
import { Metrics } from '../../Property';

const DEFAULT_INITIAL_DISPLAY_HEIGHT = 78;
const DEFAULT_INITIAL_FULL_DISPLAY_HEIGHT = 272;
const DEVICE_HEIGHT = Metrics.metrics.deviceHeight;
const MOVE_DURATION = 400;

class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.isOpen,
      pulling: false,
    };
  }

  config = {
    position: {
      max: DEVICE_HEIGHT - (this.props.initialHeight ? this.props.initialHeight : DEFAULT_INITIAL_DISPLAY_HEIGHT),
      start: DEVICE_HEIGHT - (this.props.initialHeight ? this.props.initialHeight : DEFAULT_INITIAL_DISPLAY_HEIGHT),
      end: DEVICE_HEIGHT - (this.props.initialFullHeight ? this.props.initialFullHeight : DEFAULT_INITIAL_FULL_DISPLAY_HEIGHT),
      min: DEVICE_HEIGHT - (this.props.initialFullHeight ? this.props.initialFullHeight : DEFAULT_INITIAL_FULL_DISPLAY_HEIGHT),
      animates: [
        () => this._animatedOpacity,
      ],
    },
    opacity: {
      start: 0,
      end: 0.5,
    },
  };

  _panResponder = {};

  _animatedOpacity = new Animated.Value(this.config.opacity.start);

  _animatedPosition = new Animated.Value(this.props.isOpen
    ? this.config.position.end
    : this.config.position.start);

  _animatedBottom = new Animated.Value(0);

  componentWillMount() {
    this._currentPosition = this._animatedPosition._value;
    this._animatedPosition.addListener((value) => {
      this._currentPosition = value.value;
      this.config.position.animates.map(item => {
        item().setValue(value.value);
      });
    });
    this._animatedPosition.setValue(this._animatedPosition._value);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._grantPanResponder,
      onStartShouldSetPanResponderCapture: this._handlePanResponderCapture,
      onMoveShouldSetPanResponder: this._grantPanResponder,
      onMoveShouldSetPanResponderCapture: this._grantPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
      onShouldBlockNativeResponder: (evt, gestureState) => true,
    });
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      this.open();
    }
    else if (this.props.isOpen && !nextProps.isOpen) {
      this.close();
    }
  }

  _keyboardDidShow = (e) => {
    this.props.updateListStyle(true);
    if (this.state.open) {
      Animated.timing(this._animatedBottom, {
        toValue: e.endCoordinates.height,
        duration: MOVE_DURATION,
      }).start();
    }
  }

  _keyboardDidHide = () => {
    this.props.updateListStyle(false);
    Animated.timing(this._animatedBottom, {
      toValue: 0,
      duration: MOVE_DURATION,
    }).start();
  }

  _grantPanResponder = (evt, gestureState) => {
    const canMoveY = DEVICE_HEIGHT - (this.props.initialFullHeight ? this.props.initialFullHeight : DEFAULT_INITIAL_FULL_DISPLAY_HEIGHT) + (this.props.initialHeight ? this.props.initialHeight : DEFAULT_INITIAL_DISPLAY_HEIGHT);
    if (!this.state.open) {
      return true;
    }
    else if (evt.nativeEvent.pageY > canMoveY) {
      return false;
    }
    else if (this.pulledDown(gestureState)) {
      return true;
    }
    else if (this.pulledDown(gestureState) && this.pulledFast(gestureState)) {
      return true;
    }

    return false;
  };

  _handlePanResponderCapture = (evt, gestureState) => {
    if (this.pulledDown(gestureState)) {
      return true;
    }
    else if (this.pulledDown(gestureState) && this.pulledFast(gestureState)) {
      return true;
    }
    return false;
  }

  _handlePanResponderGrant = (evt, gestureState) => {
    this.setState({ pulling: true });
    this._animatedPosition.setOffset(this._currentPosition);
    this._animatedPosition.setValue(0);
  };

  _handlePanResponderMove = (evt, gestureState) => {
    if (this.insideAllowedRange()) {
      this._animatedPosition.setValue(gestureState.dy);
    }
  };

  _handlePanResponderEnd = (evt, gestureState) => {
    this._animatedPosition.flattenOffset();
    this.setState({ pulling: false });
    if (this.pulledDown(gestureState) && this.pulledFar(gestureState)) {
      return this.close();
    }
    else if (this.pulledUp(gestureState) && this.pulledFar(gestureState)) {
      return this.open();
    }
    else {
      this.restore();
    }
  };

  open = () => {
    this.setState({ open: true }, () => {
      Animated.timing(this._animatedPosition, {
        toValue: this.config.position.end,
        duration: MOVE_DURATION,
      }).start();
    });
  };

  close = () => {
    Animated.timing(this._animatedPosition, {
      toValue: this.config.position.start,
      duration: MOVE_DURATION,
    }).start(() => this.setState({
      open: false,
    }));
  };

  toggle = () => {
    if (!this.state.open) {
      this.open();
    }
    else {
      this.close();
    }
  };

  restore = () => {
    if (this.state.open) {
      this.open();
    }
    else {
      this.close();
    }
  };

  pulledUp = (gestureState) => gestureState.dy < 0;

  pulledDown = (gestureState) => gestureState.dy > 0;

  pulledFast = (gestureState) => Math.abs(gestureState.vy) > 0.75;

  pulledFar = (gestureState) => Math.abs(gestureState.dy) > 50;

  getContainerStyle = () => {
    if (this.state.pulling || this.state.open) {
      return {
        height: '100%',
        bottom: this._animatedBottom,
      };
    }
    return {
      height: this.props.children ? (this.props.initialHeight ? this.props.initialHeight : DEFAULT_INITIAL_DISPLAY_HEIGHT) : 0,
      bottom: this._animatedBottom,
    };
  };

  insideAllowedRange = () =>
    this._currentPosition >= this.config.position.min
    && this._currentPosition <= this.config.position.max;

  render() {
    const { children, styleBottom } = this.props;
    const animatedOpacity = this._animatedOpacity.interpolate({
      inputRange: [this.config.position.end, this.config.position.start],
      outputRange: [this.config.opacity.end, this.config.opacity.start],
    });
    return (
      <Animated.View style={[
        styles.container,
        this.getContainerStyle(),
      ]}>
        <Animated.View style={[styles.backdrop, { opacity: animatedOpacity }]}>
        </Animated.View>
        <Animated.View
          style={[
            styles.content,
            {
              paddingBottom: children && this.props.headerHeight ? this.props.headerHeight : 0,
              transform: [{ translateY: this._animatedPosition }, { translateX: 0 }]
            },
          ]}
          {...this._panResponder.panHandlers}
        >

          <View
            // scrollEnabled={this.state.open}
            // showsHorizontalScrollIndicator={false}
            // showsVerticalScrollIndicator={false}
            // scrollEventThrottle={16}
          >
            {children}
          </View>
        </Animated.View>
      </Animated.View>
    )
  }
}

export default BottomSheet;
