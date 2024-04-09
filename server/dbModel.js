const { Pool } = require('pg');

const URL =
  'postgres://vzvkauqn:cqNXaIlq1ohKxU_9mYqs2IUDigU4AGA_@salt.db.elephantsql.com/vzvkauqn';

const pool = new Pool({
  connectionString: URL,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
