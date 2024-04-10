const db = require("./dbModel");

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
      next({ log: "Error in dbController.getGenre", message: err })
    );
};

dbController.newUser = (req, res, next) => {
  const params = [req.body.name];
  const text = `INSERT INTO users(name) VALUES ($1)`;
  db.query(text, params)
    .then(() => next())
    .catch((err) =>
      next({ log: "Error in dbController.newUser", message: err })
    );
};

dbController.getUserId = (req, res, next) => {
  const params = [req.body.name];
  const text = `SELECT users._id FROM users WHERE users.name = $1`;
  db.query(text, params)
    .then((data) => {
      res.locals.userId = data.rows[0]._id;
      return next();
    })
    .catch((err) =>
      next({ log: "Error in dbController.getUserId", message: err })
    );
};

dbController.getUserInfo = (req, res, next) => {
  const params = [req.params.id];
  const text = `SELECT * FROM users WHERE users._id = $1`;
  db.query(text, params)
    .then((data) => {
      res.locals.userInfo = data.rows[0];
      return next();
    })
    .catch((err) =>
      next({ log: "Error in dbController.getUserInfo", message: err })
    );
};

dbController.getMoodId = (req, res, next) => {
  const params = [req.body.mood];
  const text = `SELECT mood._id FROM mood WHERE mood.name = $1`;
  db.query(text, params)
    .then((data) => {
      res.locals.moodId = data.rows[0]._id;
      return next();
    })
    .catch((err) =>
      next({ log: "Error in dbController.getMoodId", message: err })
    );
};

dbController.addHistory = (req, res, next) => {
  // calculate current date in YYYY-MM-DD format
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  // const params = [
  //   `${year}-${month}-${day}`,
  //   res.locals.userId,
  //   res.locals.moodId,
  //   req.body.message
  // ];

  const params = [
    `${year}-${month}-${day}`,
    req.body.user_id,
    req.body.mood_id,
    req.body.message,
  ];

  res.locals.date = `${year}-${month}-${day}`;
  res.locals.user_id = req.body.user_id;
  res.locals.mood_id = req.body.mood_id;
  res.locals.message = req.body.message;

  const text = `INSERT INTO history(date, user_id, mood_id, message) VALUES($1, $2, $3, $4)`;
  db.query(text, params)
    .then(() => next())
    .catch((err) =>
      next({ log: "Error in dbController.addHistory", message: err })
    );
};

dbController.getUserHistory = (req, res, next) => {
  // const params = [req.body.name];
  const params = [req.body.id];
  const text = `SELECT h.date, m.name as mood, h.message FROM users u 
  INNER JOIN history h ON u._id = h.user_id 
  INNER JOIN mood m ON m._id = h.mood_id
  WHERE u._id = $1`;
  db.query(text, params)
    .then((data) => {
      res.locals.history = data.rows;
      return next();
    })
    .catch((err) =>
      next({ log: "Error in dbController.getUserHistory", message: err })
    );
};

dbController.getMoodsDay = (req, res, next) => {
  const params = [req.body.date];
  const text = `SELECT m.name as mood FROM users u 
    INNER JOIN history h ON u._id = h.user_id 
    INNER JOIN mood m ON m._id = h.mood_id
    WHERE h.date = $1`;
  db.query(text, params)
    .then((data) => {
      res.locals.moods = data.rows;
      return next();
    })
    .catch((err) =>
      next({ log: "Error in dbController.getMoodsDay", message: err })
    );
};

module.exports = dbController;
