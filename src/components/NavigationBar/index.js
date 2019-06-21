import React, { Component } from 'react'

import './styles.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav id="nav-bar">
                <a href="#bio" className="nav-item">
                    PERFIL
                </a>

                <a href="#skills" className="nav-item">
                    SKILLS
                </a>
                
                <a href="#blog" className="nav-item">
                    BLOG
                </a>

                <a href="http://localhost:3000/">
                    <h1>
                        CA
                        <br/>
                        UE
                    </h1>
                </a>

                <a href="#portfolio" className="nav-item">
                    PORTFÓLIO
                </a>

                <a href="#info" className="nav-item">
                    INFOS
                </a>

                <a href="#contact" className="nav-item">
                    CONTATO
                </a>
            </nav>
        )
    }
}
