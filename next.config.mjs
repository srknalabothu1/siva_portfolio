/** @type {import('next').NextConfig} */

export default {
    env: {
        NEXT_PUBLIC_API_URL: 'https://siva-portfolio-pearl.vercel.app',
      },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.worker\.js$/,
            use: { loader: 'worker-loader' },
        });
        return config;
    },
};
