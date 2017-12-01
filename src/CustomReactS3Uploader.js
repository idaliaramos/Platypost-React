import React from 'react';
import TextField from 'material-ui/TextField';
import ReactS3Uploader from 'react-s3-uploader';
const CustomReactS3Uploader = () =>
  <ReactS3Uploader
    signingUrl="/s3/sign"
    signingUrlMethod="GET"
    accept="image/*,application/pdf"
    s3path="/uploads/"
    onProgress={() => {
      console.log('++++++ onProgress', arguments);
    }}
    onError={() => {
      console.log('++++++ onError', arguments);
    }}
    onFinish={() => {
      console.log('++++++ onFinish', arguments);
    }}
    // signingUrlHeaders={{ additional: headers }}
    // signingUrlQueryParams={{ additional: query - params }}
    signingUrlWithCredentials={true} // in case when need to pass authentication credentials via CORS
    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }} // this is the default
    contentDisposition="auto"
    scrubFilename={filename => filename.replace(/[^\w\d_\-.]+/gi, '')}
    server="http://localhost:8080"
  />;

export default CustomReactS3Uploader;
// const React = require('react');
// const Dropzone = require('react-dropzone');
// const upload = require('superagent')
// var myHeaders = new Headers();
//
// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };
// onDrop = (files) => {
//   fetch('/upload', myInit).then(response => {
//     response.json().then(data => {
//       alert(`We are in business, ${data.email}`);
//     });
//   });
// }
//  class FileUpload extends React.Component{
//     onDrop: function (files) {
//       upload.post('/upload')
//       .attach('theseNamesMustMatch', files[0])
//       .end((err, res) => {
//         if (err) console.log(err);
//         alert('File uploaded!');
//       })
//     }
//
//     render(){
//       return (
//           <div>
//             <Dropzone onDrop={this.onDrop} multiple=false>
//               <div>Try dropping a file here, or click to select a file to upload.</div>
//             </Dropzone>
//           </div>
//       );
//     }
// };
//
// export default FileUpload;
