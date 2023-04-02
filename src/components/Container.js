import React from "react";
import Body from './Body';
import SideBar from './SideBar';
import '../styles/container.css';
import axios from "axios";

const baseURL = "./data/data.json";
//const baseURL = "https://jsonplaceholder.typicode.com/posts/1"

export default function Container() {
    const [ livro, setLivro ] = React.useState(null)

    React.useEffect(() => {
    axios
        .get(baseURL).then((response) => {
            setLivro(response.data['livros'][0]);
        });
    }, []);

    if(!livro) return null;

    return (
        <div className="container">
            <div className="coluna-70">
                <Body value={livro.titulo} />
            </div>
            <div className="coluna-30">
                <SideBar />
            </div>
        </div>
    )
}
