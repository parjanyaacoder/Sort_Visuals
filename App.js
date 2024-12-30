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
import sortingAlgos from './constants/sortingAlgos';
import SelectionChip from './components/SelectionChip';

const App = () => {

  const array = useSelector(state => sortingSelectors.getArray(state))
  const selectedAlgoType = useSelector(state => sortingSelectors.getAlgoType)

  console.log("")

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <View style={{ height: "35%" }} >
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
          <Pressable style={styles.generateCta} >
            <Text>{strings.generateArr}</Text>
          </Pressable>
        </View>
        <Text style={styles.padHz12} >{strings.chooseAlgo}</Text>
        <View style={styles.algos} > 
        {Object.values(sortingAlgos).map((item) => {
            return <SelectionChip key={item} type={item} isSelected={selectedAlgoType == item} />
          })}
        </View>
        </View>
        <View style={{ height: '65%', backgroundColor: 'red' }} >
        <View style={styles.arrayArea}>
          {array.map((item, index) => (<Bar key={index} item={item} index={index} />))}
        </View>
        <View style={styles.actionCta} >
          <Pressable style={styles.startCta} >
            <Text>{strings.startSort}</Text>
          </Pressable>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
