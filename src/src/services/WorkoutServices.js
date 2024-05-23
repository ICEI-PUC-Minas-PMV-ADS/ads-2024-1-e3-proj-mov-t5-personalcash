import DataBaseWorkout from './DbServicesWorkout';

const DB_EXEC_WORKOUT = DataBaseWorkout.getConnection();

export const getTreinos = async () => {
  let results = await DB_EXEC_WORKOUT(`select * from treinos`);
  return results.rows._array;
}

// Inserir
export const insertTreinos = async (param) => {
  let results = await DB_EXEC_WORKOUT(`insert into treinos (nome, data, inicio, duracao, valor, pago) values (?, ?, ?, ?, ?, ?)`, 
    [param.nome, param.data, param.inicio, param.duracao, param.valor, param.pago ? 1 : 0]);
  return results.rowsAffected;
}

// Editar
export const updateTreinos = async (param) => {
  let results = await DB_EXEC_WORKOUT(`update treinos set nome = ?, data = ?, inicio = ?, duracao = ?, valor = ?, pago = ? where id = ?`, 
    [param.nome, param.data, param.inicio, param.duracao, param.valor, param.pago ? 1 : 0, param.id]);
  return results.rowsAffected;
}

// Deletar
export const deleteTreinos = async (id) => {
  let results = await DB_EXEC_WORKOUT(`delete from treinos where id = ?`, [id]);
  return results.rowsAffected;
}