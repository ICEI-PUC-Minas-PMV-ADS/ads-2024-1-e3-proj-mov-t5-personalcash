import DataBasePerfil from './DbPerfil';

const DB_EXEC = DataBasePerfil.getConnection();

export const getPerfil = async () => {
  let results = await DB_EXEC(`select * from perfil`);
  //console.log(results);
  return results.rows._array;
}

// Inserir
export const insertPerfil = async (param) => {
  let results = await DB_EXEC(`insert into perfil(nome, email, password) values(?,?,?)`, 
    [param.nome, param.email, param.password]);
    //console.log(results);
  return results.rowsAffected;
}

// Editar
export const updatePerfil = async (param) => {
  let results = await DB_EXEC(`update perfil set nome=?, email=?, password=? where id=?`, 
    [param.nome, param.email, param.password, param.id]);
    //console.log(results);
  return results.rowsAffected;
}

// Deletar
export const deletePerfil = async (id) => {
  let results = await DB_EXEC(`delete from perfil where id=?`, [id]);
    //console.log(results);
  return results.rowsAffected;
}