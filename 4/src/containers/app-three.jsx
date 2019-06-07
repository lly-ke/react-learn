import {connect} from 'react-redux'
import Counter from '../components/counter-three.jsx';
import {increment,decrement} from "../redux-three/actions";

export default connect(
    state => ({count:state}),
    {increment,decrement}
)(Counter)