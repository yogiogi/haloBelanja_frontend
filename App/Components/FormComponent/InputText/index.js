import {Input, Item, Label, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {removeEmojiFromString} from '../../../Commons/Emoji';
import styles from './styles';
import {Colors} from '../../../Property';

type Props = {
  labelName: string,
  errorText: string,
  value: string,
  inputType?: ['default', 'numeric'],
  contentHeight?: number,
  onChangeText: Function,
  accessibilityLabel?: string,
  multiLine?: Boolean,
  maxLength?: number,
  borderStyle?: Object,
  textStyle?: Object,
  labelStyle?: Object,
  colorBorder?: Object,
};

const InputTextComponent = ({
  labelName,
  errorText,
  value,
  inputType = 'default',
  contentHeight,
  multiLine,
  maxLength,
  onChangeText,
  accessibilityLabel,
  borderStyle,
  textStyle,
  labelStyle,
  colorBorder,
}: Props) => {
  return (
    <View style={[styles.sectionContainer, borderStyle]}>
      <Item
        floatingLabel
        style={[colorBorder, errorText ? styles.inputError : null]}>
        <Label style={[styles.labelStyle, labelStyle]}>{labelName}</Label>
        <Input
          multiline={multiLine}
          accessibilityLabel={accessibilityLabel}
          style={[styles.inputFloatingText, {height: contentHeight}, textStyle]}
          maxLength={maxLength}
          value={value}
          keyboardType={inputType}
          onChangeText={(updatedValue) => {
            const filteredValue = removeEmojiFromString(updatedValue);
            onChangeText(filteredValue);
          }}
        />
      </Item>
      {errorText ? (
        <Text accessibilityLabel="inputText_errorText" style={styles.errorText}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

InputTextComponent.defaultProps = {
  contentHeight: 1,
  accessibilityLabel: '',
  multiLine: false,
  maxLength: 100,
  colorBorder: styles.inputSection,
};

export default InputTextComponent;
