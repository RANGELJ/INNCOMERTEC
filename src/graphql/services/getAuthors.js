import { connect, disconnect } from '../db';

export default () => new Promise((resolve, reject) => (async () => {
  try {
    const bd = await connect();
    const result = await bd.request().query('select TOP 100 * from authors');
    disconnect();
    return resolve(result.recordset);
  } catch (e) {
    return reject(e);
  }
})());