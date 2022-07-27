module.exports = {
  resolve: {
    fallback: { assert: require.resolve("assert/") },
    alias: { '@mui/styled-engine': '@mui/styled-engine-sc' },
    // throwIfNamespace: false,
  },


};