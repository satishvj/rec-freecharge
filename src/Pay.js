import React from "react";
import PaymentForm from "./PaymentForm";
import 'react-credit-cards/es/styles-compiled.css';
import { useHistory } from "react-router-dom";


function Pay(props) {
  let history = useHistory()

  console.log(history.location.state.amount)
  return (
    <div className="App">
    <PaymentForm history={history} amount={history.location.state.amount}/>
    </div>
  );
};

export default Pay;