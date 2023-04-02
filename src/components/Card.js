import React from "react";
import '../styles/card.css';

function Card(props) {
    return (
        <>
            <div class="card border-0">
                <div class="position-relative">

                </div>
                <div class="card-body"> 
                    <img src={props.imgCapa} style={{height:"15%", width:"15%"}} alt="capa" />
                    <div class="mb-3"><a class="card-link text-primary read-more" href="javascript://">Read More</a></div>
                    <h5 class="card-title">{props.titulo}</h5>
                    <p class="card-text">{props.descricao}.</p>
                    <p>Autor(es): {props.autor1}, {props.autor2}</p>
                </div>
                <div class="card-footer">
                    <div class="media align-items-center">
                        <div class="media-body"><a class="card-link text-uppercase" href="javascript://">{props.categoria}</a></div>
                        <div class="footerright">
                            <div class="tnlink3"><i class="fas fa-heart" aria-hidden="true"></i></div>
                            <div class="tnlink3"><i class="fas fa-share-nodes" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;