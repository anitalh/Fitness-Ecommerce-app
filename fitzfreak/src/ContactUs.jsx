import React from 'react';
import UseForm from "./UseForm";
import validate from './LoginFormValidationRules';
import './ContactUs.css';
import Accordion from './Accordion.jsx'
import { useEffect, useState } from 'react';
import EnterQuery from './EnterQuery.jsx';

function ContactUs() {

  const [field, setField] = useState("pleaseselect");
  const [queryVisible, setQueryVisible] = useState(false);

  useEffect(() => {
    field === "1" ? setQueryVisible(true) : setQueryVisible(false);
  }, [field]);

  const handleOnChange = (e) => {
    setField(e.target.value);
  };

    const {
      values,
      errors,
      handleChange,
      handleSubmit,
    }= UseForm(submit, validate);

    function submit() {
        console.log('No errors, submit callback called!');
      }
      
      return (
        <main>
        <div>
            <h2 >
                Contact Us for more information!!
                <br/>
                <br/>
                For Quotes or Demo, Please fill the details below!
            </h2>
            <div className="container"> 
                <form className="register" action="/submit" method="POST" onSubmit={handleSubmit}>
                  <div className="field">
                  <label htmlFor='name' className="name">Name : *</label>
                    <div className="control">
                      <input className={`input ${errors.name}`} type="text" name="name" onChange={handleChange} value={values.name || ''} />
                    </div>
                    {errors.name && (
                        <p className="name_error">{errors.name}</p>
                      )}
                  </div>
                  <div className="field">
                    <label htmlFor='email' className="email">Email : *</label>
                    <div className="control">
                      <input className={`input ${errors.email}`} type="text" name="email" onChange={handleChange} value={values.email || ''} />
                    </div>
                    {errors.email && (
                      <p className="email_error">{errors.email}</p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor='confirmemail' className="email">Confirm Email : *</label>
                    <div className="control">
                      <input className={`input ${errors.email}`} type="text" name="confirmemail" onChange={handleChange} value={values.confirmemail || ''} />
                    </div>
                    {errors.confirmemail && (
                      <p className="confirmemail_error">{errors.confirmemail}</p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor='help' className="help">How can we help you? : *</label>
                    <div className="control">
                      <textarea className={`input ${errors.help}`} type="text" name="help" onChange={handleChange} value={values.help || ''} />
                    </div>
                    {errors.help && (
                      <p className="help_error">{errors.help}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="tier">Anything Else? </label> 
                    <select className="form-select" value={field} onChange={handleOnChange}>
                      <option value="pleaseselect" disabled>Please Select</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>
                    {queryVisible && <EnterQuery />}
                  </div>
                  <button type="submit" className="submit_button">Submit</button>
                </form>
                </div>
                <h3> Commonly asked questions</h3>
                <Accordion/>
            </div>
        </main> 
      );
    };
    
    export default ContactUs;