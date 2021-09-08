case 'media2url':
    const { uploadFile } = require('./upload.js')
    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    const media = await fxc7.downloadAndSaveMediaMessage(encmedia)
    anu = await uploadFile(media, `${args[0] ? args[0] : Date.now()}.jpg`)
    reply(anu.result)
    fs.unlinkSync(media)
} else if ((isMedia && mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    const media = await fxc7.downloadAndSaveMediaMessage(encmedia)
    vid = await uploadFile(media, `${args[0] ? args[0] : Date.now()}.mp4`)
    reply(mess.wait)
    reply(vid.result)
    fs.unlinkSync(media)
} else {
    reply(`Reply Media Dengan Caption ${prefix + command}`)
}
break

//Sesuaikan Dengan Script Kalian
