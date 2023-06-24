const knex = require('../knex');

const Pedidos = {
  criarPedido: async (pedido) => {
    try {
      const [id] = await knex('pedidos').insert(pedido);
      return id;
    } catch (error) {
      throw error;
    }
  },

  obterPedidoPorId: async (id) => {
    try {
      const pedido = await knex('pedidos').where('id', id).first();
      return pedido;
    } catch (error) {
      throw error;
    }
  },

  atualizarPedido: async (id, pedidoAtualizado) => {
    try {
      const resultado = await knex('pedidos').where('id', id).update(pedidoAtualizado);
      return resultado;
    } catch (error) {
      throw error;
    }
  },

  excluirPedido: async (id) => {
    try {
      const resultado = await knex('pedidos').where('id', id).del();
      return resultado;
    } catch (error) {
      throw error;
    }
  },

  listarPedidos: async () => {
    try {
      const pedidos = await knex('pedidos').select('*');
      return pedidos;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Pedidos;
