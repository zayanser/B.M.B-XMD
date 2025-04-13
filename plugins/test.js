const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "test",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "😋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://files.catbox.moe/1m225t.jpg`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: '> *© 𝐁.𝐌.𝐁-𝐗𝐌𝐃  ' }, { quoted: mek });
    } catch (e) {
        console.log(e); // ❯❯ Vᴏʀᴛᴇx xᴍᴅ 
        reply(`єяяσя ƒєт¢нιηg nova ιмαgє: ${e.message}`);
    }
});
                      
