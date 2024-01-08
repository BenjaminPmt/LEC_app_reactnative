import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native'
import { colors } from '../Contants';
export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={{marginTop :50}}  source={require('../assets/img/logo_lec.png')}/>
      <Text style={styles.text}>Watch the LEC content</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}>
        <Text style={styles.button_text}>Let's Go ! </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.COLOR_PRIMARY,
      alignItems: 'center',
    },
    text : {
      fontSize : 42,
      fontWeight : 'bold',
      color : colors.COLOR_GREEN,
      marginBottom : 40,
      marginTop : 44,
      textAlign : 'center'
    },
    button :{
      backgroundColor: colors.COLOR_GREEN,
      borderRadius: 18,
      paddingVertical: 18,
      width: "80%",
      alignItems: "center",
      marginTop : 30,
    },
    button_text :{
      fontSize : 23,
      color : colors.COLOR_WHITE,
      fontWeight : '700'
    },
  });