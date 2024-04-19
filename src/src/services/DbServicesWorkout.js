import * as SQLite from 'expo-sqlite';

const DataBaseWorkout = {
  getConnection: () => {
    const db = SQLite.openDatabase('workout.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists treinos(id integer primary key not null, nome text not null, data text not null, inicio text not null, duracao int not null, valor real not null, pago int not null)');
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

export default DataBaseWorkout;

