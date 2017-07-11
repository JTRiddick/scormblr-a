import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../actions';




class PostsNew extends Component{


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
    this.props.createPost(values, () => {
      this.props.history.push('/Posts');
    });
  }

  render(){
    const {handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Post Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="body"
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
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters long!";
  }
  if (!values.body){
    errors.body = 'Enter some content please'
  }
  return errors;
}


export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null,{createPost})(PostsNew)
);
