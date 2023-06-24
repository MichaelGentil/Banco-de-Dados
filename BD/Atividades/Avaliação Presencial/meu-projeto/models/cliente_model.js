const knex = require('../knex');

const Cliente = {
  criarCliente: async (cliente) => {
    try {
      const [id] = await knex('clientes').insert(cliente);
      return id;
    } catch (error) {
      throw error;
    }
  },

  obterClientePorId: async (id) => {
    try {
      const cliente = await knex('clientes').where('id', id).first();
      return cliente;
    } catch (error) {
      throw error;
    }
  },

  atualizarCliente: async (id, clienteAtualizado) => {
    try {
      const resultado = await knex('clientes').where('id', id).update(clienteAtualizado);
      return resultado;
    } catch (error) {
      throw error;
    }
  },

  excluirCliente: async (id) => {
    try {
      const resultado = await knex('clientes').where('id', id).del();
      return resultado;
    } catch (error) {
      throw error;
    }
  },

  listarClientes: async () => {
    try {
      const clientes = await knex('clientes').select('*');
      return clientes;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Cliente;
