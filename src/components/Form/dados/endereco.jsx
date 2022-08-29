import React from 'react'

function endereco({ formDados, setFormDados }) {
    return (
        <div className='endereco-container'>
            <label>CEP:</label>
            <input type="text" placeholder="CEP" value={formDados.cep} onChange={(event) => setFormDados((prev) => {
                return {
                    ...prev,
                    cep: event.target.value
                }
            })} />
            <label>Endereço:</label>
            <input type="text" placeholder="Endereço" value={formDados.endereco} onChange={(event) => setFormDados((prev) => {
                return {
                    ...prev,
                    endereco: event.target.value
                }
            })} />
            <label>Endereço 2:</label>
            <input type="text" placeholder="Endereço 2" value={formDados.endereco2} onChange={(event) => setFormDados((prev) => {
                return {
                    ...prev,
                    endereco2: event.target.value
                }
            })} />
        </div>
    )
}

export default endereco