const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  // images: {
  //   domains: ['placehold.co', 'res.cloudinary.com', 'avatars.githubusercontent.com'],
  //   dangerouslyAllowSVG: true,
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'placehold.co',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'avatars.githubusercontent.com',
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
});
