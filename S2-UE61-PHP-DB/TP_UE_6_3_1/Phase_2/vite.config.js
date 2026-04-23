import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // INDISPENSABLE : indique à Vite que l'app est dans un sous-dossier
  // Cela permet de générer les bons chemins pour le JS et le CSS dans l'index.html
  base: '/S2-UE61-PHP-DB/TP_UE_6_3_1/Phase_2/',
})
