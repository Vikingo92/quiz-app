import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { DivForm } from '../styles/CardQuestion'

export default class Home extends Component {
    render() {

        const ContainerStyle = styledComponents.div`
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
        width: 80%;
        padding: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        `

        return (
            <DivForm>
                <ContainerStyle>
                    <p>{
                        `Realiza este cuestionario para descrubir que tan friki eres, encontrarás preguntas de video juegos y de peliculas que un friki de corazón ha visto más de 2 veces.`
                    }
                    </p>
                    <Image src="https://www.pngkit.com/png/full/192-1923288_octocat-github-logo-transparent-octdrey-catburn.png" rounded width="250px" style={{ textAlign: "center" }} />
                    <Link  to='/question' className='nav-link'>Este custionario empieza aqui</Link>
                </ContainerStyle>
            </DivForm>
        )
    }
}
