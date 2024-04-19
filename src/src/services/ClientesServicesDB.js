import DataBase from './DbServices';

const DB_EXEC = DataBase.getConnection();

export const getClientes = async () => {
  let results = await DB_EXEC(`select * from clientes`);
  //console.log(results);
  return results.rows._array;
}

// Inserir
export const insertClientes = async (param) => {
  let results = await DB_EXEC(`insert into clientes(nome, sobrenome, apelido, telefone, data) values(?,?,?,?,?)`, 
    [param.nome, param.sobrenome, param.apelido, param.telefone, param.data]);
    //console.log(results);
  return results.rowsAffected;
}

// Editar
export const updateClientes = async (param) => {
  let results = await DB_EXEC(`update clientes set nome=?, sobrenome=?, apelido=?, telefone=?, data=? where id=?`, 
    [param.nome, param.sobrenome, param.apelido, param.telefone, param.data, param.id]);
    //console.log(results);
  return results.rowsAffected;
}

// Deletar
export const deleteClientes = async (id) => {
  let results = await DB_EXEC(`delete from clientes where id=?`, [id]);
    //console.log(results);
  return results.rowsAffected;
}