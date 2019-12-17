module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 1,
    },
    'css-mqpacker': {},
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
  },
};
