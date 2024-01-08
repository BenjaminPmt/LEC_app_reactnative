import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../Contants';
import CurrentMatch from '../components/CurrentMatch';
import LastResult from '../components/LastResult';
import NextMatch from '../components/NextMatch';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Match</Text>
        <CurrentMatch />
      <Text style={styles.title}>Last Result</Text>
        <LastResult scoreA='2' scoreB='0' equipeA={require("../assets/img/Team_Vitality.png")} equipeB={require("../assets/img/Team_BDS.png")} />
        <LastResult scoreA='1' scoreB='2' equipeA={require("../assets/img/MADLIONS.png")} equipeB={require("../assets/img/KCORP.png")} />
      <Text style={styles.title}>Next Match</Text>
        <NextMatch equipeA={require("../assets/img/ROGUE.png")} equipeB={require("../assets/img/G2.webp")} time="18:00" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_PRIMARY,
    alignItems: 'center',
  },
  title:{
    color : colors.COLOR_GREEN,
    fontWeight : '700',
    fontSize : 23,
    marginTop : 44,
  }
});