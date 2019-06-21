import React, { Component } from 'react'

import './styles.css'

import blog1 from '../../assets/images/blog1.png'
import blog2 from '../../assets/images/blog2.png'
import blog3 from '../../assets/images/blog3.png'

export default class Blog extends Component {
    render() {
        return (
            <section id="blog">
                <h2>BLOG</h2>

                <div id="blogs">
                    <a className="iten-blog" href="https://www.tecmundo.com.br/ciencia/142696-braco-robo-mit-identifica-objetos-usando-visao-toque.htm" target="_blank">
                        <img src={blog1} />
                    </a>

                    <a className="iten-blog" href="https://www.bbc.com/portuguese/vert-fut-48042594" target="_blank">
                        <img src={blog2} />
                    </a>

                    <a className="iten-blog" href="https://www.bbc.com/portuguese/geral-48713662" target="_blank">
                        <img src={blog3} />
                    </a>
                </div>
            </section>
        )
    }
}
