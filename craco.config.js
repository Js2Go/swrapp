const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@apihooks': pathResolve('src/apihooks'),
      '@views': pathResolve('src/views'),
      '@router': pathResolve('src/router'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils')
    }
  },
  babel: {
    plugins: [
      ['import', {
        libraryName: 'antd-mobile',
        style: 'css',
      }]
    ]
  }
}
