/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
    }
]

if (process.env.NODE_ENV === 'production') {
    securityHeaders.push(
        {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
        }
    )
}

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['cdn.bobobot.cf'],
    },

    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            }
        ]
    }
}
  
module.exports = nextConfig
