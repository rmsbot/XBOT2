exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*

Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini✨

📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*

https://www.instagram.com/p/CHkAvTFHP4j/?igshid=1kt9rzm3i3u6

♻ Command / Perintah :

         
            「 *Menu Makanan:v* 」

├≽ ️!sticker
» Contoh: **kirim gambar dengan caption !sticker*

├≽️ !pantun
» Contoh: *!pantun*

├≽️ !quotes
» Contoh: *!quotes*

├≽️ !foto cewek/cowok
» Contoh: *!foto cowok/cewek*

├≽️ !say
» Contoh: *!say anjing:v*


├≽️ !tts
» Contoh: *!tts anjing+banget*

├≽️ !quran
» Contoh: *!quran*

├≽️ !twt
» Contoh: *!twt https://tweter.com/linktwitter*

├≽️ !fb
» Contoh: *!fb https://facebook.com/FarhanXCo*

├≽️ !ig
» Contoh: *!ig https://instagram.com/_farhan_xcode7*

├≽️ !ytmp3
» Contoh: *!ytmp3 https://youtu.be/linkyt*

├≽️ !ytmp4
» Contoh: *!ytmp4 https://youtu.be/linkyt*

├≽️ !wiki
» Contoh: *!wiki Babi*

├≽️ !lirik
» Contoh: *!lirik Monolog*

├≽️ !nulis
» Contoh: *!nulis Farhan Gans*

├≽️ !sholat (nama daerahmu)
» Contoh: *!sholat Banyuwangi*

├≽️ !fotoanime
» Contoh: *!fotoanime*

├≽️ !covid
» Contoh: *!covid*

├≽️ !alay
» Contoh: *!alay buset broo*

├≽️ !nama
» Contoh: *!nama Farhan*

├≽️ !pasangan
» Contoh: *!pasangan Iriene & Farhan* ( *Huruf Pertama Kapital* )

 *Others*
 
├≽️ !loli
» Contoh: !loli

├≽️ !hentai
» Contoh: !hentai

├≽️ !pokemon
» Contoh: !pokemon

├≽️ !katabijak
» Contoh: !katabijak

├≽️ !sifat
» Contoh: !sifat Farhan

               「 Silahkan *${id.split("@s.whatsapp.net")[0]}* Di Pilih 」


├≽️💰 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
├≽️💰 MAU DONASI? SILAHKAN KETIK !donate
 
├───≽️「 *ABOUT* 」
 
 
├───≽️「 *INFORMASI COVID-19 TERBARU* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER$_
 
├≽️☎️ WA : **${whatsapplu}*
 
├≽️📌 *Powered By FarhanXCode7* ‼️
├≽️📌 *Jangan Lupa Donasi Gan:)* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️


├≽️ *Group WhatsApp* ; ${grupch1}
├≽️ *Telegram* : ${grupch2}
├≽️ *Instagram* : https://www.instagram.com/itsmeikyxsec404
 
 
├≽️   _*MADE BY ${BotName}*_

`}
