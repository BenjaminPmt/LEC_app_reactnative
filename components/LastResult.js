import { View, Text, Image, StyleSheet } from 'react-native'
import { colors } from '../Contants';
export default function LastResult({scoreA, scoreB, equipeA, equipeB}) {
  return (
    <View style={{margin: 10}}>
      <View style={styles.container} >
            <Image source={equipeA} style={styles.logo} />
            <View style={styles.ligne}></View>
            <Image source={equipeB} style={styles.logo} />
            
      </View>
      <View style={styles.score} >
            <Text style={styles.scoreDesign}>{scoreA}</Text>
            <Text style={styles.scoreDesign}>{scoreB}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width : 276,
        borderColor : colors.COLOR_GREEN,
        borderWidth : 2,
        borderTopLeftRadius :5,
        borderTopRightRadius : 5,
        height : 70,
        flexDirection : "row",
        justifyContent : 'space-between',
    },
    logo:{
        width : 30,
        height : 30,
        margin : 20,
    },
    ligne:{
        width : 25,
        height : 5,
        backgroundColor : colors.COLOR_GREEN,
        marginTop : 35
    },
    scoreDesign:{
        color : colors.COLOR_WHITE,
        fontSize : 20,
        marginLeft : 30,
        marginRight : 30,
        fontWeight : '700'
    },
    score: {
        backgroundColor : colors.COLOR_GREEN,
        width : 276,
        height : 30,
        borderBottomLeftRadius : 5,
        borderBottomRightRadius : 5,
        justifyContent : 'space-between',
        flexDirection : "row"
      },
  });