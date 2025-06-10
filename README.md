# HiPaste ✨

HiPaste is a modern, web-based pastebin application built with [Next.js](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/). It allows users to quickly create, view, and share text or code snippets via simple URLs.

## 🚀 Features

- 📝 Create and manage pastes with ease
- 🌈 Syntax highlighting for code
- 🔗 Shareable URLs
- 🎨 Fully responsive UI
- 🧠 Simple, developer-friendly structure

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Package Management:** npm
- **Syntax Highlighting:** [Prism.js](https://prismjs.com/) or similar
- **State Management:** React hooks
- **Deployment Ready:** Easily deployable on [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)

## 📦 Installation

### 1. Clone the repository

git clone https://github.com/Waruhu/hi-paste.git
cd hi-paste

###  2. Install dependencies
npm install

### 3. Run the development server
npm run dev

Open your browser and visit http://localhost:3000 to view the app.

## 📁 Project Structure
hi-paste/
├── .next/               # Build output (ignored in version control)
├── hi-paste/            # Application logic/components (custom directory)
├── node_modules/        # Dependencies
├── public/              # Static assets
├── src/                 # Source directory
│   └── pages/           # Next.js pages
├── tailwind.config.js   # Tailwind CSS configuration
├── next.config.js       # Next.js configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation


## 🔧 Scripts
- npm run dev – Start development server
- npm run build – Build for production
- npm run start – Start production server
- npm run lint – Lint project files (if ESLint is configured)


## 🧪 Testing
No testing framework is configured yet. If needed, consider adding Jest or Playwright.

## 🧑‍💻 Contributing
Contributions are welcome! Feel free to open issues or submit PRs.

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

Made with ❤️ by Johannes Waruhu