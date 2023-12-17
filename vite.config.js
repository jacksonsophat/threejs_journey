import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
// })

//https://stackoverflow.com/questions/68654761/how-to-add-a-public-directory-in-vitejs-configuration-file
export default{
    plugins: [react()],
    // root: 'src/',
    root: './',
    base: './',
    publicDir: 'public'
}