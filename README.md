# 🛡️ SurakshaCheck – Banking APK Detection  

## 📌 Overview  
**SurakshaCheck** is a security solution designed to detect **fake and malicious banking APKs** that imitate real banking apps. With rising digital fraud, attackers often trick users into revealing sensitive information like **OTPs, passwords, and personal data**.  

Our system provides **multi-layered detection, fraud prevention, and actionable insights** for both **end-users** and **banks** to safeguard the digital financial ecosystem.  

---

## 🚀 Key Features  

### 🔍 Ephemeral Overlay Tracing  
- Detects **short-lived fake overlays** (milliseconds) often used to **steal OTPs**.  

### 🖥️ UI Flow Mismatch Detection  
- Compares **legit banking app UI flows** with suspicious apps to flag **anomalies**.  

### 🔋 Battery & Permission Abuse Detection  
- Identifies **hidden background services**.  
- Flags unusual **permission requests** and **abnormal power drain**.  

### 📊 Actionable Dashboard for Banks  
- Bulk-scan **thousands of APKs** outside the Play Store.  
- Auto-flag **clones** and generate **fraud evidence reports**.  

### 🛡️ Dual-Sided Protection  
- **For Users** → One-click scan, install-time blocking, lightweight mobile app.  
- **For Banks** → Brand protection, APK clone scanning, fraud detection dashboard.  

### 🌍 Ecosystem-Level Fraud Prevention  
- Goes **beyond single-user protection**.  
- Helps banks reduce fraud **across the entire ecosystem**.  

---

## 🏗 Tech Stack  

- **Frontend**: React + TailwindCSS  
- **Backend**: FastAPI / Node.js  
- **APK Analysis Tools**: Apktool, JADX, Androguard  
- **Dynamic Testing**: Frida, ADB, Android Emulator  
- **Database**: PostgreSQL / MongoDB  
- **Cloud**: AWS / GCP for large-scale APK scanning  

---

## ⚙️ Installation & Usage  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Van1841/SurakshaCheck_final.git
   cd fake-banking-apk-detection
