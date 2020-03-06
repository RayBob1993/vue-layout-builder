/*
 * JetBrains IDE's helper to resolve aliases
 * */
const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/element-ui[/\\]lib[/\\]locale[/\\]lang[/\\]zh-CN/, 'element-ui/lib/locale/lang/ru-RU'),
  ],
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.vue',
      '.ts',
      '.css',
      '.scss',
    ],
    root: resolve(__dirname),
    alias: {
      '@': resolve(__dirname),
      '~': resolve(__dirname),
    },
  },
}
