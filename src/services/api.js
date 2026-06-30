import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const equipamentoService = {
  listar: () => supabase.from('equipamentos').select('*'),
  criar: (dados) => supabase.from('equipamentos').insert(dados).select()
};

export const cidadeService = {
  listar: () => supabase.from('cidades').select('*'),
  criar: (dados) => supabase.from('cidades').insert(dados).select()
};

export const funcionarioService = {
  listar: () => supabase.from('funcionarios').select('*'),
  criar: (dados) => supabase.from('funcionarios').insert(dados).select()
};

export const servicoService = {
  listar: () => supabase.from('servicos').select('*'),
  criar: (dados) => supabase.from('servicos').insert(dados).select()
};
