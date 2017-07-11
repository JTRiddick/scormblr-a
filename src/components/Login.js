import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends Component{

  renderField(field){
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ""}`

    return(<div className={className}>
      <label>{field.label}</label>
      <input
        className = "form-control"
        type = "text"
        {...field.input}
      />
      <div className = "text-help">
        {touched ? error : ''}
      </div>

    </div>);
  }

  onSubmit(values){
    console.log("values on submit : ",values);
    this.props.userLogin(values, () => {
      this.props.history.push('/Posts');
    });
  }

  render(){
    const {handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="User Name"
          name="username"
          component={this.renderField}
        />
        <Field
          label="User Password"
          name="password"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/Posts" className="btn btn-danger"> Cancel </Link>
      </form>
    );
  }
}
  //validate called by redux-form
function validate(values){
  const errors = {};
  if (!values.username || values.username.length < 3) {
    errors.username = "Enter a name that is at least 3 characters long!";
  }
  if (!values.password){
    errors.password = 'Enter a password please'
  }
  return errors;
}


export default reduxForm({
  validate,
  form: 'UserLoginForm'
})(
  connect(null,{userLogin})(Login)
);
