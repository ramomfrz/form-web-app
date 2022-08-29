import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar-container'>

            <nav>
                <div className='HomeSideBar'>
                    <Link to="/"><p>Home</p></Link>
                </div>
                <div className='button-inputs'>
                    <div className='box-input'>
                        <Link to="form"><a>Cadastrar cliente</a></Link> <br />
                    </div>
                    <div className='box-input'>
                        <Link to="clientes"><a>Clientes cadastrados</a></Link>
                    </div>
                </div>
            </nav >

        </div >
    )

}
export default Sidebar