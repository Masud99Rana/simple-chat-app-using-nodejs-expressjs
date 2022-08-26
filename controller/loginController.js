// get login page
function getLogin(req, res, next) {
  res.send('Hello Login');
}

module.exports = {
  getLogin,
};