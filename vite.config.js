// vite.config.js
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

const a = ['./src/jsx/jsx-dev-runtime']

export default defineConfig({
  plugins: [react({jsxImportSource: './src/jsx'})],
  test: {
    server: {
      deps: {
        external: a
      }
    },

    deps: {
      optimizer: {
        ssr: {
          include: a
        },
        web: {
          include: a
        },
      }
    }
  }
  // test: {
  //   deps: {
      
  //   },
  //   server: {
  //     deps: {
  //       inline: ['./src/jsx/jsx-dev-rumtime.ts']
  //     }
  //   }
  // }
});
