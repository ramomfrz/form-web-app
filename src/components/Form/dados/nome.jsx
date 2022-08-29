import React from 'react'

function Nome({ formDados, setFormDados }) {
    return (
        <div className="nome-container">
            <label>Nome:</label>
            <input type="text" placeholder="Nome" value={formDados.nome} onChange={(event) => setFormDados((prev) => {
                return {
                    ...prev,
                    nome: event.target.value
                }
            })} />
            <label>Sobrenome:</label>
            <input type="text" placeholder="Sobrenome" value={formDados.sobrenome} onChange={(event) => setFormDados((prev) => {
                return {
                    ...prev,
                    sobrenome: event.target.value
                }
            }
            )} />
            <label>E-mail:</label>
            <input type="text" placeholder="seuemail@exemplo.com" value={formDados.email} onChange={(event) => setFormDados((prev) => {
                return {
                    ...prev,
                    email: event.target.value
                }
            })} />
            <label>Telefone:</label>
            <input type="text" placeholder="(00) 00000-0000" value={formDados.telefone} onChange={(event) => setFormDados((prev) => {
                return {
                    ...prev,
                    telefone: event.target.value
                }
            })} />
        </div>
    )
}
export default Nome