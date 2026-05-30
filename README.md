<h1 align="center">⚡ UltraX Bot</h1>

<p align="center">
  <em>Lightweight • Multi-Session • WhatsApp Bot</em>
</p>

<p align="center">
  <a href="https://github.com/Dark-Xploit/CypherX-Ultra/fork">
    <img src="https://img.shields.io/badge/Fork%20Repo-darkblue?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://github.com/Dark-Xploit">
    <img src="https://img.shields.io/badge/UltraX-darkgreen?style=for-the-badge&logo=whatsapp&logoColor=white"/>
  </a>
  <a href="https://github.com/Dark-Xploit/CypherX-Ultra/stargazers">
    <img src="https://img.shields.io/github/stars/Dark-Xploit/CypherX-Ultra?style=for-the-badge&color=yellow"/>
  </a>
</p>

---

## 📺 Panel(Katabump) Deployment Tutorial

> **Watch this before asking questions, everything is covered step by step.**

<p align="center">
  <a href="https://youtu.be/5GRexCxQDIs?si=jNIk5vFk42gMpi0i" target="_blank">
    <img src="https://img.youtube.com/vi/5GRexCxQDIs/maxresdefault.jpg" alt="UltraX Deployment Tutorial" width="700"/>
  </a>
</p>
<p align="center"><a href="https://youtu.be/5GRexCxQDIs?si=jNIk5vFk42gMpi0i">▶️ Click to watch on YouTube</a></p>

---

##  Deploy to Heroku

### Step 1: Fork the Repository

<p align="center">
  <a href="https://github.com/Dark-Xploit/CypherX-Ultra/fork">
    <img src="https://img.shields.io/badge/1.%20Fork%20Repo-100000?style=for-the-badge&logo=github&logoColor=white&labelColor=darkblue&color=darkblue"/>
  </a>
</p>

> ⚠️ You **must** fork this repository. The bot verifies your GitHub username against the fork on startup.

---

### Step 2: Get a Session ID

<p align="center">
  <a href="https://uxpair-08eaa0cdf162.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/Server_1-100000?style=for-the-badge&logo=scan&logoColor=white&labelColor=darkred&color=darkred"/>
  </a>
  <a href="https://paircx1-5aececee9665.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/Server_2-100000?style=for-the-badge&logo=scan&logoColor=white&labelColor=darkred&color=darkred"/>
  </a>
  <a href="https://paircx2-156d078e4c76.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/Server_3-100000?style=for-the-badge&logo=scan&logoColor=white&labelColor=darkred&color=darkred"/>
  </a>
  <a href="https://paircx3-3389649423ac.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/Server_4-100000?style=for-the-badge&logo=scan&logoColor=white&labelColor=darkred&color=darkred"/>
  </a>
  <a href="https://paircx4-32adc0478cd2.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/Server_5-100000?style=for-the-badge&logo=scan&logoColor=white&labelColor=darkred&color=darkred"/>
  </a>
  <a href="https://paircx2-156d078e4c76.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/Server_Ofline-100000?style=for-the-badge&logo=scan&logoColor=white&labelColor=darkred&color=darkred"/>
  </a>
</p>

---

### Step 3: Deploy

Click the button below and fill in the config vars when prompted, make sure you have a functional heroku account:

<p align="center">
  <a href="https://heroku.com/deploy?template=https://github.com/kwesigh1/CypherX-Ultra">
    <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku" width="200"/>
  </a>
</p>

---

##  Configuration (Environment Variables)

| Variable | Description | Required |
|---|---|---|
| `MASTER_PASSWORD` | Web dashboard password, needed to pair sessions and access settings | ✅ Yes |
| `GITHUB_USERNAME` | Your GitHub username (must have forked this repo) | ✅ Yes |
| `DATABASE_URL` | PostgreSQL connection string, auto-set by Heroku Postgres add-on | ✅ Yes |
| `PORT` | Web server port, auto-set by Heroku, don't change unless running on panel | ❌ No |

> 💡 On Heroku, set these under **Settings → Config Vars**.  
> For local development, edit `.env` or use `settings.js` and fill in the values.

---

##  Local Setup

```bash
# 1. Clone your fork
git clone https://github.com/<YOUR_USERNAME>/Deviemkuu

# 2. Install dependencies
npm install

# 3. Configure environment
nano settings.js
# Edit settings.js with your values

# 4. Start the bot
npm start
```

Then open `http://localhost:3000` in your browser to access the web dashboard.

---

## ✨ Features

- 🔁 **Multi-session**: run multiple WhatsApp accounts simultaneously
- 🔄 **Auto-update**: pulls latest changes from GitHub automatically
- 🌐 **Web dashboard**: pair sessions, manage settings and play games via browser
- 🧩 **Plugin system**: easily extend with custom commands
- 🛡️ **Anti-delete / Anti-edit**: catch deleted and edited messages
- 📊 **Lightweight**: optimised for low-memory environments

---

##  License

This project is licensed for personal use. You may not redistribute or sell modified versions.  
© [Dark-Xploit](https://github.com/Dark-Xploit) - All rights reserved.
