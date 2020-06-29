import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
class PageThree extends Component {
  constructor(props) {
    super();
    console.log(555, props);
  }
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>count:{this.props.count}</Text>
      </View>
    );
  }
}
const mapStateToProps1 = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps1, null)(PageThree);
