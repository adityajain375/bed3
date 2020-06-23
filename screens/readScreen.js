import React from 'react';
import {Text ,View , StyleSheet} from 'react-native';

export default class ReadScreen extends React.Component{
    
render(){
    return(
<View>
<View style={{backgroundColor:"lightgreen",marginTop:40}}>
<Text style={styles.title}>BedTime Stories</Text>
          </View>
<View style={styles.story}>
    <Text style={styles.storyTitle}>The Ugly Duckling</Text>
         <Text style={styles.story}> The eggs hatch one by one, and soon, there are six yellow-feathered ducklings, chirping excitedly. The last egg takes longer to hatch, and from it emerges a strange looking duckling with grey feathers. Everybody finds the grey duckling ugly, including its own mother. The dejected duckling runs away and lives alone in a swamp until winter comes. Seeing the duckling starving in winter, a farmer takes pity on the ugly duckling and gives it food and shelter at home. However, the duckling is afraid of the farmer’s noisy children and flees to a cave by a frozen lake. When spring comes, a flock of beautiful swans descend on the lake, and the duckling, which is now fully grown, but lonely, approaches the swans, fully expecting to be rejected. To his surprise, the swans welcome him. He looks at his reflection in the water and realises that he is not an ugly duckling anymore, but a beautiful swan. The swan joins this flock and flies off with his new family.</Text>
     </View>
</View>
    );
}
}

const styles = StyleSheet.create({
story:{
    margin:30
},
storyTitle:{
    fontWeight:'bold',
    fontSize:30
},
title:{
    fontSize:25,
    padding:10,
    textAlign:'center'
  }
});
