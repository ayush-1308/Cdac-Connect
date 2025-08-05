import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    global: 'globalThis',
    'process.env': {}, // Required by some polyfilled packages
  },
  resolve: {
    alias: {
      // Add buffer alias explicitly
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6.js',
      process: 'rollup-plugin-node-polyfills/polyfills/process-es6.js',
      util: 'rollup-plugin-node-polyfills/polyfills/util.js',
    },
  },
  optimizeDeps: {
    include: ['buffer', 'process', 'util', 'sockjs-client'],
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
});



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//     tailwindcss()
//   ],
//    define: {
//     global: 'globalThis'
//   },
//   resolve: {
//    alias: {
//       util: 'rollup-plugin-node-polyfills/polyfills/util',
//       process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
//     }
//   },
//   optimizeDeps: {
//     include: ['sockjs-client'],
//   },
//   build: {
//     rollupOptions: {
//       plugins: [rollupNodePolyFill()]
//     }
//   }
// })