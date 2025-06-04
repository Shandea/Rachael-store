# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
ShoeStore UI
A modern, responsive React application for showcasing shoes using a clean UI built with Tailwind CSS and Vite.
📖 Table of Contents
Features
Project Structure
Installation
Usage
Development Workflow
Tickets Overview
Tech Stack
Contributing
Design & Resources
Maintainers / Contact
✅ Features
⚡ Fast performance powered by Vite
🎨 Styled with Tailwind CSS
🧭 Routing with React Router
🔒 Clean and reusable UI components (Card, Button, etc.)
📦 Organized folder structure
📱 Mobile responsive layout
📂 Project Structure
client/
├── src/
│ ├── assets/Images/ # Local images for shoes
│ ├── components/ui/ # Reusable UI elements (Button, Card, Heading, Paragraph)
│ ├── pages/ # Page-level components (future use)
│ ├── sections/ # Page sections (Hero, Header, Footer, Features)
│ ├── App.tsx # Main app structure
│ ├── main.tsx # Vite entry point
│ └── index.css # Tailwind and base styles
├── index.html # Entry HTML
├── vite.config.ts # Vite config
└── tsconfig*.json # TypeScript configuration
⚙️ Installation
Clone the repository and install dependencies:
git clone https://github.com/your-username/project-name.git
cd client
npm install
🚀 Usage
To run the development server:
npm run dev
To build the project for production:
npm run build
To preview the production build:
npm run preview
🔁 Development Workflow
Branching Strategy: Use main for production, feature branches for development
Ticket Naming: feature/<feature-name> or fix/<bug-name>
Pull Requests: Small, atomic PRs with meaningful titles and descriptions. Use PR templates if available.
🗂 Tickets Overview
Build Hero and Header sections ✅
Create reusable Card and Button components ✅
Integrate local assets/images ✅
Add routing support 🚧
Add footer with contact/info links ✅
🧰 Tech Stack
Frontend: React 19, TypeScript
Styling: Tailwind CSS
Build Tool: Vite
Icons: Lucide React
Routing: React Router v7
Linting: ESLint with React plugin
🤝 Contributing
Pull requests are welcome! Please:
Fork the repo
Create a feature branch (git checkout -b feature/myFeature)
Commit changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature/myFeature)
Open a pull request
🎨 Design & Resources
UI assets located in src/assets/Images/
Figma or design references: [Insert Figma Link Here]
👩‍💻 Maintainers / Contact