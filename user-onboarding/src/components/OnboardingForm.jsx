import React from 'react';
import {Field, withFormik, Form, ErrorMessage, useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function OnboardingForm(props){
    return (
        <div className = "onboarding-form">
            <Form>
                <ErrorMessage
                    name = "name"
                    render = {msg => <div className = "error">{msg}</div>}
                />
                <label>
                    Name
                    <Field
                        type = "text"
                        name = "name"
                        placeholder = "Enter your name"
                    />
                </label>

                <ErrorMessage
                    name = "password"
                    render = {msg => <div className = "error">{msg}</div>}
                />
                <label>
                    Password
                    <Field
                        type = "password"
                        name = "password"
                        placeholder = "Enter your password"
                    />
                </label>

                <ErrorMessage
                    name = "email"
                    render = {msg => <div className = "error">{msg}</div>}
                />
                <label>
                    Name
                    <Field
                        type = "email"
                        name = "email"
                        placeholder = "Enter your email"
                    />
                </label>

                <ErrorMessage
                    name = "terms"
                    render = {msg => <div className = "error">{msg}</div>}
                />
                <label>
                    Terms of Service
                    <Field
                        type = "checkbox"
                        name = "terms"
                    />
                </label>

                <input type="submit"/>
            </Form>
        </div>
    );
}

const OnboardingFormWithFormik = withFormik({
    mapPropsToValues() {
        return {
          name: "",
          password: "",
          email: "",
          terms: false
        };
      },

      validationSchema: Yup.object().shape({
        name: Yup.string().required("Please enter your name"),
        password: Yup.string().required("Please enter a password"),
        email: Yup.string().required("Please enter your email").email().notOneOf(["waffle@syrup.com"], "That email is already taken"),
        terms: Yup.boolean().oneOf([true], 'Please accept our terms'),
      }),

      handleSubmit(values, tools){
          console.log(values, tools);
          
        axios.post("https://reqres.in/api/users/", values)
        .then(response => {
          console.log(response.data);
          tools.props.addUserToState(response.data);
          tools.resetForm();
        })
        .catch(error => {
          console.log(error);
        });
      }

})(OnboardingForm);

export default OnboardingFormWithFormik;