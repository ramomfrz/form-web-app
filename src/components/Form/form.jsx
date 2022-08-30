import React from 'react'
import Nome from "./Dados/nome"
import Endereco from "./Dados/endereco"
import Cpf from "./Dados/cpf"

function Form({ page, setPage, formDados, setFormDados, FormTitles, clients, setClients }) {
    const pageDisplay = () => {
        if (page === 0) {
            return <Nome formDados={formDados} setFormDados={setFormDados} />;
        } else if (page === 1) {
            return <Endereco formDados={formDados} setFormDados={setFormDados} />;
        } else {
            return <Cpf formDados={formDados} setFormDados={setFormDados} />;
        }
    }
    const handleClick = () => {
        setClients([
            ...clients,
            formDados
        ])
        setFormDados([])
        setPage(0)
    }
    return (
        <div className='form'>
            <div className='form-container'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body'>
                    {pageDisplay()}
                </div>
                <div className='footer'>
                    <button onClick={() => { setPage((currPage) => currPage - 1) }}
                        disabled={page === 0}
                        style={{ background: page === 0 ? "gray" : page === 1 ? "cornflowerblue" : "cornflowerblue" }}>
                        Voltar
                    </button>
                    <button onClick={() => {
                        if (page === FormTitles.length - 1) {
                            alert("Formulário enviado :)")
                            handleClick()
                        } else {
                            setPage((currPage) => currPage + 1)
                        }
                    }} style={{ background: page === 0 ? "cornflowerblue" : page === 1 ? "cornflowerblue" : "red" }}>
                        {page === FormTitles.length - 1 ? "Salvar" : "Próximo"}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Form