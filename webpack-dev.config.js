module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: () => [
                require('postcss-import'),
                require('tailwindcss')('./tailwind.config.js'),
                require('autoprefixer'),
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      }
    ]
  }
};
