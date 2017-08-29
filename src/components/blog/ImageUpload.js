import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import _ from 'lodash';

import style from '../../sass/style.scss';

const ImageUpload = (props) => {

  // onDrop(files){
  //   console.log('onDrop called with :', arguments);
  //   // superagent.post('/upload')
  //   //  .attach('theseNamesMustMatch', files[0])
  //   //  .end((err, res) => {
  //   //    if (err) console.log(err);
  //   //    alert('File uploaded!');
  //   //  })
  // }


  console.log('image upload constructor props: ', props);
  const field = props;

  if (field){
    const {meta: {touched,error}} = field;
    let files = props.input.value;
    const className = `form-group ${touched && error ? 'has-danger' : ""}`
    console.log('field is :', field);
    return(<div className={className}>
      <h4>Upload Files Here</h4>
      <label>{field.label}</label>
      <Dropzone
        onDrop={( filesToUpload, e ) => this.onDrop(filesToUpload)}
        multiple= {false}
        className= "form-control"
        type= "file"
        {...field.input}
      />
      {console.log('files in dropzone :',files, 'Array.isArray(files) ',Array.isArray(files))}
      {field.meta.touched &&
           field.meta.error &&
           <span className="error">{field.meta.error}</span>}
      { files &&
        <UploadPreview files={files}/>
      }


    </div>);
  }else{
    return(
      <div>
        <h4>IMAGE UPLOADER TROUBLED</h4>
      </div>
    )
  }

}

const UploadPreview = (files) => {
  return(<ul>
          { _.forEach(files,(file, i) => {<li key={i}>{file.name}</li>}) }
         </ul>)
}

export default ImageUpload;
