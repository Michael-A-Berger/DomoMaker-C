const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  // GET
  app.get('/login',
          mid.requiresSecure,
          mid.requiresLogout,
          controllers.Account.loginPage);
  app.get('/signup',
          mid.requiresSecure,
          mid.requiresLogout,
          controllers.Account.signupPage);
  app.get('/logout',
          mid.requiresLogin,
          controllers.Account.logout);
  app.get('/maker',
          mid.requiresLogin,
          controllers.Domo.makerPage);
  app.get('/',
          mid.requiresSecure,
          mid.requiresLogout,
          controllers.Account.loginPage);

  // POST
  app.post('/login',
            mid.requiresSecure,
            mid.requiresLogout,
            controllers.Account.login);
  app.post('/signup',
            mid.requiresSecure,
            mid.requiresLogout,
            controllers.Account.signup);
  app.post('/maker',
            mid.requiresLogin,
            controllers.Domo.make);
};

module.exports = router;
