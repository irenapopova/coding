exports.homePage = (req, res, next) => {
  req.name = 'ire';
  res.cookies('name', 'Irene is cool', { maxAge: 70000 };
  next();
}

export.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};