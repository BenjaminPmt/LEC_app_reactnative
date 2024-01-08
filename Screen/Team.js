import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { colors, teams } from '../Contants';

export default function Team() {
  // Grouper les équipes par groupes de 3 pour afficher sur la même ligne
  const groupedTeams = teams.reduce((acc, team, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(team);
    return acc;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LEC Teams</Text>
      <FlatList
        style={styles.flatlist}
        data={groupedTeams}
        renderItem={({ item: teamGroup }) => (
          <View style={styles.rowContainer}>
            {teamGroup.map((team) => (
              <View key={team.id} style={styles.teamContainer}>
                <Image style={styles.logo} source={team.image} />
                <Text style={styles.text}>{team.name}</Text>
              </View>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_PRIMARY,
    
  },
  flatlist:{
    top : 115,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 25,
  },
  teamContainer: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: colors.COLOR_GREEN,
    fontWeight: '700',
    fontSize: 23,
    marginTop: 44,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.COLOR_WHITE,
    marginTop: 8,
  },
  logo: {
    width: 30,
    height: 30,
  },
});
