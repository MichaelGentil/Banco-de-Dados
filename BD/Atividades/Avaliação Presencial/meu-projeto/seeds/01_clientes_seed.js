exports.seed = function(knex) {
    return knex('clientes').del()
      .then(function () {
        return knex('clientes').insert([
          { id: 1, nome: 'Cliente 1', endereco: 'Endereco 1', telefone: '111111111' },
          { id: 2, nome: 'Cliente 2', endereco: 'Endereco 2', telefone: '222222222' },
          { id: 3, nome: 'Cliente 3', endereco: 'Endereco 3', telefone: '333333333' }
        ]);
      });
  };
  