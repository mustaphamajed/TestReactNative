import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Card from './Components/Card'
import data from './Components/Constants/data'
import Header from './Components/Header'
import Search from './Components/Search'
import Ionicons from 'react-native-vector-icons/Ionicons'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Header />
      </View>
      <View style={{ flex: 0.9 }}>
        <View >
          <Text style={{ color: 'rgb(5, 31, 77)', fontSize: 24, fontWeight: '900' }}>
            Total assets managed by members
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ backgroundColor: '#f8c22e', justifyContent: 'center', paddingHorizontal: 8, borderRadius: 8 }}>
              <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '900' }}>5</Text>
            </View>
            <View style={{ backgroundColor: '#f8c22e', justifyContent: 'center', paddingHorizontal: 8, borderRadius: 8, marginHorizontal: 5 }}>
              <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '900' }}>2</Text>
            </View>
            <View style={{ backgroundColor: '#f8c22e', justifyContent: 'center', paddingHorizontal: 8, borderRadius: 8 }}>
              <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '900' }}>6</Text>
            </View>
            <Text style={{ color: 'rgb(5, 31, 77)', fontSize: 24, fontWeight: '900' }}> Billion $</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>

          <Search />



          <Ionicons name='filter' size={25} color="#FFF" style={{ backgroundColor: "#003ba4", alignSelf: 'center', padding: 8 }} />
          <Ionicons name='arrow-back' size={25} color="#FFF" style={{ backgroundColor: "#003ba4", marginHorizontal: 5, alignSelf: 'center', padding: 8 }} />

        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card data={item} />
          )}
        />
      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  Header: {
    flex: 0.1,

  }
})