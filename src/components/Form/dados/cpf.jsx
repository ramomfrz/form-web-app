import React from 'react'

function cpf({ formDados, setFormDados }) {
    return (
        <div className='cpf-container'>
            <div className="nome-container">
                <label>Data de nascimento:</label>
                <input type="text" placeholder="(__/__/____)" value={formDados.data} onChange={(event) => setFormDados((prev) => {
                    return {
                        ...prev,
                        data: event.target.value
                    }
                })} />
                <label>CPF:</label>
                <input type="text" placeholder="CPF" value={formDados.cpf} onChange={(event) => setFormDados((prev) => {
                    return {
                        ...prev,
                        cpf: event.target.value
                    }
                })} />
                <label>Renda Mensal:</label>
                <input type="text" placeholder="Informe sua renda mensal" value={formDados.renda} onChange={(event) => setFormDados((prev) => {
                    return {
                        ...prev,
                        renda: event.target.value
                    }
                })} />
            </div>
        </div>
    )
}

export default cpf