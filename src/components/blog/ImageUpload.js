import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import _ from 'lodash';

import style from '../../sass/style.scss';

class ImageUpload extends React.Component {

  constructor(props){
    super(props);
    this.state = {files:[]}

  }

  onDrop = (files) => {
    this.setState({files:files})
    console.log('ondrop state:', this.state);
  }

  render(){
    const field = this.props;
    if (this.props){
      const {meta: {touched,error}} = field;
      let files = field.input.value;
      const className = `form-group ${touched && error ? 'has-danger' : ""}`
      console.log('field is :', field);
      return(<div className={className}>
        <h4>Upload Files Here</h4>
        <label>{field.label}</label>
        <Dropzone
          onDrop={this.onDrop.bind(this)}
          multiple={false}
          className= "form-control"
          type= "file"
          {...field.input }
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


}

const UploadPreview = (files) => {
  console.log('UploadPreview called ,',files)
  return(<div style={{display:'block'}}>
    <ul>
      {/* {files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)} */}
      <li>{files[0].name}</li>
    </ul>
  </div>)
}

export default ImageUpload;
