module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  rules: {
    'class-methods-use-this': 0,
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-underscore-dangle': ['error', {
      allow: ['_id'],
    }],
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },
};
