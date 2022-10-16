const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '6288272480997',
  atasnama : 'IBNU OFFICIAL 🅥⁩'
}

// Other
global.owner = ['62818072548331',"6288272480997"]
global.premium = ['6281807254833']
global.profilebio = ['6281807254833'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.sponsor = 'no sponsors in:('
global.packname = 'IBNU-MD'
global.footer = '© 2022 IBNU OFFICIAL 🅥⁩ '
global.author = 'Owner : IBNU OFFICIAL 🅥⁩ \nIg1 : @IBNU-MD\nIg2 : @IBNU OFFICIAL 🅥⁩ '
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'please wait a moment, processing data...',
		den:'*Sorry You Not Register Yet...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Loading Please Wait..',
		error:'Error :(',
		success:'Success bang!',
		repiar:'This Feature Maintace!',
		botadm:'Jadiin gw admin dulu!',
		admin:'Khusus admin woi!',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://g.top4top.io/p_2443v88g61.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
