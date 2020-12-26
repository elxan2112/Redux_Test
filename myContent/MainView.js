import React, {Component} from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

class MainView extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>
                    {this.props.name}
                </Text>
                <Text>
                    {this.props.number}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        name: state.name,
        number: state.number,
    }
}

export default connect(mapStateToProps)(MainView);