import React, { Component } from 'react';
import {connect} from 'react-redux';

class BalanceDisplay extends Component {
    constructor(){
        super();
        this.state={
            balance:100
        }
    }
    componentWillReceiveProps(newProps){
        this.setState({
            balance:newProps.balance
        })
    }
    render() {
        return (
            <div>
                <h3 id="dep">My Current balance is{this.state.balance}</h3>
            </div>
        );
    }
}
var mapStateToProps=(state)=>{
    return{
        balance:state
    }
}
export default connect(mapStateToProps,null) (BalanceDisplay);