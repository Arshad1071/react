import React, { Component } from 'react';
import SripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'

export class Payments extends Component{
    render(){
        return(
            <SripeCheckout
                name="Emaly"
                description='$5 for 5 email credits'
                amount={500}
                token={token => console.log(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                >
                  

                <button className='btn' >Add Credits </button>

                <h1>Hello, {this.props}</h1>;
            </SripeCheckout>    
        

        );  
    }

}

export default connect(null,actions) (Payments) ;