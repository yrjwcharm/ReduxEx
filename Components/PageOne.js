import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, TouchableOpacity} from 'react-native';

let PageOne = (props) => {
  let increment = () => {
    console.log(props);
    props.incremnetAction();
  };
  let reduce = () => {
    props.reduceAction();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Click here to refresh jwt" onPress={increment} />
      <TouchableOpacity onPress={reduce}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>减少数量</Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 * The second parameter of the "connect" function. This is like the "transmitter".
 * It stores a function (in this case, "sendAction") as a prop for the connected component.
 * @param {*} dispatch The default parameter of the this function. It is a function itself,
 * pretty much "sends" an action (in this case, the "sendAction") to the store.
 * @return A function that contains a object which has a function dispatching an action.
 */
const mapDispatchToProps = (dispatch) => ({
  incremnetAction: () => {
    dispatch({
      type: 'INCREMENT',
    });
  },
  reduceAction: () => {
    dispatch({
      type: 'REDUCE',
    });
  },
});

/**
 * Here, the function "sendAction" is stored as a prop of the component "PageOne".
 * Therefore, the component "PageOne" can directly call the "sendAction" function
 * even if it is not in the definition of the component itself.
 */
export default connect(null, mapDispatchToProps)(PageOne);
