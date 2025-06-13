// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173, // default port (you can change it if needed)
//     open: true, // opens the browser automatically
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'), // use @ to reference 'src' folder
//     },
//   },
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//   },
//   // 👇 this tells Vite to fallback to index.html for all routes
//   build: {
//     rollupOptions: {
//       input: '/index.html',
//     },
//   },
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // optional
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
