/** @type {import('next').NextConfig} */

export default {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.worker\.js$/,
            use: { loader: 'worker-loader' },
        });
        return config;
    },
};
