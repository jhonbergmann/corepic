<h1 align="center">
  <img src="docs/assets/logo.png" width="150" alt="logo" >
</h1>

<p align="center">
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/jhonbergmann/corepic" />
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/jhonbergmann/corepic" />
</p>

<p align="center">Find and buy the best photos in the world in a simple and secure way.</p>

<p align="center">
  <img src="docs/assets/illustration1.jpg" width="45%"  alt="illustration" >
  <img src="docs/assets/illustration2.jpg" width="45%"  alt="illustration" >
  <img src="docs/assets/illustration3.jpg" width="45%"  alt="illustration" >
  <img src="docs/assets/illustration4.jpg" width="45%"  alt="illustration" >
</p>

<p align="center">See a preview.</p>

<p align="center">
  <img src="docs/assets/preview1.gif" width="45%"  alt="illustration" >
  <img src="docs/assets/preview2.gif" width="45%"  alt="illustration" >
</p>

## 📦 Tech Stack

- Expo
- Typescript
- React Navigation
- React Query
- React Hook Form
- Zod
- Firebase
- Lucide React Native
- Styled Components
- Styled System

[check others in package.json](package.json)

## ✨ Key Features

##### 🔐 Authentication
- **SignIn/SignUp** with Firebase Auth
- User session management

##### 🌄 Unsplash Integration
- Advanced image search
- High-resolution preview

##### 🔍 Search System
- Keyword search
- Predefined category browsing
- Popular theme filters

##### 🎨 UI/UX
- Responsive interface
- Dark/Light mode
- Toast notifications
- Loaders and empty states

## 🔐 Example .env File

```bash
# Client
CLIENT=

# App (dev | pro)
BASE=

# Unsplash | unsplash.com/developers
UNSPLASH_APIURL=
UNSPLASH_APIKEY=

# Firebase | console.firebase.google.com
FIREBASE_APIKEY=
FIREBASE_AUTHDOMAIN=
FIREBASE_PROJECTID=
FIREBASE_STORAGEBUCKET=
FIREBASE_MESSAGINGSENDERID=
FIREBASE_APPID=
FIREBASE_MEASUREMENTID=
```

.env is not being ignored in .gitignore for testing with test credentials.

Credentials will be disabled soon.

## 📂 Project Structure

Here is the project directory structure:

```bash
src  
├── assets  
│   ├── google.png  
│   ├── hero.png  
│   ├── logo.png  
│   └── simple-logo.png  
│  
├── components  
│   ├── index.ts  
│   ├── common  
│   │   ├── index.ts  
│   │   ├── conditional  
│   │   │   ├── data.ts  
│   │   │   └── index.tsx  
│   │   └── spinner  
│   │       └── index.tsx  
│   └── ui  
│       ├── index.ts  
│       ├── button  
│       │   ├── data.ts  
│       │   ├── index.tsx  
│       │   └── layout  
│       │       ├── index.tsx  
│       │       └── styles.ts  
│       ├── header  
│       │   ├── data.ts  
│       │   ├── index.tsx  
│       │   └── layout  
│       │       └── index.tsx  
│       ├── input  
│       │   ├── data.ts  
│       │   ├── index.tsx  
│       │   └── layout  
│       │       ├── index.tsx  
│       │       └── styles.ts  
│       ├── text  
│       │   ├── data.ts  
│       │   ├── index.tsx  
│       │   └── layout  
│       │       ├── index.tsx  
│       │       └── styles.ts  
│       ├── toast  
│       │   ├── data.ts  
│       │   ├── index.tsx  
│       │   └── layout  
│       │       └── styles.ts  
│       └── wrapped  
│           ├── data.ts  
│           ├── index.tsx  
│           └── layout  
│               ├── index.tsx  
│               └── styles.ts  
│  
├── configs  
│   └── firebase  
│       └── index.ts  
│  
├── contexts  
│   ├── auth.tsx  
│   ├── cart.tsx  
│   ├── theme.tsx  
│   ├── toast.tsx  
│   └── interfaces  
│       ├── auth.ts  
│       ├── cart.tsx  
│       ├── theme.ts  
│       └── toast.ts  
│  
├── hooks  
│   ├── index.ts  
│   └── use-firebase-error.ts  
│  
├── providers  
│   └── app-providers.tsx  
│  
├── routes  
│   ├── app.routes.tsx  
│   ├── app.tabs.routes.tsx  
│   ├── auth.routes.tsx  
│   └── index.tsx  
│  
├── screens  
│   ├── app  
│   │   ├── picture-detail  
│   │   │   ├── data.ts  
│   │   │   ├── index.tsx  
│   │   │   └── layout  
│   │   │       └── index.tsx  
│   │   └── tabs  
│   │       ├── cart  
│   │       │   ├── data.ts  
│   │       │   ├── index.tsx  
│   │       │   └── layout  
│   │       │       ├── empty.tsx  
│   │       │       └── index.tsx  
│   │       ├── home  
│   │       │   ├── data.ts  
│   │       │   ├── index.tsx  
│   │       │   └── layout  
│   │       │       ├── category-list.tsx  
│   │       │       └── index.tsx  
│   │       ├── my-pictures  
│   │       │   ├── data.ts  
│   │       │   ├── index.tsx  
│   │       │   └── layout  
│   │       │       ├── empty.tsx  
│   │       │       └── index.tsx  
│   │       ├── profile  
│   │       │   ├── data.ts  
│   │       │   ├── index.tsx  
│   │       │   └── layout  
│   │       │       └── index.tsx  
│   │       └── search  
│   │           ├── data.ts  
│   │           ├── index.tsx  
│   │           └── layout  
│   │               ├── empty.tsx  
│   │               └── index.tsx  
│   └── auth  
│       ├── sign-in  
│       │   ├── data.ts  
│       │   ├── index.tsx  
│       │   ├── schema.ts  
│       │   └── layout  
│       │       └── index.tsx  
│       ├── sign-up  
│       │   ├── data.ts  
│       │   ├── index.tsx  
│       │   ├── schema.ts  
│       │   └── layout  
│       │       └── index.tsx  
│       └── welcome  
│           ├── data.ts  
│           ├── index.tsx  
│           └── layout  
│               └── index.tsx  
│  
├── services  
│   └── api  
│       ├── images.ts  
│       ├── sign-in.ts  
│       ├── sign-up.ts  
│       └── interfaces  
│           ├── images.ts  
│           ├── sign-in.ts  
│           └── sign-up.ts  
│  
├── themes  
│   ├── index.tsx  
│   └── tokens.tsx  
│  
└── types  
    ├── png.d.ts  
    └── styled.d.ts  
```

