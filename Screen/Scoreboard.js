import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { colors, teams } from '../Contants';


export default function Scoreboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Scoreboard</Text>
      <FlatList
      data={teams}
      renderItem={({item}) =>
      <View style={styles.flatlistContainer}>
        <View style={styles.nameContainer}>
          <Image style={styles.logo} source={item.image} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={styles.containerNumber}>
          <Text style={styles.text}>{item.victoire}</Text>
          <View style={styles.ligne}></View>
          <Text style={styles.text}>{item.defaite}</Text>
        </View>
      </View>

    }
      keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.COLOR_PRIMARY,
    
  },
    flatlistContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16, // Vous pouvez ajuster la marge horizontale selon vos besoins
      paddingVertical: 8, // Vous pouvez ajuster la marge verticale selon vos besoins
      marginTop : 25
    },
    nameContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    containerNumber: {
      flexDirection: 'row',
    },
  
  title:{
    color : colors.COLOR_GREEN,
    fontWeight : '700',
    fontSize : 23,
    marginTop : 44,
    textAlign : 'center',
  },
  ligne:{
    width : 15,
    height : 3,
    backgroundColor : colors.COLOR_GREEN,
    margin : 12
},
text:{
  fontSize : 20,
  fontWeight :'700',
  color : colors.COLOR_WHITE
},
logo:{
  width : 30,
  height : 30,
  marginRight : 15,
},
});