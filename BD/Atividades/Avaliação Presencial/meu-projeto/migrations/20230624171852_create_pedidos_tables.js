exports.up = function(knex) {
    return knex.schema.createTable('pedidos', function(table) {
      table.increments('id').primary();
      table.integer('cliente_id').unsigned().notNullable();
      table.foreign('cliente_id').references('clientes.id');
      table.string('numero_pedido').notNullable();
      table.date('data').notNullable();
      table.string('produtos').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('pedidos');
  };
  