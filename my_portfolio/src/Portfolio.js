import React, { Component } from 'react';
import game_1 from './game_1.png';
import game_2 from './game_2.png';
import game_3 from './game_3.png';
import game_4 from './game_4.png';

import './Portfolio.css';



class Portfolio extends Component {



    render() {
        return (
            <div>
                <nav className="navbar">
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
                                <div className="tabs is-right">
                                    <ul>
                                        <li className="is-active"></li>
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
                <br />  <br />  <br />

                <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                        <h1 class="title post-title">Barley-Brick Game</h1>
                        <img src={game_1} alt="Featured Image" style={{ height: "300px" }} />
                    </div>
                    <div class="column is-12 featured-content ">
                        <p class="post-excerpt">Created with vanillaJS, Canvas, HTML5. The object of the game
                            is to unscramble the tiles by sliding to get them into consecutive order, <br />
                            with the space in the bottom right again.</p>
                        <br />
                        <div class="foot">
                            <a href="https://github.com/Mikalai19/barley-brick-game" class="button is-primary">View code</a>
                            <a href="https://mikalai19.github.io/barley-brick-game/" class="button is-primary">View game</a>
                        </div>
                    </div>
                </article>
                <p><i class="arrow down"></i></p>
                <br /><br /> <br />

                <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                        <h1 class="title post-title">National Parks</h1>
                        <img src={game_2} alt="Featured Image" style={{ height: "300px" }} />
                    </div>
                    <div class="column is-12 featured-content ">
                        <p class="post-excerpt">Created with NodeJS, Express, Sequelize, EJS, PostgreSQL. <br />The website created for searching National parks and trails in the United States.</p>
                        <br />
                        <div class="foot">
                            <a href="https://github.com/Mikalai19/national-parks" class="button is-primary">View code</a>
                            <a href="https://national-parks-dev.herokuapp.com/" class="button is-primary">Visit site</a>
                        </div>
                    </div>
                </article>
                <br /><br /> <br />

                <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                        <h1 class="title post-title">GA-List</h1>
                        <img src={game_3} alt="Featured Image" style={{ height: "300px" }} />
                    </div>
                    <div class="column is-12 featured-content ">
                        <p class="post-excerpt">Created by using MERN stack. Project has been developed by me and my team.<br /> Platform to serve as a marketplace to buy, sell and interact with the community.
                        </p>
                        <br />
                        <div class="foot">
                            <a href="https://github.com/Mikalai19/ga-list" class="button is-primary">View Frontend code</a>
                            <a href="https://github.com/Mikalai19/ga-list-api" class="button is-primary">View Backend code</a>
                            <a href="https://github.com/Mikalai19/barley-brick-game" class="button is-primary">Visit site</a>
                        </div>
                    </div>
                </article>
                <br /><br /><br />

                <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                        <h1 class="title post-title">Weather-App</h1>
                        <img src={game_4} alt="Featured Image" style={{ height: "300px" }} />
                    </div>
                    <div class="column is-12 featured-content ">
                        <p class="post-excerpt">Created with Django technology.<br /> A website is designed to search for weather in any city in the world.</p>
                        <br />
                        <div class="foot">
                            <a href="https://github.com/Mikalai19/weather-app" class="button is-primary">View code</a>
                            <a href="https://github.com/Mikalai19/barley-brick-game" class="button is-primary">Visit site</a>
                        </div>
                    </div>
                </article>

            </div>
        )
    }
}

export default Portfolio;