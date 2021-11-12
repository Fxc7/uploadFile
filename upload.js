//Thanks MRHRTZ For Example

const axios = require('axios').default;
const FormData = require('form-data')
const { fromBuffer } = require("file-type");

function uploadFile(buffer){
  return new Promise(async(resolve, reject) => {
    let { ext } = await fromBuffer(buff);
    const fd = new FormData();
    fd.append("sampleFile", buffer, new Date().getTime()+"."+ ext);
    await axios.request({
      method: "POST",
      url: "https://api-xcoders.xyz/api/tools/upload",
      data: fd,
      headers: {
        'content-type':`multipart/form-data; boundary=${fd._boundary}`
      }
    }).then(({data}) => resolve(data)).catch(reject);
  });
}

module.exports = { uploadFile }
