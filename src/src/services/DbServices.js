import * as SQLite from 'expo-sqlite';

const DataBase = {
  getConnection: () => {
    const db = SQLite.openDatabase('clientesPersonalCash.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists clientes(id integer primary key not null, nome text not null, sobrenome text not null, apelido text not null, telefone text not null, data text not null)');
    });

    const ExecuteQuery = (sql, params = []) => {
      return new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });
    };

    return ExecuteQuery; // Retornar a função ExecuteQuery
  },
};

export default DataBase;

