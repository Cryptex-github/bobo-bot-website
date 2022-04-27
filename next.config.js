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
    }
]

if (process.env.NODE_ENV === 'production') {
    securityHeaders.push(
        {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
            key: 'Content-Security-Policy',
            value: `default-src https: 'unsafe-inline'`
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
