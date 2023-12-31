// import React from 'react';
// // import ImageUploader from 'react-images-upload';
// import ImageUploading from 'react-images-uploading';

// export default function UploadComponent() {
//   onDrop = (pictureFiles, pictureDataURLs) => {
//     const newImagesUploaded = pictureDataURLs.slice(
//       this.props.defaultImages.length
//     );
//     console.warn('pictureDataURLs =>', newImagesUploaded);
//     this.props.handleChange(newImagesUploaded);
//   };

//   return (
//     <ImageUploading
//       withIcon={false}
//       withLabel={false}
//       withPreview={true}
//       buttonText={'Add photos'}
//       fileSizeError={'File size is too big!'}
//       fileTypeError={'This extension is not supported!'}
//       onChange={this.onDrop}
//       imgExtension={this.props.imgExtension}
//       maxFileSize={this.props.maxFileSize}
//       defaultImages={this.props.defaultImages}
//     />
//   );
// }
