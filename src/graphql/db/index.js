import sqlserver from 'mssql';
import env from '../../env.json';

export const sql = sqlserver;
export const connect = () => sqlserver.connect(env.BD.DEV);
export const disconnect = () => sqlserver.close();