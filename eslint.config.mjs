import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

export default [
  ...nextCoreWebVitals,
  {
    rules: {
      'react/display-name': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
]
