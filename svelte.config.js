import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        vitePreprocess(),
        preprocess({
            scss: {
                prependData: `
                    @use 'src/app/styles/_colors.scss' as color;
                    @use 'src/app/styles/_vars.scss' as var;
                `
            }
        })
    ],

    kit: {
        adapter: adapter(),
        files: {
            appTemplate: path.resolve('template', 'index.html'),
            errorTemplate: path.resolve('template', 'error.html'),
            assets: path.resolve('static'),
            hooks: {
                client: path.resolve('src', 'app', 'hooks', 'client.ts'),
                server: path.resolve('src', 'app', 'hooks', 'server.ts'),
                universal: path.resolve('src', 'app', 'hooks', 'universal.ts'),
            },
            lib: path.resolve('lib'),
            params: path.resolve('template', 'params'),
            routes: path.resolve('template', 'routes'),
            serviceWorker: path.resolve('src', 'app', 'worker.ts'),
        },
        alias: {
            styles: path.resolve('src', 'app', 'styles'),
            components: path.resolve('src', 'components')
        }
    },
};

export default config;
