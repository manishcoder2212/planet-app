import * as React from 'react';
import { Text, View, StyleSheet,Header,TextInput,TouchableOpacity,Image,Alert,FlatList } from 'react-native';
import axios from 'axios'

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      storage:[]
    }
  }
    getImage=()=>{
  axios
  .get("http://localhost:5000/")
  .then(response=>{
              console.log(response.data.data[0].specifications)
              this.setState({storage:response.data.data})

  })
  .catch(error=>{
    Alert.alert(error.message)
  })
   }
 componentDidMount(){
 this.getImage();
 
}

renderItem = ({ item }) => (
<View style={ item.specifications[1]=="goldilock"?styles.view: null}>
  <Text>{item.specifications[1]=="goldilock"?item.name: null}</Text>
   <Text>{item.specifications[1]=="goldilock"?item.planet_type: null}</Text>
      <Text>{item.specifications[1]=="goldilock"?item.specifications: null}</Text>
   </View>
)

  render(){
  return (
    <View style={styles.container}>
      <Text>Exo Planet App</Text>
        <FlatList
        data={this.state.storage}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    marginTop:30,
    backgroundColor:"#03fcf8"
  }
});
