import React from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import { FormControl, Button, Grid } from '@material-ui/core';
import './index.css'
import './App.css';


export default class OTP extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      otp: '',
    };
  }
  
  
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  Verify = (e) => {
    console.log(this.state)
    if(this.state.otp === '123456'){
      console.log('sucess')
      this.props.history.push('/success')
    }else{
      console.log('failed')
      this.props.history.push('/failed')
    }
  }
  
  render() {
    return (
      <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
      <div id="PaymentForm">

      <Grid container>
      <Grid item xs={12} sm={2} md={4} lg={4}>
</Grid>
      <Grid item xs={12} sm={8} md={4} lg={4}>

      <img src='/svgs/otp.svg' className='svgImg' alt="online" style={{height:'250px'}} />
</Grid>
      <Grid item xs={12} sm={2} md={4} lg={4}>
</Grid>
</Grid>
        <form>
          <FormControl className='payForm'>
          <input
            type="number"
            name="otp"
            placeholder="Enter OTP"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className='MuiInputBase-root MuiInput-root'
            />
            <Button variant="contained" color="primary" onClick={this.Verify}>
                                        Pay 
                    </Button>
            </FormControl>
        </form>
      </div>
      </Grid>
      </Grid>

    );
  }
}