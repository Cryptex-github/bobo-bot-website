/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['cdn.bobobot.cf'],
    }
}
  
module.exports = nextConfig
