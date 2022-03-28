const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const cookie = req.cookie[process.env.COOKIE_NAME];
    if (!cookie) throw new Error('you have to sign in yo');

    const user = jwt.verify(cookie, process.env.JWT_SECRET);
    req.user = user;

    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */
};
