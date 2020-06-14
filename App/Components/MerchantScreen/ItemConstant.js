// @flow

import colors from '../../Property/Colors';

const ItemConstant = {
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    padding: 8,
  },
  subcontainer: {
    padding: 8,
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
    color: colors.coolGrey,
    fontFamily: 'sans-serif',
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.charcoalGrey,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
  },
  description: {},
  label: {},
  extra1: {
    fontSize: 12,
    color: '#70CF6F',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  pinInput: {
    length: 6,
  },
  addDiscountMaxLength: {
    length: 15,
  },
  snackBarShow: {
    time: 800,
  },
  timeOut: {
    time200: 200,
    time400: 400,
  },
};

export default ItemConstant;
