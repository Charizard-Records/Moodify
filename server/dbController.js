const db = require('./dbModel');

const dbController = {};

dbController.getGenre = (req, res, next) => {
  const params = [req.body.mood];
  const text = `SELECT g.name AS genre FROM genre g 
  INNER JOIN mood_to_genre mg ON g._id = mg.genre_id 
  INNER JOIN mood m ON m._id = mg.mood_id WHERE m.name = $1`;
  db.query(text, params)
    .then((data) => {
      const genre = data.rows;
      res.locals.genre = genre.map((el) => el.genre);
      return next();
    })
    .catch((err) =>
      next({ log: 'Error in dbController.getGenre', message: err })
    );
};

module.exports = dbController;
