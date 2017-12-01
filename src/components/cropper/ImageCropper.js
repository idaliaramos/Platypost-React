import React, { Component } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
class ImageCropper extends Component {
  _crop() {
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  render() {
    return (
      <Cropper
        ref="cropper"
        src="http://fengyuanchen.github.io/cropper/img/picture.jpg"
        style={{ height: 1875, width: 1275 }}
        // Cropper.js options
        aspectRatio={6.25 / 4.5}
        guides={false}
        crop={this._crop.bind(this)}
      />
    );
  }
}
