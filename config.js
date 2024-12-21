

require("./database/module")

//GLOBAL PAYMENT
global.storename = "❦K༙A༙N༙E༙K༙I༙-B༙U༙G༙ V༙5❦"
global.dana = "24160338758"
global.qris = "https://i.ibb.co/Yp6GwWC/37f4e10a8220195e.jpg"


// GLOBAL SETTING
global.owner = "24160338758"
global.namabot = "❦K༙A༙N༙E༙K༙I༙-B༙U༙G༙ V༙5❦༑"
global.nomorbot = "24160338758"
global.nameCreator = "🌹𝗠𝗥 𝗞𝗘́𝗩𝗜𝗡 𝗧𝗦𝗛 𝗚𝗥𝗜𝗠𝗠🌹"
global.linkyt = "https://whatsapp.com/channel/0029VaydjpS7z4kekYAreA2Y"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/Yp6GwWC/37f4e10a8220195e.jpg'
global.isLink = "https://whatsapp.com/channel/0029VaydjpS7z4kekYAreA2Y"
global.packname = "❦K༙A༙N༙E༙K༙I༙-B༙U༙G༙ V༙5❦༑"
global.author = "🌹𝗠𝗥 𝗞𝗘́𝗩𝗜𝗡 𝗧𝗦𝗛🌹"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
