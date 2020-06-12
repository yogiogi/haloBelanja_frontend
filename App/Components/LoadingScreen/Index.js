import React from 'react';
import { View, Modal } from 'react-native';
import styles from './Styles/LoadingScreenStyle';
import SpinnerButton from './SpinnerButton';

type Props = {
  modalVisible: boolean,
}

const LoadingScreen = ({ modalVisible }: Props) => {
  return (
    <Modal
      animationType="none"
      transparent
      visible={modalVisible}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <SpinnerButton />
        <View style={styles.bg} />
      </View>
    </Modal>
  );
};

export default LoadingScreen;
