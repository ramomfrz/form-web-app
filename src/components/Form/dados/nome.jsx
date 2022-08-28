import React from 'react'

function Nome({ formDados, setFormDados }) {
    return (
        <div className="nome-container">
            <input type="text" placeholder="Nome" value={formDados.nome} onChange={(event) => setFormDados({ ...formDados, nome: event.target.value })} />
            <input type="text" placeholder="Sobrenome" value={formDados.sobrenome} onChange={(event) => setFormDados({ ...formDados, sobrenome: event.target.value })} />
            <input type="text" placeholder="seuemail@exemplo.com" value={formDados.email} onChange={(event) => setFormDados({ ...formDados, email: event.target.value })} />
            <input type="text" placeholder="(00) 00000-0000" value={formDados.telefone} onChange={(event) => setFormDados({ ...formDados, telefone: event.target.value })} />
        </div>
    )
}

export default Nome