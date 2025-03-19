/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DB_URL: process.env.NEXT_PUBLIC_DB_URL,
    NEXT_PUBLIC_TOKEN_SECRET: process.env.NEXT_PUBLIC_TOKEN_SECRET,
    NEXT_PUBLIC_CLOUDINARY_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
    NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    NEXT_PUBLIC_CLOUDINARY_SECRET: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET,
    NEXT_PUBLIC_NODEMAILER_EMAIL: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    NEXT_PUBLIC_NODEMAILER_PASS: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
    NEXT_PUBLIC_STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
