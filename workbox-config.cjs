module.exports = {
    globDirectory: 'dist/',
    globPatterns: [
      '**/*.{html,js,css,png,svg,jpg}'
    ],
    swDest: 'dist/sw.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: ({request}) => request.destination === 'document' || request.destination === 'script' || request.destination === 'style',
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-resources',
          expiration: {
            maxEntries: 100,
          },
        },
      },
      {
        urlPattern: ({request}) => request.destination === 'image',
        handler: 'CacheFirst',
        options: {
          cacheName: 'image-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          },
        },
      },
    ],
  };
  