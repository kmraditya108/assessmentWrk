import React, { PureComponent } from 'react';
import {connect} from "react-redux";

import HomeComponent from '../component/HomeComponent'

class WelcomeContainer extends PureComponent {

    render() {
        return <HomeComponent {...this.props} />
    }
}
// mapping redux state to this component.
const mapStateToProps = state => ({
    getName: state.WelcomeReducer.response
});

export default connect(mapStateToProps, null)(WelcomeContainer);