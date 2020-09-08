import React, { PureComponent } from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import DashboardComponent from '../component/DashboardComponent'

class DashboardContainer extends PureComponent {
    // constructor(){
    //     super();

    //     // write your constructor level code.
    //     // eg : state initilization

    // }

    
    
    render() {
        return <DashboardComponent {...this.props}/>
    }
}

const mapStateToProps = state => ({
    getName:state.WelcomeReducer.response
})

export default connect(mapStateToProps, null)(DashboardContainer);