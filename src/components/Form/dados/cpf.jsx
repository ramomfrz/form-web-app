import React from 'react'

function cpf() {
    return (
        <div className='cpf-container'>
            <div className="nome-container">
                <input type="text" placeholder="__/__/____" />
                <input type="text" placeholder="CPF" />
                <input type="text" placeholder="Renda Mensal" />
            </div>
        </div>
    )
}

export default cpf