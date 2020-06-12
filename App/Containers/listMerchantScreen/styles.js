import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Property';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
    container: {
      flex: 1,
      backgroundColor: Colors.background,
      paddingVertical: 50,
      position: "relative"
     },
     imageContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
     },
     gradeContainer: {
      flex: 1,
      flexDirection: 'column',
     },
     gradeImage: {
      width: 10,
      height: 10,
     },
     merchantContainer: {
        flex: 1,
        flexDirection: 'column',
      },
      thumbnailContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      thumbnailImage: {
        width: 20,
        height: 20,
        borderRadius: 20,
        top: 15,
      },
      rightContainer: {
        alignItems: "flex-end",
      },
      statusContainer: {
        marginLeft: 10,
        top:-10,
      },
      thumbnailImageOlshop: {
        width: 20,
        height: 20,
        borderRadius: 20,
      },
      imageOlshop: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
      },
      containerStyle: {
        flexDirection: 'row',
        marginHorizontal: 10,
      },
      FlatListContainer: {
        height: 40,
        paddingTop: 10,
        paddingHorizontal: 2,
      },
      middleContainer: {
        flex: 2,
      },
      olshopContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 10,
      },
      column: {
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        height:200,
        width:50
      },
    title: {
      fontSize: 20,
      color: "#fff",
      textAlign: "center",
      marginBottom: 10
    },
    loader: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
    },
    list: {
      marginHorizontal: 10,
      paddingVertical: 5,
      margin: 3,
      zIndex: -1,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: Colors.background,
      borderColor: Colors.backgroundColor,
      borderWidth: 0.3,

      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
    },
    lightText: {
      color: Colors.descriptionText,
      fontSize: Fonts.size.extraLarge
     },
    line: {
      height: 0.5,
      width: "100%",
      backgroundColor:"rgba(255,255,255,0.5)"
    },
    flatImageContainer: {
      paddingLeft: 10,
    },
    icon: {
      position: "absolute",  
      bottom: 20,
      width: "100%", 
      left: 290, 
      zIndex: 1
    },
    numberBox: {
      position: "absolute",
      bottom: 75,
      width: 30,
      height: 30,
      borderRadius: 15,  
      left: 330,
      zIndex: 3,
      backgroundColor: "#e3e3e3",
      justifyContent: "center",
      alignItems: "center"
    },
    number: {fontSize: 14,color: "#000"},
    selected: {backgroundColor: "#FA7B5F"},

    quantityControllerOfCart: {
      flex: 1,
      position: 'absolute',
      width: 114,
      height: 36,
      bottom: 10,
      right: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      zIndex: 2,
      borderRadius: 3,
      backgroundColor: Colors.background,
      borderWidth: 1,
      borderColor: Colors.header,
    },
});