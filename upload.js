//Thanks MRHRTZ For Example

const axios = require('axios').default;
const FormData = require('form-data')
const fs = require('fs');

const uploadFile = (path, nameFile) => new Promise((resolve, reject) => {
     const fd = new FormData()
     fd.append('sampleFile', fs.createReadStream(path), nameFile)
     axios({
          method: 'POST',
          url: 'https://fxc7-api.herokuapp.com/api/tools/upload',
          data: fd,
          headers: {
               'user-agent': 'MRHRTZ-ZONE :D',
               'content-type': `multipart/form-data; boundary=${fd._boundary}`
          }
     })
     .then(result => resolve(result))
     .catch(reject)
})

module.exports = { uploadFile }
