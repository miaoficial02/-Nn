let handler = async (m, { conn }) => {

let img = 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1744693081715.jpeg'
 
let texto = `» 𝙍𝙀𝙂𝙇𝘼𝙎 𝙇𝙄𝘿𝙀𝙍𝙀𝙎 𝘽𝘼𝙎𝙄𝘾𝘼𝙎 *2*`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
}

handler.command = ['reglaslideres2'] 
handler.register = true
handler.admin = true

export default handler