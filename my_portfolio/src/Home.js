import React, { Component } from 'react';
import photo from './photo.png';
import './Home.css'


class Home extends Component {
    render() {
        return (
            <div>
                <section className="hero is-fullheight is-default is-bold" >
                    <div className="hero-head">
                        <nav className="navbar" style={{ color: "white" }}>
                            <div className="container">
                                <div className="navbar-brand">
                                    <a className="navbar-item" href="../">
                                    </a>
                                    <span className="navbar-burger burger" data-target="navbarMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div id="navbarMenu" className="navbar-menu">
                                    <div className="navbar-end">
                                        <div className="tabs is-right" >
                                            <ul>
                                                <li className="is-active" ></li>
                                                <li><a href="/"><h1>Home</h1></a></li>
                                                <li><a href="/about"><h1>About</h1></a></li>
                                                <li><a href="/portfolio"><h1>Portfolio</h1></a></li>
                                                <li><a href="/contact"><h1>Contact</h1></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns is-vcentered">
                                <div className="column is-5">
                                    <figure className="image is-4by3">
                                        <section class="about-column about-column-a">
                                            <img class='profile-pic' src={photo} style={{ width: "70%", backgroundPosition: "50%", borderRadius: "50%" }} />
                                        </section>
                                    </figure>
                                </div>
                                <div className="column is-6 is-offset-1">
                                    <h2 className="subtitle is-4">
                                        Welcome to my portfolio page. I am Full-Stack Software Engineer.
                                        Feel free to explore my work and learn more about me.
                                    </h2>
                                    <br />
                                    <a href="https://github.com/Mikalai19" class='fa fa-github' style={{ fontSize: '65px', color: 'black' }} ></a> <br /> <br />
                                    <a href="https://www.linkedin.com/in/mikalai-bertman-55152a105/" class='fa fa-linkedin' style={{ fontSize: '65px', color: 'black' }}></a><br /> <br /> <br />
                                    <a href="https://docs.google.com/document/d/13Fr1aVpSmbttS1IpEJl-42fHdGE7-ob22MGXtf0gkGY/edit" class="button is-link is-medium">
                                        <span class="icon">
                                            <i class="fas fa-file-alt"></i>
                                        </span>
                                        <span style={{ textAlign: 'center' }}>Download My Resume</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-foot">
                        <div className="container">
                        </div>
                    </div>
                </section >
                <script src="../js/bulma.js"></script>
            </div >
        )
    }
}

export default Home;