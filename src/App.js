// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o Bootstrap
import LembreteEntrada from './lembreteEntrada'; // Importa o componente de entrada
import LembreteLista from './lembretelista'; // Importa o componente de lista
import RemoverLembrete from './removerlembrete'; // Importa o componente de remover

function App() {
  const [lembretes, setLembretes] = useState([]); // Lista de lembretes
  const [novoLembrete, setNovoLembrete] = useState(''); // Campo de texto

  // Função para adicionar um novo lembrete
  const adicionarLembrete = () => {
    if (novoLembrete.trim() !== '') {
      setLembretes([...lembretes, novoLembrete]); // Adiciona o lembrete à lista
      setNovoLembrete(''); // Limpa o campo de texto
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Hello, Lembretes!</h1>

      {/* Componente de entrada para novo lembrete */}
      <LembreteEntrada
        novoLembrete={novoLembrete}
        setNovoLembrete={setNovoLembrete}
        adicionarLembrete={adicionarLembrete}
      />

      {/* Exibe lista de lembretes */}
      <LembreteLista lembretes={lembretes} />

      {/* Componente para remover lembretes */}
      <RemoverLembrete lembretes={lembretes} setLembretes={setLembretes} />
    </div>
  );
}

export default App;
