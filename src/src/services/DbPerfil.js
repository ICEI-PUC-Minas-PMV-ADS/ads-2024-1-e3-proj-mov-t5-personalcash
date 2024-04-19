import * as SQLite from 'expo-sqlite';

const DataBasePerfil = {
  getConnection: () => {
    const db = SQLite.openDatabase('perfilPersonalCash.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists perfil(id integer primary key not null, nome text not null, email text not null, password text not null)');
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

export default DataBasePerfil;

