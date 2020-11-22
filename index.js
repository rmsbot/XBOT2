const BotName = 'FarhanX_BOT'; // Nama Bot Whatsapp
const instagramlu = 'https://www.instagram.com/_farhan_xcode7'; // Nama Instagramlu cok
const whatsapplu = 'Wa.me/628311800241'; // Nomor whatsapplu cok
const kapanbotaktif = '*terserah gw lahhh*'; // Kapan bot lu aktif
const grupch1 = 'tidak punya grup'; // OFFICIAL GRUP LU 1
const grupch2 = 'https://t.me/FarhanXCode7'; // OFFICIAL GRUP LU 2
const grupch3 = 'https://www.instagram.com/p/CHkAvTFHP4j/?igshid=16euh2hq2h9ck'; // OFFICIAL GRUP LU 3
//
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const menu = require("./lib/menu.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] FarhanXBOTT Ready Scan Now!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @_farhan_xcode7`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @_farhan_xcode7`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   // Groups

if (text.includes("!buatgrup"))
   {
var nama = text.split("!buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

if(text.includes("!cek")){
var num = text.replace(/!cek/ , "08311800241")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@c.us'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}
else if (text == 'assalamualaikum')
{
conn.sendMessage(id, 'waalaikumsalam \n\n Ketik *!menu* untuk menu list bot' ,MessageType.text);
}
else if (text == 'P')
{
conn.sendMessage(id, 'p juga Bro\n\n\n Ketik *!menu* Untuk Menu list Bot' ,MessageType.text);
}
else if (text == 'p')
{
conn.sendMessage(id, 'p juga bro \n\n\n Ketik *!menu* Untuk Menu List Bot' ,MessageType.text);
}
//menu say
if (text.includes("!say")){
  const teks = text.replace(/!say /, "")
conn.sendMessage(id, teks, MessageType.text)
}
//menu ytmp3
if (text.includes("!ytmp3")){
const teks = text.replace(/!ytmp3 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/yta?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[ WAIT ]❗ Sedang mencari music yg diminta⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `✅Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${res.data.title}\n\nUkuran audio: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//menu ytmp4
if (text.includes("!ytmp4")){
const teks = text.replace(/!ytmp4 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[ WAIT ]❗ Sedang mencari video yg diminta⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `✅Video Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${res.data.title}\n\nUkuran video: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//menu twiter
if (text.includes("!twt")){
const teks = text.replace(/!twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=LEUJU9ybLwAHbLwnGShv`).then((res) => {
	conn.sendMessage(id, '[ WAIT ]❗ Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `✅Berhasil$ silahkan klik link di bawah untuk mendownload hasilnya$\nKlik link dibawah🗡️\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//menu tts
if (text.includes("!tts")){
const teks = text.replace(/!tts /, "")
const gtts = (`https://rest.farzain.com/api/tts.php?id=${teks}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
   conn.sendMessage(id, 'Copy all and search on Google', MessageType.text)
 conn.sendMessage(id, gtts ,MessageType.text);
}
//menu tiktok
if (text.includes("!tiktok")) {
const tictoc = text.replace(/!tiktok /, "")
axios.get(`https://st4rz.herokuapp.com/api/tiktok?url=${tictoc}`).then((res) => {
	 conn.sendMessage(id, '[ WAIT ]❗ Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
     let titoe = `✅Berhasil!!! Silahkan klik link dibawah ini untuk mendownload hasilnya$ \nKlik link dibawah🗡️\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}
//menu fb
if (text.includes("!fb")){
const teks = text.replace(/!fb /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${teks}&apiKey=LEUJU9ybLwAHbLwnGShv`).then((res) => {
    let hasil = `Download sendiri melalui link dibawah ya, takut servernya down xixi..\n\nJudul: ${res.data.title}\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//menu ig
if (text.includes("!ig")){
const teks = text.replace(/!ig /, "")
axios.get(`https://st4rz.herokuapp.com/api/ig?url=${teks}`).then((res) => {
    let hasil = `Download sendiri melalui link dibawah ya, takut servernya down xixi..\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//menu wiki
if (text.includes("!wiki")){
const teks = text.replace(/!wiki /, "")
axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[ WAIT ]❗ Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
    let hasil = `📝Menurut Wikipedia:\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//menu sholat
if (text.includes("!sholat")){
  const teks = text.replace(/!sholat /, "")
  axios.get(`https://mhankbarbar.herokuapp.com/api/jadwalshalat?daerah=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then ((res) =>{
  conn.sendMessage(id, '[ WAIT ]❗ Sedang mencari jadwal daerah yg diminta⏳ silahkan tunggu sebentar', MessageType.text)
  let hasil = `Jadwal sholat di *${teks}* hari ini adalah\n\n⚡Imsyak : ${res.data.Imsyak}\n⚡Subuh : ${res.data.Subuh} WIB\n⚡Dzuhur : ${res.data.Dzuhur}WIB\n⚡Ashar : ${res.data.Ashar} WIB\n⚡Maghrib : ${res.data.Maghrib}\n⚡Isya : ${res.data.Isya} WIB\n⚡Tengah malam : ${res.data.Dhuha} WIB`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
//menu quran
else if (text == '!quran'){
axios.get(`https://api.banghasan.com/quran/format/json/acak`).then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text == '!menu'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '!donate'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == '!donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == '!DONATE'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == '!DONASI'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == '!info'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '!foto'){
conn.sendMessage(id, 'command Salah \nYg bener gini !foto cewek/cowok\n\nContoh: !foto cewek' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '!sticker')
      {
      	
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let hasil = `${text} \n\n[ WAIT ]❗ Sedang Membuat Stiker ⏳ Silahkan Tunggu Sebentar Mek`;
         	conn.sendMessage(id, hasil, MessageType.text)
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
		conn.sendMessage(id, '*nohh stikernya udah jadi, gausah terima kasih:v xixixi\n\n\n\n_Powered By FarhanXCode7_*', MessageType.text)
         });
      }
   }

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
               conn.sendMessage(id, 'Pantun Untukmu:v', MessageType.text)
            });
      }

   }
   if (text.includes("!covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id,`🗂️DATA WABAH COVID-19 TERBARU DI INDONESIA\n\n📈Positif ==> ${positif} \n📉Sembuh ==> ${sembuh} \n📋Meninggal ==> ${meninggal}\n🗒️Dirawat ==> ${dirawat}\n\nSemoga Wabah Covid19 Cepet Selesai Aminnnn`, MessageType.text);
}
   if (text.includes("!quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
_${kata}_
        
    
	*~${author}*
         `, MessageType.text
            );
conn.sendMessage(id, '*_Powered By FarhanXCode7_*', MessageType.text);
         });
   }
   else if (text.includes("!nama ")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("!nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Arti dari namamu adalah



          ᚔᚔᚔᚔᚔᚌᚌᚌᚌᚔᚔᚔᚔᚔ

         Nama _*${nama}*_ ${h}
         
          ᚔᚔᚔᚔᚔᚌᚌᚌᚌᚔᚔᚔᚔᚔ

`,
 MessageType.text);
  });
  }
  else if (text.includes("!pasangan ")) {
    const request = require('request');
    var gh = text.split("!pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `

      ᚔᚔᚔᚔᚔᚌᚌᚌᚌᚔᚔᚔᚔᚔ

 *Kecocokan berdasarkan nama*


 ${d}

      ᚔᚔᚔᚔᚔᚌᚌᚌᚌᚔᚔᚔᚔᚔ
    `, MessageType.text);
    conn.sendMessage(id, 'Buset Keknya Gak Cocok Gan:v canda ngab:v\n\n\n_*Powered By FarhanXCode7*_', MessageType.text);
  });
  }
  else if (text.includes("!pasangan Iriene & Farhan")) {
     const request = require('request');
     var gh = text.split("!pasangan ")[1];
     var namamu = gh.split("&")[0];
     var pasangan = gh.split("&")[1];
     request.get({
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1=' + namamu + '&nama2=' + pasangan + '&proses=+Submit%21+',
  
     }, function(error, response, body) {
        let $ = cheerio.load(body);
        var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t, " ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
        console.log("" + d);
        conn.sendMessage(id, `
  
         ᚔᚔᚔᚔᚔᚌᚌᚌᚌᚔᚔᚔᚔᚔ
  
   *Kecocokan berdasarkan nama*
  
  
   ${d}
  
         ᚔᚔᚔᚔᚔᚌᚌᚌᚌᚔᚔᚔᚔᚔ
      `, MessageType.text);
  conn.sendMessage(id, 'Buset Bro Mereka Cocok Banget😎 \n\n\n _*Powered By FarhanXCode7*_', MessageType.text);
     });
  }
  else if (text.includes("!pasangan Farhan & Iriene")) {
     const request = require('request');
     var gh = text.split("!pasangan ")[1];
     var namamu = gh.split("&")[0];
     var pasangan = gh.split("&")[1];
     request.get({
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1=' + namamu + '&nama2=' + pasangan + '&proses=+Submit%21+',
  
     }, function(error, response, body) {
        let $ = cheerio.load(body);
        var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t, " ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
        console.log("" + d);
        conn.sendMessage(id, `
  
         ᚔᚔᚔᚔᚔᚌᚌᚌᚌᚔᚔᚔᚔᚔ
  
   *Kecocokan berdasarkan nama*
  
  
   ${d}
  
         ᚔᚔᚔᚔᚔᚌᚌᚌᚌᚔᚔᚔᚔᚔ
      `, MessageType.text);
      let get = `Buset Bro Mereka Cocok Banget😎\n\n\n_*Powered By FarhanXCode7*_`;
      conn.sendMessage(id, get, MessageType.text)
     });
  }
 
if (text.includes("!wp"))
   {
    var items = ["wallpaper cewek selebgram", "wallpaper cewek desa cantik", "wallpaper cewek cans", "wallpaper cewek bugil", "wallpaper cewek sexy", "wallpaper cewek montok", "wallpaper cewe cantik", "wallpaper hijab sexy", "wallpaper remaja cantik", "wallpaper remaja montok", "wallpaper artis bokep"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + wallpaper;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var wp =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(wp) // Path to the image
        .then(
            (response) => {
    conn.sendMessage(id, '[ WAIT ]❗ Sedang mencari foto wallpaper cewek⏳ silahkan tunggu sebentar', MessageType.text)
  	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       conn.MessageType(id, 'Foto wallpaper terkirim jangan lupa ketik !donasi', MessageType.text)
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
   if (text.includes("!foto cewek"))
   {
    var items = ["cewek selebgram", "cewek cans", "cewek bugil", "cewek sexy", "cewek montok", "cewe cantik", "hijab sexy", "remaja cantik", "remaja montok", "artis bokep"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
    conn.sendMessage(id, '[ WAIT ]❗ Sedang mencari foto janda:v⏳ silahkan tunggu sebentar', MessageType.text)
    conn.sendMessage(id, 'Oke Gan Foto Jandanya Ditemukan:v', MessageType.text)
    conn.sendMessage(id, 'OTW Send Foto Janda:v', MessageType.text)
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       conn.MessageType(id, '*Foto janda terkirim jangan lupa ketik !donasi', MessageType.text)
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
    
   if (text.includes("!foto cowok"))
   {
    var items = ["selebgram cowok", "cowo ganteng", "cogan", "cowok indo ganteng", "artis cowok ganteng", "cogan 2020"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  conn.sendMessage(id, '[ WAIT ]❗ Sedang mencari foto cogan:v⏳ silahkan tunggu sebentar', MessageType.text)
  conn.sendMessage(id, 'Otw Send Foto cogan', MessageType.text)
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
    buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes("!fotoanime"))
   {
    var items = ["anime girl", "foto anime 2020", "anime hentai", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
    conn.sendMessage(id, '[ WAIT ]❗ Sedang mencari foto hentai:v⏳ silahkan tunggu sebentar', MessageType.text)
    conn.sendMessage(id, 'Oke Gan Foto Anime Ditemukan', MessageType.text)
    conn.sendMessage(id, 'OTW Ngirim Gan', MessageType.text)
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
 
 if (text.includes("!nulis"))
   {

      const
      {
         spawn
      } = require("child_process");
      console.log("writing...")
      const teks = text.replace(/!nulis/, "")
      const split = teks.replace(/(\S+\s*){1,10}/g, "$&\n")
      const fixedHeight = split.split("\n").slice(0, 25).join("\\n")
      console.log(split)
      spawn("convert", [
            "./assets/paper.jpg",
            "-font",
            "Indie-Flower",
            "-size",
            "600x960",
            "-pointsize",
            "18",
            "-interline-spacing",
            "3",
            "-annotate",
            "+170+222",
            fixedHeight,
            "./assets/result.jpg"
         ])
         .on("error", () => console.log("error"))
         .on("exit", () =>
         {
            const buffer = fs.readFileSync("assets/result.jpg")
            conn.sendMessage(id, '[ WAIT ]❗ Sedang di proses⏳ silahkan tunggu sebentar', MessageType.text)
            conn.sendMessage(id, buffer, MessageType.image)
            console.log("done")
         })
   }
   
if (text.includes("!lirik")){
	const teks = text.split("!lirik")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
	     conn.sendMessage(id, '[ WAIT ]❗ Sedang mencari lirik yang anda minta⏳ silahkan tunggu sebentar', MessageType.text)
		conn.sendMessage(id, '❗lirik yg kamu minta ketemu❗', MessageType.text)
	 	let hasil = `🎵lirik lagu🎵${teks} \n\n\n ${res.data.result.lirik}`
	conn.sendMessage(id, hasil, MessageType.text)
	conn.sendMessage(id, 'Oke Gan Terimakasih Telah Menggunakan Bot Saya Jangan Lupa Ketik !donasi\n\n\n_*Powered By FarhanXCode7*_', MessageType.text)
	})
}
if (text.includes("!alay")){
	const alay = text.split("!alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `${res.data.text}`
		conn.sendMessage(id, hasil, MessageType.text)
		 conn.sendMessage(id, 'Sfx*\nAlay Lu Jingan:v\n\n\n*_Powered By FarhanXCode7_*', MessageType.text)
	})
}
if (text.includes("!alay anjing")){
	const alay = text.split("!alay anjing")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `iya lu ${res.data.text}👍`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}


})
