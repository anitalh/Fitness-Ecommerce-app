function validate(values) {
    let errors = {};
    if(!values.name){
        errors.name = 'Name is required';
    }
    else if(values.name.length <= 2){
      errors.name = 'This field  must be greater than 3';
    }
    if (!values.email) {
      errors.email = 'Email address is required';
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.confirmemail) {
      errors.confirmemail = 'This field is required';
    } 
    else if (values.confirmemail != values.email) {
      errors.confirmemail = 'This should match email address';
    }
    if (!values.help) {
      errors.help = 'This field  is required';
    }
    else if(values.help.length <= 1){
      errors.help = 'This field  must be greater than 3';
    }
    return errors;
  };

  export default validate;