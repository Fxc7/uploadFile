const { uploadFile } = require('./upload.js')

uploadFile(buffer)
  .then(result => console.log(result))
  .catch(e => console.log(e));
