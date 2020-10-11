import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { FormControl, Button } from '@material-ui/core';
import './index.css'
import './App.css';

export default class PaymentForm extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };
  }
  
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  pay= (e)=> {
    console.log(e.target.value)
    this.props.history.push('/otp')
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <FormControl className='payForm'>

        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className='MuiInputBase-root MuiInput-root'
            />
          	<input
            type="text"
            name="name"
            placeholder="Name on Card"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className='MuiInputBase-root MuiInput-root'
            />

            <input
            type="number"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className='MuiInputBase-root MuiInput-root'
            />

          <input
            type="number"
            name="expiry"
            placeholder="expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className='MuiInputBase-root MuiInput-root'
            />
            <Button variant="contained" color="primary" onClick={this.pay}>
                                        Pay {`$` + this.props.amount}
                    </Button>
            </FormControl>
        </form>
      </div>
    );
  }
}