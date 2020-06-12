import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import colors from '../Themes/Colors';
import { MerchantProduct, OlshopDetail } from '../../Commons/types';
import styles from './styles';

type Props = {
    merchantData: Array<MerchantProduct>
    imageData: Array<OlshopDetail>
}

class ImageListView extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props: Props);
    const { nameOlshop, link, joinDate } = this.props.merchantData;
  }

  render() {
    return (
      <View style={styles.FlatListContainer}>
        <TouchableOpacity
          accessibilityLabel="comingSoonPopupCloseButton"
          onPress={}
          style={styles.popupClose}
        >
          <Image
            source={data.item.images}
            style={styles.thumbnailImageOlshop}
            />
        </TouchableOpacity>
      </View>
    )
  }
};