## 🎨 Design Tokens

This project uses the following design tokens for consistent styling across the application.

### 🌈 Colors

##### Light Theme
- **transparent**: transparent  
- **background**: ![#F8F9FA](https://placehold.co/15/F8F9FA/F8F9FA.png) `#F8F9FA`
- **text**: ![#2D3748](https://placehold.co/15/2D3748/2D3748.png) `#2D3748`
- **primary**: ![#3182CE](https://placehold.co/15/3182CE/3182CE.png) `#3182CE`
- **secondary**: ![#ED64A6](https://placehold.co/15/ED64A6/ED64A6.png) `#ED64A6`
- **border**: ![#d6dce4](https://placehold.co/15/d6dce4/d6dce4.png) `#d6dce4`
- **success**: ![#48BB78](https://placehold.co/15/48BB78/48BB78.png) `#48BB78`
- **error**: ![#F56565](https://placehold.co/15/F56565/F56565.png) `#F56565`
- **warning**: ![#ECC94B](https://placehold.co/15/ECC94B/ECC94B.png) `#ECC94B`
- **info**: ![#4299E1](https://placehold.co/15/4299E1/4299E1.png) `#4299E1`
- **buttonText**: ![#FFFFFF](https://placehold.co/15/FFFFFF/FFFFFF.png) `#FFFFFF`
- **placeholder**: ![#A0AEC0](https://placehold.co/15/A0AEC0/A0AEC0.png) `#A0AEC0`

##### Dark Theme
- **transparent**: transparent  
- **background**: ![#1A202C](https://placehold.co/15/1A202C/1A202C.png) `#1A202C`
- **text**: ![#E2E8F0](https://placehold.co/15/E2E8F0/E2E8F0.png) `#E2E8F0`
- **primary**: ![#63B3ED](https://placehold.co/15/63B3ED/63B3ED.png) `#63B3ED`
- **secondary**: ![#F687B3](https://placehold.co/15/F687B3/F687B3.png) `#F687B3`
- **border**: ![#4A5568](https://placehold.co/15/4A5568/4A5568.png) `#4A5568`
- **success**: ![#68D391](https://placehold.co/15/68D391/68D391.png) `#68D391`
- **error**: ![#FC8181](https://placehold.co/15/FC8181/FC8181.png) `#FC8181`
- **warning**: ![#F6E05E](https://placehold.co/15/F6E05E/F6E05E.png) `#F6E05E`
- **info**: ![#46a5f3](https://placehold.co/15/46a5f3/46a5f3.png) `#46a5f3`
- **buttonText**: ![#1A202C](https://placehold.co/15/1A202C/1A202C.png) `#1A202C`
- **placeholder**: ![#A0AEC0](https://placehold.co/15/A0AEC0/A0AEC0.png) `#A0AEC0`

##### 📝 Fonts
- **primary**: Inter_400Regular
- **primaryBold**: Inter_700Bold
- **secondary**: Arial

##### 🔢 Font Sizes
- **xsmall**: 12px
- **small**: 14px
- **medium**: 16px
- **large**: 18px
- **xlarge**: 24px
- **xxlarge**: 32px

##### 📏 Spacing
- **xsmall**: 4px
- **small**: 8px
- **medium**: 16px
- **large**: 24px
- **xlarge**: 32px

##### 🔲 Border Radius
- **small**: 4px
- **medium**: 8px
- **large**: 12px

##### 💨 Box Shadow
- **small**: 0 2px 4px rgba(0, 0, 0, 0.1)
- **medium**: 0 4px 8px rgba(0, 0, 0, 0.1)
- **large**: 0 8px 16px rgba(0, 0, 0, 0.2)

## 🔩 Installation

To install and run the project locally, follow these steps:

1. Install [**Yarn**](https://yarnpkg.com/) on your computer
1. Clone the repository: `git clone https://github.com/jhonbergmann/corepic.git`
1. Navigate to the project directory: `cd corepic`
1. Install the dependencies: `yarn`

## ⚙️ Usage

1. Start the development server: `npx expo start`
1. Read the QR Code with the Expo Go app
