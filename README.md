# 🦇 Bat Pass Generator

**Bat Pass Generator** is a sleek and simple password generator built using **React Native** and **Expo**, inspired by Gotham’s very own Dark Knight. Designed with modular components, it allows users to generate strong passwords and copy them to the clipboard — all wrapped in a custom Batman-themed UI.

## 🚀 Features

* ⚡ Generate random, secure passwords
* 📋 Copy generated passwords to clipboard
* 🦇 Custom Batman-themed logo and interface
* 💡 Responsive, component-based design
* 📦 Built with Expo (cross-platform ready)

## 🧱 Project Structure

```
project-root/
├── App.tsx                             # Entry point
├── assets/
│   └── logo-batman.png                # Custom bat-logo
└── src/
    ├── screens/
    │   └── Home/
    │       ├── Home.tsx              # Main UI screen
    │       └── Style.ts              # Home screen styles
    ├── components/
    │   ├── BatLogo/                  # Logo component
    │   ├── BatButton/                # Generate + Copy buttons
    │   └── BatTextInput/             # Display password
    └── services/
        └── passwordService.ts        # Password generator logic
```

## 🛠️ Tech Stack

* ⚛️ [React Native](https://reactnative.dev/)
* 🚀 [Expo](https://expo.dev/)
* 💅 Custom components (Logo, Buttons, Inputs)
* 📋 [expo-clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/) for copying to clipboard

## 📦 Installation

Make sure you have **Node.js**, **Expo CLI**, and an emulator or physical device ready.

```bash
git clone https://github.com/your-username/bat-pass-generator.git
cd bat-pass-generator
npm install
```

## ▶️ Run the App

```bash
npx expo start
```

Then, scan the QR code with your Expo Go app or open it in your simulator.

## 📄 Usage

1. Tap **"GENERATE"** to create a new secure password.
2. Tap **"⚡ COPY"** to save the password to your clipboard.
3. Paste it wherever Gotham needs protection.

## 🎨 UI Components

* `<BatLogo />` – Displays the app logo and title.
* `<BatTextInput />` – Shows the generated password (read-only).
* `<BatButton />` – Contains both the generate and copy buttons.

## 📱 Screenshots

> ![App Screenshot](https://github.com/gustavoSilvaDev-exe/PROJECT-react-native-expo-app-password-sequencer/blob/main/assets/bat-pass-generator-screenshot.jpg?raw=true)
> `BatLogo`, `BatTextInput`, and `BatButton` styled for justice.

## 🧩 Future Improvements

* Save password history
* Toggle dark/light theme
* Add vibration feedback

## 👤 Author

**Gustavo Silva**
📧 [gugahenriquebatista@gmail.com](mailto:gugahenriquebatista@gmail.com)

---

> *“It’s not just a password. It’s a symbol.”* – Bruce Wayne
