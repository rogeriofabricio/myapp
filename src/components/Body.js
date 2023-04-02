import React from "react";
import '../styles/body.css';
import axios from "axios";
import Card from "./Card";

const baseURL = "./data/data.json";


function Body() {
    const [ livro, setLivro ] = React.useState(null)

    React.useEffect(() => {
    axios
        .get(baseURL).then((response) => {
            setLivro(response.data['livros']);
        });
    }, []);

    if(!livro) return null;

    const renderBooks = () => {
        const result = [];
        for(const i in livro) {
            console.log(livro[i])
            result.push(
                <Card 
                    titulo={livro[i].titulo} 
                    descricao={livro[i].descricao} 
                    categoria={livro[i].categoria} 
                    imgCapa={livro[i].imgCapa}
                    autor1={livro[i].autores.autor1}
                    autor2={livro[i].autores.autor2}
                />
            );
        }
    
        return <div>{result}</div>;
    };
      
    return (
        <div className="body">
            {renderBooks()}
        </div>
    )
}

export default Body