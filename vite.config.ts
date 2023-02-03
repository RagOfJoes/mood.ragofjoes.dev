import { resolve } from 'path';

import solid from 'solid-start/vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [solid()],

  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
});
