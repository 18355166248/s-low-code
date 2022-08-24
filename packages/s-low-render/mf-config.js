const { dependencies } = require('./package.json');

module.exports = {
  name: 'host',
  remotes: [
    {
      name: 'remote',
      url: 'http://localhost:4000/',
    },
  ],
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
