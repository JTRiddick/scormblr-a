import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';

import style from '../../sass/style.scss';

class ImageUpload extends Component {

  constructor(props){
    //
    super();
    console.log('image upload constructor props: ', props);
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

  render(){
    return(
      {renderImageUpload}
    )
  }

}

export default ImageUpload;
