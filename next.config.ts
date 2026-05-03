import type { NextConfig } from "next";

const CSP = [
  "default-src 'self'",
  // Scripts: self + Paystack + inline scripts (Next.js requires 'unsafe-inline' for hydration)
  "script-src 'self' 'unsafe-inline' https://js.paystack.co",
  // Styles: self + inline (required for CSS-in-JS / inline styles throughout the app)
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Fonts
  "font-src 'self' https://fonts.gstatic.com",
  // Images: self + data URIs (for inline SVGs/icons) + Sanity CDN (for CMS images)
  "img-src 'self' data: https://cdn.sanity.io",
  // API connections: self + Sanity API + Brevo + Paystack
  "connect-src 'self' https://*.sanity.io https://api.brevo.com https://api.paystack.co https://js.paystack.co",
  // Frames: Paystack checkout uses an iframe
  "frame-src https://checkout.paystack.com",
  // No plugins
  "object-src 'none'",
  // Upgrade insecure requests in production
  "upgrade-insecure-requests",
].join("; ")

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: CSP,
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ]
  },
}

export default nextConfig;
