import React from 'react';

function RemoverLembrete({ lembretes, setLembretes }) {
  // Função para remover um lembrete
  const removerLembrete = (index) => {
    const novosLembretes = lembretes.filter((_, i) => i !== index);
    setLembretes(novosLembretes); // Atualiza a lista de lembretes
  };

  return (
    <div>
      <h5 className="mt-4">Remover Lembrete</h5>
      <ul className="list-group">
        {lembretes.length === 0 ? (
          <li className="list-group-item">Nenhum lembrete disponível para remover.</li>
        ) : (
          lembretes.map((lembrete, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {lembrete}
              <button
                className="btn btn-danger btn-sm shadow"
                onClick={() => removerLembrete(index)} // Chama a função para remover o lembrete
              >
                Apagar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default RemoverLembrete;
