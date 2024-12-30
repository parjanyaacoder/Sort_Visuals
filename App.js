import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable
} from 'react-native';
import strings from './constants/strings';
import styles from './styles/homeScreen';
import { useSelector } from 'react-redux';
import sortingSelectors from './selectors/sorting';
import Bar from './components/Bar';

const App = () => {

  const array = useSelector(state => sortingSelectors.getArray(state))

  console.log(array)

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <View style={styles.top} >
          <Text style={styles.heading} >{strings.sortVisuals}</Text>
        </View>
        <View style={styles.ctaContainer} >
          <Pressable style={styles.selection1} >
            <Text>{strings.selectSize}</Text>
          </Pressable>
          <Pressable style={styles.selection2} >
            <Text>{strings.selectSpeed}</Text>
          </Pressable>
          <Pressable title={strings.chooseAlgo} style={styles.algoType} >
            <Text>{strings.chooseAlgo}</Text>
          </Pressable>
          <Pressable style={styles.generateCta} >
            <Text>{strings.generateArr}</Text>
          </Pressable>
        </View>
        <View style={styles.arrayArea}>
          {array.map((item, index) => (<Bar key={index} item={item} index={index} />))}
        </View>
        <View style={styles.actionCta} >
          <Pressable style={styles.startCta} >
            <Text>{strings.startSort}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
