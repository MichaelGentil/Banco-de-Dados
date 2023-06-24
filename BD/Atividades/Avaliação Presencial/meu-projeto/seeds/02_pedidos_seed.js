exports.seed = function(knex) {
    return knex('pedidos').del()
      .then(function () {
        return knex('pedidos').insert([
          { id: 1, cliente_id: 1, numero_pedido: 'P001', data: '2023-06-01', produtos: 'Produto 1' },
          { id: 2, cliente_id: 2, numero_pedido: 'P002', data: '2023-06-02', produtos: 'Produto 2' },
          { id: 3, cliente_id: 3, numero_pedido: 'P003', data: '2023-06-03', produtos: 'Produto 3' }
        ]);
      });
  };
  