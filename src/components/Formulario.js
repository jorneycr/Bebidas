import React from 'react';

const Formulario = () => {
    return (
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Buscar bebidas"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">--Selecion categoria--</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        valur="Buscar Bebidas"
                        className="btn btn-block btn-primary" 
                        type="submit" 
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;