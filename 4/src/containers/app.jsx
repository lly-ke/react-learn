import {connect} from "react-redux";
import React, {Component} from 'react';
import {incrementCreator, decrementCreator} from '../redux-two/actions'
import counter from '../components/counter';

export default connect(
    state => ({count:state}),
    {incrementCreator, decrementCreator}
)(counter);