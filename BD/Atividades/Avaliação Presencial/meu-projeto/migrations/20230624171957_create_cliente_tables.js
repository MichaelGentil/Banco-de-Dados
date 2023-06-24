exports.up = function(knex) {
    return knex.schema.createTable('clientes', function(table) {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('endereco').notNullable();
      table.string('telefone').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
  };
  