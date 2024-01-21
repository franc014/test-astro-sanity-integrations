import { defineConfig } from 'astro/config';
import { sanityIntegration } from '@narration-sd/sanity-astro';

// https://astro.build/config
export default defineConfig({
    integrations: [
       
        sanityIntegration({
        projectId: "3dp27zit",
        dataset: "production",
        // Set useCdn to false if you're building statically.
        useCdn: false,
        }),

    ]
});
