import axios from 'axios';

async function Validation(values) { //changed to async function
  let error = {};
  // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else {
    try {
      await checkEmailExistence(values.email);
      error.email = "";
    } catch (error) {
      error.email = "Email does not exist or an error occurred";
    }
  }
  // else if () {
  //   error.email = "Email Does Not Exist!";
  // } 
  // else {
  //   error.email = "";
  // }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else {
    error.password = "";
  }

  if (values.confirmPassword !== values.password) {
    error.confirmPassword = "Password didnt't match"
  } else {
    error.confirmPassword = "";
  }
  // else if () {
  //   error.password = "Password didn't match";
  // } 
  
  return error;
}

async function checkEmailExistence(email) {
  const response = await axios.get('http://localhost:8080/check-email-existence?email=${email}');

  if (!response.data.exists) {
    throw new Error("Email does not exist");
  }
} // added 12/3 4:39pm

export default Validation;