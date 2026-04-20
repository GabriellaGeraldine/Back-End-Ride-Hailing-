const jwt = require('jsonwebtoken');
const KUNCI_RAHASIA = 'KELOMPOK_8';

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token)
    return res.status(401).json({ error: 'Token gak ada, login dulu!' });

  try {
    const dataToken = jwt.verify(token, KUNCI_RAHASIA);
    req.user = dataToken;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Token lo salah atau udah basi.' });
  }
};
