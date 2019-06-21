import React, { Component } from 'react'

import './styles.css'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <h2>CONTATO</h2>

                <h3>ENTRE EM CONTATO</h3>

                <h4>Entre em contato comigo pelo formulário ao lado, pelo e-mail ou pelo telefone.</h4>

                <a href="mailto:cauenogueira@alunos.utfpr.edu.br">cauenogueira@alunos.utfpr.edu.br</a>

                <a href="tel:+55011964988447">+55 (11) 96498 8447</a>

                <form action="https://formspree.io/cauenogueira@alunos.utfpr.edu.br" method="POST">

                    <input class="input-contact" placeholder="Nome" type="text" />

                    <input class="input-contact" placeholder="E-mail" type="text" />

                    <input class="input-contact" placeholder="Assunto" type="text" />

                    <textarea class="textarea-contact" placeholder="Mensagem" type="text"></textarea>

                    <button id="contact-send">
                        ENVIAR
                    </button>

                </form>

                <h3>REDES SOCIAIS</h3>

                <h4>Entre em contato comigo por minhas redes sociais.</h4>
            </section>
        )
    }
}
