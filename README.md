

SurakshaCheck Banking APK Detection

📌 Overview

This project focuses on detecting fake and malicious banking APKs that imitate real banking applications. Fake banking apps are a rising threat to digital security, often tricking users into revealing sensitive information like OTPs, passwords, and personal data.

Our system provides multi-layered detection, fraud prevention, and actionable insights for both end-users and banks to safeguard the digital financial ecosystem.


---

🚀 Key Features

🔍 Ephemeral Overlay Tracing

Detects short-lived fake overlays that appear for milliseconds (commonly used to steal OTPs).


🖥 UI Flow Mismatch Detection

Compares real banking app UI flows with suspicious apps to identify anomalies.


🔋 Battery & Permission Abuse Detection

Flags hidden background services and unusual permission usage by analyzing abnormal power drain.


📊 Actionable Dashboard for Banks

Bulk-scan thousands of APKs outside the Play Store.

Auto-flag clones and generate fraud evidence reports.


🛡 Dual-Sided Protection

For Users: One-click scan, install-time blocking, lightweight mobile protection app.

For Banks: Brand protection, APK clone scanning, and fraud detection dashboard.


🌍 Ecosystem-Level Fraud Prevention

Goes beyond single-user protection.

Helps banks reduce fraud across the entire ecosystem.



---

🏗 Tech Stack

Frontend: React + TailwindCSS

Backend: FastAPI / Node.js

Analysis Tools: Apktool, JADX, Androguard

Dynamic Testing: Frida, ADB, Android Emulator

Database: PostgreSQL / MongoDB

Cloud: AWS / GCP for large-scale APK scanning

---


⚙ Installation & Usage

1. Clone the repository



git clone https://github.com/Van1841/SurakshaCheck_final.git
cd fake-banking-apk-detection



2. Run 



npm install
npm run dev

4. APK Analysis Exampl

use our sample apks to check the risk.



---

📈 Future Enhancements

Integration with Play Store APIs for real-time app verification.

Machine Learning models for adaptive fraud detection.

Cross-platform mobile app for users.



---

Team Encryption