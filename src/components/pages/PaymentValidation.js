function Validation(cardNo, expDate, CVV) {
    let error = {};
    const cardNo_pattern = /^(?:\d{4}[- ]?){3}\d{4}$/;
    const expDate_pattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    const CVV_pattern = /^\d{3}$/;
  
    if (cardNo === "") {
      error.cardNo= "Card number should not be empty";
    } 
    else if (!cardNo_pattern.test(cardNo)) {
      error.cardNo = "Invalid Card Number";
    } 
    else {
      error.cardNo= "";
    }

    if (expDate === "") {
      error.expDate = "Expiration Date should not be empty";
    } 
    else if (!expDate_pattern.test(expDate)) {
      error.expDate = "Invalid Expiration Date";
    } 
    else {
      error.expDate = "";
    }

    if (CVV === "") {
        error.CVV = "CVV should not be empty";
      } 
      else if ((!CVV_pattern.test(CVV))) {
        error.CVV = "Invalid CVV";
      } 
      else {
        error.CVV = "";
      }

    return error;
  }

  export default Validation;