let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Rimuru 😅👆
*✉️ Nama RL* : Rayhan
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 22 agus 2008
*🎨 Umur* : 15
*🧮 Kelas* : 8
*🧩 Hobby* : Nonton Hanime, Chatting, Recode script bot
*💬 Sifat* : Ramah😱
*🗺️ Tinggal* : Indo, Bandung
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : ada🗿
*🇫  Facebook* : ada 🐦
*🏮 Chanel Youtube* : ga ada 
*🐈 Github:* RyhnXD

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
