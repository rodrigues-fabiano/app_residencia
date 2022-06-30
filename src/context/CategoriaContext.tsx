import React, { createContext, useState } from "react";

export const CategoriaContext = createContext({});

export const CategoriaProvider = ({ children }) => {

    const [idCategoria, setIdCategoria] = useState();
    const [nomeCategoria, setNomeCategoria] = useState();

    const handleCategoria = (categoria) => {

        if (categoria === undefined) {
            setIdCategoria(undefined);
            setNomeCategoria(undefined);
            return false;
        } else {
            setIdCategoria(categoria.idCategoria)
            setNomeCategoria(categoria.nomeCategoria)
            return true;
        }
    }

    return (
        <CategoriaContext.Provider value={{
            idCategoria,
            nomeCategoria,
            handleCategoria
        }}>
            {children}
        </CategoriaContext.Provider>
    )
};

export default CategoriaProvider;