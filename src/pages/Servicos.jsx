import React, { useState, useEffect } from 'react';
import { servicoService, equipamentoService, funcionarioService } from '../services/api';

export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [equipamentos, setEquipamentos] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [equipamentoId, setEquipamentoId] = useState('');
  const [funcionarioId, setFuncionarioId] = useState('');

  useEffect(() => {
    carregarServicos();
    carregarEquipamentos();
    carregarFuncionarios();
  }, []);

  const carregarServicos = async () => {
    try {
      const response = await servicoService.listar();
      setServicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar serviços", error);
    }
  };

  const carregarEquipamentos = async () => {
    try {
      const response = await equipamentoService.listar();
      setEquipamentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar equipamentos", error);
    }
  };

  const carregarFuncionarios = async () => {
    try {
      const response = await funcionarioService.listar();
      setFuncionarios(response.data);
    } catch (error) {
      console.error("Erro ao buscar funcionários", error);
    }
  };

  const cadastrar = async () => {
    if (!descricao || !data) return alert("Preencha todos os campos!");
    try {
      await servicoService.criar({
        descricao,
        data,
        equipamento_id: equipamentoId || null,
        funcionario_id: funcionarioId || null
      });
      setDescricao('');
      setData('');
      setEquipamentoId('');
      setFuncionarioId('');
      carregarServicos();
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
  };

  return (
    <div>
      <h2>Gestão de Serviços</h2>
      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Novo Serviço</h3>
        <input type="text" placeholder="Descrição" value={descricao}
          onChange={(e) => setDescricao(e.target.value)} style={{ marginRight: '10px' }} />
        <input type="date" value={data}
          onChange={(e) => setData(e.target.value)} style={{ marginRight: '10px' }} />
        <select value={equipamentoId} onChange={(e) => setEquipamentoId(e.target.value)} style={{ marginRight: '10px' }}>
          <option value="">Selecione o Equipamento</option>
          {equipamentos.map(eq => (
            <option key={eq.id} value={eq.id}>{eq.nome}</option>
          ))}
        </select>
        <select value={funcionarioId} onChange={(e) => setFuncionarioId(e.target.value)} style={{ marginRight: '10px' }}>
          <option value="">Selecione o Funcionário</option>
          {funcionarios.map(f => (
            <option key={f.id} value={f.id}>{f.nome}</option>
          ))}
        </select>
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <h3>Serviços Cadastrados</h3>
      <ul>
        {servicos.map(s => (
          <li key={s.id}><strong>{s.descricao}</strong> - Data: {s.data}</li>
        ))}
      </ul>
    </div>
  );
}