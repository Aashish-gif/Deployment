import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'deploying-Aashish-gif/Deployment/blob/master/my_fdeploy/src/App.jsx'
  plugins: [react()],
})
