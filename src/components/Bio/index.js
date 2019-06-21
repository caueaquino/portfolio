import React, { Component } from 'react'

import './styles.css'

import me from '../../assets/images/me.JPG';

import Favorite from '@material-ui/icons/Favorite'
import School from '@material-ui/icons/School'
import Hearing from '@material-ui/icons/Hearing'
import Storage from '@material-ui/icons/Storage'

import curriculo from "../../assets/files/CaueAquinoNogueira_Curriculum.pdf"

export default class Bio extends Component {
    render() {
        return (
            <section id="bio">
                <div className="half-bio">
                    <img id="me" src={me} alt="Cauê" />
                    <a href={curriculo} id="cc-complete">
                        CURRÍCULO COMPLETO
                    </a>
                </div>

                <div className="half-bio" id="info-bio">
                    <h2>
                        CAUÊ AQUINO NOGUEIRA
                    </h2>

                    <h3>
                        <div className="space-icon">
                            <Favorite/>
                        </div>
                        INTERESSES
                    </h3>
                    <ul>
                        <li>Desenvolvimento Web</li>
                        <li>Banco de Dados</li>
                        <li>Aplicativos Mobile</li>
                        <li>Inteligência Artificial</li>
                        <li>Internet das Coisas (IOT)</li>
                        <li>Desenvolvimento Back-End</li>
                    </ul>

                    <h3>
                        <div className="space-icon">
                            <Hearing/>
                        </div>
                        IDIOMAS
                    </h3>
                    <ul>
                        <li>Português - Nativo</li>
                        <li>Ingles - Avançado</li>
                    </ul>
                
                    <h3>
                        <div className="space-icon">
                            <School/>
                        </div>
                        FORMAÇÃO
                    </h3>
                    <ul>
                        <li>Bacharel Engenharia de Software - UTFPR-CP</li>
                        <li>Ensino Médio - ENIAC</li>
                    </ul>
            
                    <h3>
                        <div className="space-icon">
                            <Storage/>
                        </div>
                        ATIVIDADES
                    </h3>
                    <ul>
                        <li>Desenvolvedor Front-End</li>
                        <li>Desenvolvedor Back-End</li>
                        <li>Estudante</li>
                    </ul>
            </div>
            </section>
        )
    }
}
