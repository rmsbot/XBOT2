exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*info ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

├≽️📌 *Gunakan dengan bijak* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️

        「 *INFO BOT!* 」
   
├≽️⚜ *AUTHOR*: _ItsmeikyXSec404_
├≽️⚜ *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

♻️ *JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!*
♻️ *MAU DONASI? SILAHKAN KETIK #donate*

├───≽️「 *ABOUT* 」
 
 
├───≽️「 *INFORMASI COVID-19 TERBARU!* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
 
├≽️☎️ WA : *${whatsapplu}*


├≽️ *Group WhatsApp* ; ${grupch1}
├≽️ *Telegram* : ${grupch2}
├≽️ *Instagram* : ${grupch3}
 
 
├≽️   MADE BY *${BotName}*
╰`
}
