const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (phase, { defaultConfig }) => {
    return {
        ...defaultConfig,
        distDir: 'dist',
        generateBuildId: async () => {
            // You can, for example, get the latest git commit hash here
            return process.env.VERSION || 'unique-build-id';
        },
        webpack: (config, { webpack, defaultLoaders }) => {
            // Note: we provide webpack above so you should not `require` it
            // Perform customizations to webpack config
            config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

            config.resolve.plugins.push(new TsconfigPathsPlugin({}));

            config.module.rules.push({
                test: /\.tsx?|\.ts?$/,
                use: [defaultLoaders.babel],
            });

            // Important: return the modified config
            return config;
        },
        // typescript: {
        //     // !! WARN !!
        //     // Dangerously allow production builds to successfully complete even if
        //     // your project has type errors.
        //     // !! WARN !!
        //     ignoreBuildErrors: true,
        //     ignoreDevErrors: true,
        // },

        publicRuntimeConfig: {
            // here public config goes
            BACKEND_URL: (process.env.BACKEND_URL || '').trim(),
            SDK_URL: (process.env.SDK_URL || '').trim(),
            STRIPE_PUBLIC_KEY: (process.env.STRIPE_PUBLIC_KEY || '').trim(),
            BASE_PLAN_ID: (process.env.BASE_PLAN_ID || '').trim(),
            ZENDESK_URL: (process.env.ZENDESK_URL || '').trim(),
            ENVIRONMENT: (process.env.ENVIRONMENT || '').trim(),
        },
    };
};
