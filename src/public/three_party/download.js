// import { Platform, CameraRoll } from 'react-native';
// import RNFS from 'react-native-fs';
// /**
//  * 下载网络图片到相册
//  * @param uri  图片网络地址
//  * @returns {*}
//  */
// const DownloadImage = (uri) => {
//     if (!uri) return null;
//         return new Promise((resolve, reject) => {
//             let timestamp = (new Date()).getTime();//获取当前时间错
//             let random = String(((Math.random() * 1000000) | 0))//六位随机数
//             let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath; //外部文件，共享目录的绝对路径（仅限android）
//             const downloadDest = `${dirs}/${timestamp+random}.jpg`;
//             const formUrl = uri;
//             const options = {
//                 fromUrl: formUrl,
//                 toFile: downloadDest,
//                 background: true,
//                 begin: (res) => {
//                     // console.log('begin', res);
//                     // console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
//                 },
//             };
//             try {
//                 const ret = RNFS.downloadFile(options);
//                 ret.promise.then(res => {
//                     // console.log('success', res);
//                     // console.log('file://' + downloadDest)
//                     var promise = CameraRoll.saveToCameraRoll(downloadDest);
//                     promise.then(function(result) {
//                         // alert('保存成功！地址如下：\n' + result);
//                     }).catch(function(error) {
//                         console.log('error', error);
//                         // alert('保存失败！\n' + error);
//                     });
//                     resolve(res);
//                 }).catch(err => {
//                     reject(new Error(err))
//                 });
//             } catch (e) {
//                 reject(new Error(e))
//             }
//     })
// }

// /**
//  * 保存缓存图片到相册
//  * @param ImageUrl  图片缓存地址
//  * @returns {*}
//  */
// const DownloadLocalImage=(ImageUrl)=> {
//     if (!ImageUrl) return null;
//     return new Promise((resolve, reject) => {
//         try {
//                 var promise = CameraRoll.saveToCameraRoll(ImageUrl);
//                 promise.then(function(result) {
//                     resolve({statusCode:200});
//                     //alert('保存成功！地址如下：\n' + result);
//                 }).catch(function(error) {
//                      console.log('error', error);
//                     // alert('保存失败！\n' + error);
//                 });
//         } catch (e) {
//             reject(new Error(e))
//         }

//     })
// }

// const convertImageToBase64 = (path) => {
//     if (!path) {
//         return;
//     }
//     return new Promise((resolve, reject) => {
//         try {
//                 var promise = RNFS.readFile(path, 'base64');
//                 promise.then(function(content) {
//                     resolve({content});
//                     //alert('保存成功！地址如下：\n' + result);
//                 }).catch(function(error) {
//                         console.log('error', error);
//                     // alert('保存失败！\n' + error);
//                 });
//         } catch (e) {
//             reject(new Error(e))
//         }

//     })
// }

// const Download = {
//     DownloadImage,
//     DownloadLocalImage,
//     convertImageToBase64,
// }
// export default Download;

// /**
//  * 基于RN组件 - CameraRoll 
//  * 和三方组件 - react-native-fs
//  * 实现将 网络图片或者缓存图片 保存到本地的功能
//  * 
//  * react-native-fs安装
//  * 
//  * 1.npm install react-native-fs --save
//  * 2.react-native link react-native-fs
//  * 3.cd ios && pod install
//  * 
//  * iOS端配置
//  * 
//  * 1.在项目根目录下的 Libraries 右键选 Add Files to "XXXXXX" 选择
//  *      node_module/react-native/Libraries/CameraRoll文件夹
//  *      下的 .xcodeproj文件 把这个项目添加进Libraries
//  * 
//  * 2.打开这个RCTCameraRoll下的Products,将libRCTCameraRoll.a拖到link下
//  *      Build Phases -> Link Binary With Libraries 里添加 libRCTCameraRoll.a
//  * 
//  * 3.配置权限（info.plist）
//  *      Privacy - Photo Library Additions Usage Description
//  *      Privacy - Photo Library Usage Description
//  * 
//  * Android端配置
//  * 
//  * 1.添加权限
//  *      <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
//  *      <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
//  * 
//  * over
//  */