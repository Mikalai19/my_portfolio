import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
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
                <br />  <br /><br />
                <form action="https://getform.io/f/e7b425c0-4a95-4417-8e4a-240ec5c1503a" method="POST" >

                    <div class="container">
                        <div class="section-heading">
                            <h3 class="title is-2"><h1>Contact Form </h1></h3>

                        </div>
                        <div class="columns">
                            <div class="column is-6 is-offset-3">

                                <div class="box">
                                    <div class="field">

                                        <label htmlFor="name"><strong>Name</strong></label>
                                        <div class="control">
                                            <input class="input" name="email" type="text" placeholder="Type your name" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label htmlFor="email"><strong>Email</strong></label>
                                        <div class="control has-icons-left">
                                            <input class="input" name="email" type="email" placeholder="Type your email" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label htmlFor=""><strong>Message</strong></label>
                                        <div class="control">
                                            <textarea class="textarea" name="message" type="text" placeholder="Type text"></textarea>

                                        </div>
                                    </div>

                                    <div class="field is-grouped has-text-centered">
                                        <div class="control" >
                                            <button class="button is-link is-large"><span class="icon" >
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                                <span>Submit</span></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>

            </div>
        )
    }
}

export default Contact;