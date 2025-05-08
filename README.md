# 🛡️ CryptoKin

> Secure your crypto legacy with Web3 identity, trusted contacts, and decentralized check-ins.

**CryptoKin** is a Web3-powered fallback system that ensures your loved ones can access your crypto assets if you're inactive or incapacitated. Leveraging **Self Protocol** for identity verification, **IPFS** for decentralized storage, and a custom check-in mechanism, CryptoKin keeps your digital wealth safe — and recoverable.

---

## 🚀 Features

- ✅ **Web3 Identity Verification** via [Self Protocol](https://self.xyz)
- 🔐 **Encrypted Vault** for wallet credentials (stored on IPFS)
- 👨‍👩‍👧‍👦 **Trusted Kin** setup (emails & phone numbers)
- 📆 **Check-In System** to monitor user activity
- 🚨 **Automated Alerts** to kins after 60 days of inactivity
- 📡 Optional future support for **EPNS/Web3 Push Notifications**

---

## 📸 Demo (Coming Soon)

A video walkthrough or screenshots will be added here.

---

## 📦 Tech Stack

| Layer          | Technology                                       |
|----------------|--------------------------------------------------|
| Frontend       | React.js, TailwindCSS, WalletConnect/Web3Modal   |
| Identity       | Self Protocol                                     |
| Storage        | IPFS (via web3.storage or Pinata)                |
| Encryption     | CryptoJS / Lit Protocol                          |
| Backend        | Node.js, Express                                 |
| Database       | MongoDB / PostgreSQL                             |
| Notifications  | SendGrid (email), Twilio (SMS)                   |
| Scheduling     | Cron jobs / Node Scheduler                       |

---

## 🧠 How It Works

### 1. Connect Wallet & Verify Identity
User connects their wallet and completes identity verification via **Self Protocol**.

### 2. Store Wallet Details
User inputs their wallet recovery information (seed phrases, passwords). Data is:
- Encrypted client-side
- Stored on **IPFS**

### 3. Add Trusted Kins
User provides the **name, email, and phone** of 3+ trusted individuals.

### 4. Regular Check-Ins
User is required to log into the app at least **3 times per month**.
- Email reminders are sent to prompt check-ins.

### 5. Inactivity Alert
If user is inactive for **60+ days**, kins are alerted via:
- Email (SendGrid)
- SMS (Twilio)

---

## 🛠️ Installation (for Devs)

Clone the repo:

```bash
git clone https://github.com/yourusername/cryptokin.git
cd cryptokin
````

### Setup Backend

```bash
cd server
npm install
npm run dev
```

### Setup Frontend

```bash
cd client
npm install
npm run dev
```

Set up environment variables in `.env` files:

```env
# Example
PORT=5000
MONGO_URI=your_mongo_connection
IPFS_API_KEY=your_ipfs_key
SENDGRID_API_KEY=your_sendgrid_key
TWILIO_SID=...
TWILIO_TOKEN=...
```

---

## 🧩 Folder Structure

```bash
cryptokin/
├── client/             # React frontend
│   └── components/
│   └── pages/
├── server/             # Node.js backend
│   └── routes/
│   └── controllers/
├── scripts/            # Cron jobs for check-in alerts
├── README.md
```

---

## 🗺️ Roadmap

* [x] Web3 wallet connection
* [x] Self Protocol integration
* [x] Vault encryption + IPFS storage
* [x] Kin notification logic
* [ ] UI polish and accessibility
* [ ] EPNS integration
* [ ] Mobile-friendly version
* [ ] DAO governance for recovery logic

---

## 🤝 Contributing

Got suggestions or want to build with us?

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m 'feat: add new feature'`
4. Push and create a PR

---

## 📄 License

MIT © 2025 CryptoKin Team

---

## 🧬 Credits

* [Self Protocol](https://self.xyz) for decentralized identity
* [IPFS](https://ipfs.tech) for secure, decentralized file storage
* [SendGrid](https://sendgrid.com), [Twilio](https://twilio.com) for communication APIs

---

## 🔐 Crypto Wasn’t Meant to Die With You

With CryptoKin, your legacy lives on — without compromising privacy, security, or decentralization.
