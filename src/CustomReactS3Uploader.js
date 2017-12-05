import React from 'react';
import TextField from 'material-ui/TextField';
import ReactS3Uploader from 'react-s3-uploader';
const CustomReactS3Uploader = () =>
  <ReactS3Uploader
    signingUrl="/s3/sign"
    signingUrlMethod="GET"
    accept="image/*,application/pdf"
    s3path="/uploads/"
    // onProgress={() => {
    //   console.log('++++++ onProgress', arguments);
    // }}
    // onError={() => {
    //   console.log('++++++ onError', arguments);
    // }}
    // onFinish={() => {
    //   console.log('++++++ onFinish', arguments);
    // }}
    // signingUrlHeaders={{ additional: headers }}
    // signingUrlQueryParams={{ additional: query - params }}
    signingUrlWithCredentials={true} // in case when need to pass authentication credentials via CORS
    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }} // this is the default
    contentDisposition="auto"
    scrubFilename={filename => filename.replace(/[^\w\d_\-.]+/gi, '')}
    server="http://localhost:8080"
  />;

export default CustomReactS3Uploader;
