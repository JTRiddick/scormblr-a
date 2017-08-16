import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
import Dropzone from 'react-dropzone';
import { upload } from 'superagent';

import style from '../../sass/style.scss';


class PostsNew extends Component{


  renderField(field){
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ""}`

    return(<div className={className}>
      <label>{field.label}</label>
      <input
        className = "form-control"
        type= "text"
        {...field.input}
      />
      <div className = "text-help">
        {touched ? error : ''}
      </div>

    </div>);
  }

  renderImageUpload(field){
    const {meta: {touched,error}} = field;
    const files = field.input.value;
    const className = `form-group ${touched && error ? 'has-danger' : ""}`

    return(<div className={className}>
      <label>{field.label}</label>
      <Dropzone
        onDrop={( filesToUpload, e ) => this.onDrop(filesToUpload)}
        multiple= {false}
        className= "form-control"
        type= "file"
        {...field.input}

      />
      {field.meta.touched &&
           field.meta.error &&
           <span className="error">{field.meta.error}</span>}
         {files && Array.isArray(files) && (
           <ul>
             { files.map((file, i) => <li key={i}>{file.name}</li>) }
           </ul>
         )}

    </div>);
  }

  onDrop(files){
    console.log('onDrop called with :', arguments);
    // superagent.post('/upload')
    //  .attach('theseNamesMustMatch', files[0])
    //  .end((err, res) => {
    //    if (err) console.log(err);
    //    alert('File uploaded!');
    //  })
  }

  onSubmit(values){
    console.log("values on submit : ",{...values,'user':this.props.user,});
    this.props.createPost({...values,'user':this.props.user,'userId':this.props.userId}, () => {
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
        <Field
          label="Post-Image"
          name="files"
          component={this.renderImageUpload}
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

const mapStateToProps = ({user},ownProps ) =>{
  return {
    user: user.currentUser._doc.username,
    userId: user.currentUser.$__._id
  };
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(mapStateToProps,{createPost})(PostsNew)
);
