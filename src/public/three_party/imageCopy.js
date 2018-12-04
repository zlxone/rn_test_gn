// import {
//     Linking,
//     StatusBar
// } from 'react-native';
// import ImageCropPicker from 'react-native-image-crop-picker'

// function imagePicker() {
//     StatusBar.setBarStyle('dark-content')
//     let promise = new Promise(function (resolve, reject) {
//         ImageCropPicker
//             .openPicker({mediaType: 'photo',cropping : false,writeTempFile: false, includeBase64: true, loadingLabelText: '正在处理图片',compressImageQuality : 0.3})
//             .then(data => {
//                 StatusBar.setBarStyle('dark-content')
//                 resolve(data);
//             })
//             .catch(error => {
//                 StatusBar.setBarStyle('dark-content')
//                 switch (error.code) {
//                     case 'E_PERMISSION_MISSING':
//                         return modalAlert({content: '请开启相册权限'})
//                 }
//             })
//     })
//     return promise
// }

// const ImageCrop = {
//     imagePicker,
// }
// export default ImageCrop;