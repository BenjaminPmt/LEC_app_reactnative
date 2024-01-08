import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../Contants';
import { AntDesign } from '@expo/vector-icons';
export default function CurrentMatch() {
  return (
      <View style={styles.container}>
        <Image source={require('../assets/img/lol_game.jpg')} style={styles.image} />
        <View style={styles.viewer}>
            <View style={styles.play}>
                <FontAwesome name="play" size={10} color={colors.COLOR_WHITE} style={{marginLeft : 10, marginRight :5}} />
                <AntDesign name="sound" size={10} color={colors.COLOR_WHITE} />
            </View>
            <View style={styles.live}>
                <MaterialIcons name="live-tv" size={12} color={colors.COLOR_WHITE} />
                <Text style={{fontSize : 10, color:'red', fontWeight:'700', marginRight:10, marginLeft: 5}}>Live</Text>
            </View>       
        </View>
        {/* <View style={styles.play}>
        <FontAwesome name="play-circle" size={30} color={colors.COLOR_WHITE} style={{marginRight :25}} />
        <AntDesign name="sound" size={30} color={colors.COLOR_WHITE} />
        </View> */}
      </View>
  )
}

const styles = StyleSheet.create({
    image:{
      width : 276,
      height : 170,
      borderTopLeftRadius : 10,
      borderTopRightRadius : 10,
      // top : 30,
    },
    container:{
      // width : 350,
      // height : 300,
      // backgroundColor : colors.COLOR_GREEN,
      // borderBottomLeftRadius : 25,
      // borderBottomRightRadius : 25,
      justifyContent: 'center',
      alignItems : 'center',
      marginTop : 10,
    },
    viewer: {
      backgroundColor : colors.COLOR_GREEN,
      width : 276,
      height : 15,
      borderBottomLeftRadius : 5,
      borderBottomRightRadius : 5,
      justifyContent : 'space-between',
      flexDirection : "row"
    },
    play : {
        flexDirection : "row",
        top : 3,
    },
    live:{
        flexDirection : "row",
        marginTop : 1,
    },
  });