exports.devServer = ({ host, port }) => ({
  devServer: {
    stats: 'errors-only',
    open: true, // opens the page in browser
    historyApiFallback: true, // HTML5 History API serves index.html when there is 404 error
    overlay: true, // displays syntax error in browser (but not run time errors)
    // there is error-overlay-webpack-plugin for better output
  },
});
