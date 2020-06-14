import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Icon } from 'native-base';

import styles, {
  loaderColor,
  loaderSize,
} from './Styles/ModalListPickerStyle';

class ModalListPicker extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      selectedValue: props.defaultValueName,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { defaultValueName } = this.props;

    if (nextProps.defaultValueName !== defaultValueName) {
      this._updateSelectedValue(nextProps.defaultValueName);
    }
  }

  _showModal = (e, onLayoutFunc) => {
    onLayoutFunc && onLayoutFunc(e);
    this.setState({ isModalVisible: true });
  }

  _hideModal = () => {
    this.setState({ isModalVisible: false });
  }

  _listKeySetter = (item, index) => 'choices-list-' + index

  _itemPressed(data) {
    const { onChoicePressed, displayNameExtractor } = this.props;

    this._hideModal();
    this._updateSelectedValue(displayNameExtractor(data));
    onChoicePressed(data);
  }

  _updateSelectedValue(newValue) {
    this.setState({ selectedValue: newValue });
  }

  _renderListItem = (data) => {
    const { displayNameExtractor } = this.props;

    return (
      <TouchableOpacity
        accessibilityLabel={data.item.accessibilityLabel || 'choices-list-item-' + data.index}
        onPress={() => this._itemPressed(data.item)}
        style={styles.listItemWrapper}
      >
        <Text style={styles.listItemText}>
          {displayNameExtractor(data.item)}
        </Text>
      </TouchableOpacity>
    );
  }

  _renderSeparator = () => {
    return (
      <View style={styles.separatorLine} />
    );
  };

  _renderFooter = () => {
    const { isLoadingData } = this.props;

    if (isLoadingData) {
      return (
        <ActivityIndicator
          style={styles.footerLoader}
          color={loaderColor}
          size={loaderSize}
        />
      );
    }

    return null;
  }

  _renderList(listData) {
    const { getMoreData } = this.props;

    return (
      <FlatList
        contentContainerStyle={styles.listWrapper}
        accessibilityLabel="choices_list_view"
        data={listData}
        keyExtractor={this._listKeySetter}
        renderItem={this._renderListItem}
        ItemSeparatorComponent={this._renderSeparator}
        ListFooterComponent={this._renderFooter}
        onEndReached={getMoreData}
        onEndReachedThreshold={0.5}
      />
    );
  }

  _onModalClosed = () => null

  _renderModal(listData) {
    const { isModalVisible } = this.state;
    const { frequencyModalContentWrapper } = this.props;

    return (
      <Modal
        visible={isModalVisible}
        onRequestClose={this._onModalClosed}
        transparent
        animationType="fade"
      >
        <View style={frequencyModalContentWrapper}>
          <View style={styles.modalListWrapper}>
            {this._renderList(listData)}
          </View>
          <TouchableWithoutFeedback onPress={this._hideModal}>
            <View style={styles.blankSpaceArea} />
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    );
  }

  render() {
    const { selectedValue } = this.state;
    const { listData, frequencyPicker, frequencyLabel, accessibilityLabel,
      mainWrapperStyle, pickerStyle, textStyle, iconStyle, labelText, lableStyle,
      floatingLabelStyle, onLayoutFunc, iconName } = this.props;

    return (
      <View style={[frequencyPicker ? styles.frequencyMainWrapper : styles.mainWrapper, mainWrapperStyle]}>
        {
          frequencyPicker ?
            <TouchableOpacity
              accessibilityLabel={accessibilityLabel || 'modalListPicker_touchableOpacity_frequency'}
              style={styles.frequencyButton}
              onPress={this._showModal}
            >
              <View style={styles.frequencyTextView}>
                <Text
                  style={styles.labelText}
                  numberOfLines={1}
                >
                  {frequencyLabel}
                </Text>
                <Text
                  style={styles.frequencyText}
                  numberOfLines={1}
                >
                  {selectedValue}
                </Text>
              </View>
              <Icon
                name="ios-arrow-down"
                style={styles.frequencyIcon}
              />
            </TouchableOpacity> :
            <TouchableOpacity
              accessibilityLabel="modalListPicker_touchableOpacity_choiceList"
              style={[styles.pickerButton, pickerStyle]}
              onPress={e => this._showModal(e, onLayoutFunc)}
            >
              <View style={styles.pickerView}>
                {
                  labelText ?
                    <Text
                      style={[lableStyle, selectedValue && floatingLabelStyle]}
                    >
                      {labelText}
                    </Text>
                    : null
                }
                <Text
                  style={[styles.chosenText, textStyle]}
                  numberOfLines={1}
                >
                  {selectedValue}
                </Text>
                <Icon
                  name={iconName || 'ios-arrow-down'}
                  style={[styles.pickerIcon, iconStyle]}
                />
              </View>
            </TouchableOpacity>
        }
        {this._renderModal(listData)}
      </View>
    );
  }
}

ModalListPicker.defaultProps = {
  getMoreData: null,
  isLoadingData: false,
  onChoicePressed: () => null,
  displayNameExtractor: () => null,
  listData: [],
  frequencyPicker: false,
  frequencyLabel: '',
  frequencyModalContentWrapper: styles.modalContentWrapper,
  accessibilityLabel: '',
  iconName: '',
};

export {
  ModalListPicker as default,
};
