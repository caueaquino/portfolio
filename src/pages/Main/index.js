import React from 'react'

import NavBar from '../../components/NavigationBar'
import Bio from '../../components/Bio'
import Skills from '../../components/skills'
import Blog from '../../components/blog'
import Portfolio from '../../components/portfolio'
import Info from '../../components/info'
import Contact from '../../components/contact'
import Footer from '../../components/footer'

import './styles.css';

const Main = () => {
    return (
        <div id="main-page">
            <NavBar></NavBar>
            <Bio></Bio>
            <Skills></Skills>
            <Blog></Blog>
            <Portfolio></Portfolio>
            <Info></Info>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Main;
