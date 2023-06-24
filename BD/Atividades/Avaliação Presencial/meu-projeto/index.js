const Cliente = require('./models/cliente_model');
const Pedidos = require('./models/pedidos_model');

// Criação de um novo cliente
const novoCliente = { nome: 'Novo Cliente', endereco: 'Endereco', telefone: '999999999' };
Cliente.criarCliente(novoCliente)
  .then(id => {
    console.log('Novo cliente criado. ID:', id);
  })
  .catch(error => {
    console.log('Erro ao criar novo cliente:', error);
  });

// Obtenção de um cliente pelo ID
const clienteId = 1;
Cliente.obterClientePorId(clienteId)
  .then(cliente => {
    console.log('Cliente encontrado:', cliente);
  })
  .catch(error => {
    console.log('Erro ao obter cliente pelo ID:', error);
  });

// Atualização de um cliente
const clienteAtualizado = { nome: 'Cliente Atualizado' };
Cliente.atualizarCliente(clienteId, clienteAtualizado)
  .then(resultado => {
    console.log('Cliente atualizado. Resultado:', resultado);
  })
  .catch(error => {
    console.log('Erro ao atualizar cliente:', error);
  });

// Exclusão de um cliente
Cliente.excluirCliente(clienteId)
  .then(resultado => {
    console.log('Cliente excluído. Resultado:', resultado);
  })
  .catch(error => {
    console.log('Erro ao excluir cliente:', error);
  });

// Listagem de todos os clientes
Cliente.listarClientes()
  .then(clientes => {
    console.log('Lista de clientes:', clientes);
  })
  .catch(error => {
    console.log('Erro ao listar clientes:', error);
  });
