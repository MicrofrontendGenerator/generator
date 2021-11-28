module.exports = app => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.REACT_APP_CONTAINER_HOST);
    next();
  });
};
