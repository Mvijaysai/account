import React,{Component} from 'react';
import {connect} from 'react-redux';
class AccountActions extends Component{
    depositBalance=()=>
    {
        this.props.deposit();
        document.getElementById("dep").style.color="green"
    }
    withdrawBalance=()=>{
        this.props.withdraw();
        document.getElementById("dep").style.color="red"
    }
    render(){
        return(
            <div>
                <button onClick={this.depositBalance}>Deposit $10</button>
                <button onClick={this.withdrawBalance}>Withdraw $10</button>
            </div>
        )
    }
}
var mapDispatchToProps =(dispatch)=>{
    return{
        deposit:()=>{
            dispatch({type:'DEPOSIT'})
        },
        withdraw:()=>{
            dispatch({type:'WITHDRAW'})
        }
    }
}
export default connect (null,mapDispatchToProps)(AccountActions);