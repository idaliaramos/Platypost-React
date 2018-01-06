import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
import ReactS3Uploader from 'react-s3-uploader';
export default class CustomReactS3Uploader extends Component {
  static defaultProps = {
    onChange: () => {},
    onNext: () => {}
  };
  // onNext = url => {
  //   onNext(this.state);
  // };
  /////////////////////IMAGE PROCESSING ///////////////////////////////////////////
  _onUploadStart = (file, cb) => {
    // this.props.startImageUpload(file);
    let fileName = file.name.replace(/\.[^/.]+$/, '');
    // Load the image
    let reader = new FileReader();
    reader.onload = readerEvent => {
      let image = new Image();
      image.onload = imageEvent => {
        // Resize the image
        let canvas = document.createElement('canvas');
        let maxSize = 1875;
        let width = image.width;
        let height = image.height;
        if (width > height) {
          if (width > maxSize) {
            height *= maxSize / width;
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width *= maxSize / height;
            height = maxSize;
          }
        }
        canvas.width = 1875; // width;
        canvas.height = 1275; // height;
        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
        let dataUrl = canvas.toDataURL('image/jpeg');
        let resizedImage = this._dataURLToBlob(dataUrl);
        resizedImage.lastModifiedDate = new Date();
        resizedImage.name = file.name;
        cb(resizedImage);
      };
      image.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  };
  _dataURLToBlob = dataURL => {
    if (typeof window !== 'undefined') {
      let BASE64_MARKER = ';base64,';
      if (dataURL.indexOf(BASE64_MARKER) === -1) {
        let parts = dataURL.split(',');
        let contentType = parts[0].split(':')[1];
        let raw = parts[1];
        return new Blob([raw], { type: contentType });
      }

      let parts = dataURL.split(BASE64_MARKER);
      let contentType = parts[0].split(':')[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);

      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    }
  };
  ///////////////////////////////END IMAGE PROCESSING//////////////////////////////////////////////////
  render() {
    return (
      <ReactS3Uploader
        signingUrl="/s3/sign"
        signingUrlMethod="GET"
        accept="image/*,application/pdf"
        s3path="/uploads/"
        preprocess={this._onUploadStart}
        onProgress={(a, b, c, d) => {
          this.props.loading();
        }}
        onError={(a, b, c) => {
          console.log('++++++ onError', arguments);
        }}
        onFinish={(s3data, publicFile) => {
          //on finish send the url to backend to get resized..
          //TODO:
          this.props.onComplete({
            url: s3data.signedUrl,
            publicPath: s3data.publicUrl
          });
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
// 1275 by 1875
// 1875 for 6.25 width
//1275 for 4.25 height
