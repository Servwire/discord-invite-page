const id_guild = "1067028351052685313";
const credit = "ⵝⵉⵏⵏⴻⵔⴿⵓⵏ &copy; 2023 All Rights Reserved.";
const discription = "Servwire คือผู้ให้เช่า VPS และ Dedicated Server ที่มีคุณภาพ ราคาถูก และมีการบริการที่ดีที่สุดในประเทศไทย ที่เรามีเซิร์ฟเวอร์ที่มีความเร็วสูง";

try {
    axios.get(`https://discord.com/api/guilds/${id_guild}/widget.json`)
        .then(res => {
            let invite = res.data.instant_invite;
            if(invite == null) {
                document.title = "Error";
                const div = document.createElement("div")
                div.className = "center";
                document.body.appendChild(div);

                div.insertAdjacentHTML("beforeend", "<h1>ไม่พบลิงค์เชิญเข้าร่วมเซิร์ฟเวอร์</h1>");
                div.insertAdjacentHTML("beforeend", "<p>เซิร์ฟเวอร์นี้ไม่ได้ตั้งค่าลิงค์เชิญเข้าร่วมเซิร์ฟเวอร์</p>");
                div.insertAdjacentHTML("beforeend", "<p>กรุณาเปิดใช้งานลิงค์เชิญเข้าร่วมเซิร์ฟเวอร์ก่อน</p>");

                const footer = document.createElement("footer");
                footer.innerHTML = credit;
                document.body.appendChild(footer);
                return;
            }

            let regex = /https:\/\/discord.com\/invite\/(.*)/;
            let invite_code = invite.match(regex)[1];
            axios.get(`https://discord.com/api/v9/invites/${invite_code}?with_counts=true&with_expiration=true`)
                .then(res => {
                    document.title = res.data.guild.name;
                    const head = document.querySelector("head");
                    head.insertAdjacentHTML("beforeend", `<link rel="icon" href="https://cdn.discordapp.com/icons/${res.data.guild.id}/${res.data.guild.icon}.png?size=64">`);
                    const div = document.createElement("div")
                    div.className = "center";
                    document.body.appendChild(div);

                    div.insertAdjacentHTML("beforeend", `<div class="card">
<div class="card-body">
<img src="https://cdn.discordapp.com/icons/${res.data.guild.id}/${res.data.guild.icon}.png" alt="icon" class="icon">
<h1 class="mb-3">${res.data.guild.name}</h1>
<h3>ผู้ใช้งาน ${res.data.approximate_member_count} คน</h3>
<h3 class="mb-3">ออนไลน์ทั้งหมด ${res.data.approximate_presence_count} คน</h3>

<p>${discription}</p>
</div>

<div class="card-footer">
    <a href="${invite}" target="_blank" rel="noopener noreferrer">เข้าร่วมเซิร์ฟเวอร์</a>
</div>

</div>`);

                    const footer = document.createElement("footer");
                    footer.innerHTML = "ⵝⵉⵏⵏⴻⵔⴿⵓⵏ &copy; 2023 All Rights Reserved.";
                    document.body.appendChild(footer);
                })
        })
        .catch(err => {
            if (err.response.status === 403) {
                document.title = "403 Forbidden";
                const div = document.createElement("div")
                div.className = "center";
                document.body.appendChild(div);

                div.insertAdjacentHTML("beforeend", "<h1>403 Forbidden</h1>");
                div.insertAdjacentHTML("beforeend", "<p>Access to this resource on the server is denied!</p>");

                const footer = document.createElement("footer");
                footer.innerHTML = "ⵝⵉⵏⵏⴻⵔⴿⵓⵏ &copy; 2023 All Rights Reserved.";
                document.body.appendChild(footer);
            }
        });
} catch (error) {
    document.title = "Error";
    const div = document.createElement("div")
    div.className = "center";
    document.body.appendChild(div);

    div.insertAdjacentHTML("beforeend", "<h1>Error</h1>");
    div.insertAdjacentHTML("beforeend", "<p>Something went wrong!</p>");

    const footer = document.createElement("footer");
    footer.innerHTML = "ⵝⵉⵏⵏⴻⵔⴿⵓⵏ &copy; 2023 All Rights Reserved.";
    document.body.appendChild(footer);
}