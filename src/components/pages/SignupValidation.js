function Validation(email, password, retypedPassword) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (email === "") {
      error.email = "Email should not be empty";
    } 
    else if (!email_pattern.test(email)) {
      error.email = "Email Didn't match";
    } 
    else {
      error.email = "";
    }

    if (password === "") {
      error.password = "Password should not be empty";
    } 
    // else if (!password_pattern.test(password)) {
    //   error.password = "Password didn't match";
    // } 
    else {
      error.password = "";
    }

    if (retypedPassword === "") {
        error.retypedPassword = "Retyped Password should not be empty";
      } 
      else if (retypedPassword !== password) {
        error.retypedPassword = "Retyped Password should match password";
      } 
      else {
        error.retypedPassword = "";
      }

    return error;
  }

  export default Validation;