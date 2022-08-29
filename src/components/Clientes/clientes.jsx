import React from 'react'

function Clientes({ formDados }) {
    return (
        <table>
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Email</th>
                <th>CEP</th>
                <th>Endereço</th>
                <th>Endereço 2</th>
                <th>Data de Nascimento</th>
                <th>CPF</th>
                <th>Renda Mensal</th>
            </tr>
            {formDados.map((dado, index) => {
                return (
                    <tr key={index}>
                        <td>{dado.nome}</td>
                        <td>{dado.sobrenome}</td>
                        <td>{dado.email}</td>
                        <td>{dado.cep}</td>
                        <td>{dado.endereco}</td>
                        <td>{dado.endereco2}</td>
                        <td>{dado.data}</td>
                        <td>{dado.cpf}</td>
                        <td>{dado.renda}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default Clientes