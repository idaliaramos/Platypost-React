import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ReactS3Uploader from 'react-s3-uploader';
export default class CustomReactS3Uploader extends Component {
  static defaultProps = {
    onChange: () => {},
    onNext: () => {}
  };
  // onNext = url => {
  //   onNext(this.state);
  // };
  render() {
    return (
      <ReactS3Uploader
        signingUrl="/s3/sign"
        signingUrlMethod="GET"
        accept="image/*,application/pdf"
        s3path="/uploads/"
        // preprocess={function(file, func) {
        //   // debugger;
        // }}
        // onProgress={() => {
        //   // debugger;
        //   console.log('++++++ onProgress', arguments);
        // }}
        // onError={(a, b, c) => {
        //   console.log('++++++ onError', arguments);
        // }}
        onFinish={(s3data, publicFile) => {
          //on finish send the url to backend to get resized..
          //update state with this url
          //TODO:
          this.props.onComplete({
            url: s3data.signedUrl,
            publicPath: s3data.publicUrl
          });
          console.log('++++++ onFinish', arguments);
        }}
        // signingUrlHeaders={{ additional: headers }}
        // signingUrlQueryParams={{ additional: query - params }}
        signingUrlWithCredentials={true} // in case when need to pass authentication credentials via CORS
        uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }} // this is the default
        contentDisposition="auto"
        scrubFilename={filename => filename.replace(/[^\w\d_\-.]+/gi, '')}
        server="https://mailapp-backend-187406.appspot.com"
      />
    );
  }
}

//FUNCTIONAL COMPONENT
// import React from 'react';
// import TextField from 'material-ui/TextField';
// import ReactS3Uploader from 'react-s3-uploader';
// const CustomReactS3Uploader = () =>
//   <ReactS3Uploader
//     signingUrl="/s3/sign"
//     signingUrlMethod="GET"
//     accept="image/*,application/pdf"
//     s3path="/uploads/"
//     // preprocess={function(file, func) {
//     //   // debugger;
//     // }}
//     // onProgress={() => {
//     //   // debugger;
//     //   console.log('++++++ onProgress', arguments);
//     // }}
//     // onError={(a, b, c) => {
//     //   console.log('++++++ onError', arguments);
//     // }}
//     onFinish={(s3data, publicFile) => {
//       //on finish send the url to backend to get resized..
//       //update state with this url
//       //TODO:
//       //send it back to the server, capture s3link data
//       onNext(s3data.signedUrl);
//       console.log(s3data.signedUrl, 'this should be the url');
//       console.log(this.state, 'this is the state');
//       console.log('++++++ onFinish', arguments);
//     }}
//     // signingUrlHeaders={{ additional: headers }}
//     // signingUrlQueryParams={{ additional: query - params }}
//     signingUrlWithCredentials={true} // in case when need to pass authentication credentials via CORS
//     uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }} // this is the default
//     contentDisposition="auto"
//     scrubFilename={filename => filename.replace(/[^\w\d_\-.]+/gi, '')}
//     server="https://mailapp-backend-187406.appspot.com"
//   />;
//
// export default CustomReactS3Uploader;

//IMAGE UPLOAD TRY
// import React from 'react';
// import TextField from 'material-ui/TextField';
// import ReactS3Uploader from 'react-s3-uploader';
// // import fs from 'fs';
// // import gm from 'gm';
// const _onUploadStart = (file, cb) => {
//   console.log('hello');
//   debugger;
//   this.props.startImageUpload(file);
//   let fileName = file.name.replace(/\.[^/.]+$/, '');
//   // Load the image
//   let reader = new FileReader();
//   reader.onload = readerEvent => {
//     let image = new Image();
//     image.onload = imageEvent => {
//       // Resize the image
//       let canvas = document.createElement('canvas');
//       let maxSize = 1050;
//       let width = image.width;
//       let height = image.height;
//       if (width > height) {
//         if (width > maxSize) {
//           height *= maxSize / width;
//           width = maxSize;
//         }
//       } else {
//         if (height > maxSize) {
//           width *= maxSize / height;
//           height = maxSize;
//         }
//       }
//       canvas.width = width;
//       canvas.height = height;
//       canvas.getContext('2d').drawImage(image, 0, 0, width, height);
//       let dataUrl = canvas.toDataURL('image/jpeg');
//       let resizedImage = this._dataURLToBlob(dataUrl);
//       resizedImage.lastModifiedDate = new Date();
//       resizedImage.name = file.name;
//       cb(resizedImage);
//     };
//     image.src = readerEvent.target.result;
//   };
//   reader.readAsDataURL(file);
// };
// const _dataURLToBlob = dataURL => {
//   if (typeof window !== 'undefined') {
//     let BASE64_MARKER = ';base64,';
//     if (dataURL.indexOf(BASE64_MARKER) === -1) {
//       let parts = dataURL.split(',');
//       let contentType = parts[0].split(':')[1];
//       let raw = parts[1];
//       return new Blob([raw], { type: contentType });
//     }
//
//     let parts = dataURL.split(BASE64_MARKER);
//     let contentType = parts[0].split(':')[1];
//     let raw = window.atob(parts[1]);
//     let rawLength = raw.length;
//     let uInt8Array = new Uint8Array(rawLength);
//
//     for (var i = 0; i < rawLength; ++i) {
//       uInt8Array[i] = raw.charCodeAt(i);
//     }
//     return new Blob([uInt8Array], { type: contentType });
//   }
// };
// const CustomReactS3Uploader = () =>
//   <ReactS3Uploader
//     signingUrl="/s3/sign"
//     signingUrlMethod="GET"
//     accept="image/*,application/pdf"
//     s3path="/uploads/"
//     preprocess={this._onUploadStart}
//     // onProgress={() => {
//     //   // debugger;
//     //   console.log('++++++ onProgress', arguments);
//     // }}
//     // onError={(a, b, c) => {
//     //   console.log('++++++ onError', arguments);
//     // }}
//     // onFinish={(s3data, publicFile) => {
//     //   //on finish send the url to backend to get resized..
//     //   //send it back to the server
//     //   console.log('++++++ onFinish', arguments);
//     // }}
//     // signingUrlHeaders={{ additional: headers }}
//     // signingUrlQueryParams={{ additional: query - params }}
//     signingUrlWithCredentials={true} // in case when need to pass authentication credentials via CORS
//     uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }} // this is the default
//     contentDisposition="auto"
//     scrubFilename={filename => filename.replace(/[^\w\d_\-.]+/gi, '')}
//     server="http://localhost:8080"
//     // https://mailapp-backend-187406.appspot.com
//   />;
//
// export default CustomReactS3Uploader;
