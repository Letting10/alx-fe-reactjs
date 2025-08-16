
### 1. Create a New React Project
\`\`\`bash
npm create vite@latest tailwind-react-integration -- --template react
cd tailwind-react-integration
\`\`\`

### 2. Install Tailwind CSS and Dependencies
\`\`\`bash
npm install tailwindcss @tailwindcss/vite
\`\`\`

### 3. Configure Vite
Update \`vite.config.js\` to include the Tailwind plugin:

\`\`\`js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
\`\`\`

### 4. Add Tailwind to CSS
Replace the contents of \`src/index.css\` with:

\`\`\`css
@import \"tailwindcss\";
\`\`\`

### 5. Run the App
\`\`\`bash
npm run dev
\`\`\`

---

## ✅ Verification
To test if Tailwind is working, edit \`src/App.jsx\`:

\`\`\`jsx
function App() {
  return (
    <h1 className=\"text-3xl font-bold text-blue-600\">
      Hello Tailwind + React!
    </h1>
  )
}

export default App
\`\`\`

If you see **big bold blue text**, Tailwind CSS is successfully integrated 🎉.

---

## 📂 Repository Info
- GitHub Repository: \`alx-fe-reactjs\`
- Project Directory: \`tailwind-react-integration\`
" > README.md
