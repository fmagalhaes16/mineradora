import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const equipamentoService = {
  listar: () => api.get('/equipamentos'),
  criar: (dados) => api.post('/equipamentos', dados)
};

export const cidadeService = {
  listar: () => api.get('/cidades'),
  criar: (dados) => api.post('/cidades', dados)
};

export const funcionarioService = {
  listar: () => api.get('/funcionarios'),
  criar: (dados) => api.post('/funcionarios', dados)
};

export const servicoService = {
  listar: () => api.get('/servicos'),
  criar: (dados) => api.post('/servicos', dados)
};