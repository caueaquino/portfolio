import React, { Component } from 'react'

import './styles.css'

import Favorite from '@material-ui/icons/Favorite'
import Keyboard from '@material-ui/icons/Keyboard'

export default class Info extends Component {
    render() {
        return (
            <section id="info">
                <h2>MAIS INFORMAÇÕES</h2>

                <h3>OUTRAS INFORMAÇÕES SOBRE MIM</h3>
                <p id="p-a">
                   " Viver é enfrentar um problema atrás do outro. <br/>
                   O modo como você o encara é que faz a diferença. "
                </p>
                <a id="ref-f" href="https://www.google.com/search?q=Benjamin+Franklin&rlz=1C1GCEA_enBR835BR835&oq=Benjamin+Franklin&aqs=chrome..69i57j0l5.499j0j4&sourceid=chrome&ie=UTF-8" target="_blank">
                    Benjamin Franklin
                </a>
                <div id="content-info">
                     <div id="biog">
                        <h3>
                            <div className="space-icon">
                                <Favorite/>
                            </div>
                            BIOGRAFIA
                        </h3>
                     
                        <p className="p-alt">
                            Em 2016 iniciei o curso superior de Bacharel em Engenharia de Software na Universidade Tecnológica Federal do Paraná (UTFPR). Durante a faculdade tive meu primeiro contato com a programação, sempre gostei de lógica, assim fui dispertando cada vez mais interesse pela área. Em 2018 entrei para uma empresa junior, chamada Unect Jr. la eu aprendi muito, e evolui muito junto com a empresa, no final do ano de 2018 fui aprovado em um processo seletivo para a empresa de tecnologia Forlogic, onde até hoje estou trabalhando como desenvolvedor.
                        </p>
                     </div>
                     

                     <div id="prof">
                         <h3>
                            <div className="space-icon">
                                <Keyboard/>
                            </div>
                            PROFISSÃO
                        </h3>

                        <p className="p-alt">
                            Durante todo minha vida, sempre tive muito contato com a tecnologia, jogava muito videogame, e mexia em computadores. Como meu pai e meu tio eram muito ligar na área, formados em um curso no qual hoje em dia seria semelhante a Análise de Sistemas, sempre estavam mexendo com essas coisas, e sempre me interessei, foi ai que começou o meu interesse pela área. Sempre gostei e me dei bem com exatas e adorava lógica, outro ponto que me motivou muito a seguir este caminho.
                        </p>
                     </div>
                </div>
            </section>
        )
    }
}
