import React, {Component} from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import {adding} from '../redux/Action'

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <TextInput
                placeholder="name"
                onChange = {(text) => this.name1 = text}/>
                <TextInput
                placeholder="number"
                onChange = {(text)=> this.number1 = text}/>
                <TouchableOpacity
                onPress = {()=> this.props.add(this.name1, this.number1)}>
                    <Text>najmi</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        add: (name, number)=>dispatch(adding(name, number)), dispatch
    }

}

export default connect(null, mapDispatchToProps)(Header);