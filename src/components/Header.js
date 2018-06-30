import React, { Component } from 'react';

class Header extends Component {
render() {
    return(
      <div>
    <header id="header">
    <div className="container">
      <div id="logo" className="pull-left">
        <h1><a href="/intro" className="scrollto"></a></h1>
        {/* 
        <a href="/intro"><img src="img/logo.png" alt="/" title /></a>
        */}
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-has-children"><a href="/intro">Classes</a>
          <ul>
              <li><a href="/">Tournament Masterclass</a></li>
              <li><a href="/">Bounty Beast - The Craft Of Knockout Poker</a></li>
              <li><a href="/">Crush 6Max Hyper SNGs</a></li>
              <li><a href="/">Elementary Cash</a></li>
            </ul>
          </li>
          <li><a href="/about">Youtube</a></li>
          <li><a href="/features">Discord</a></li>
          <li><a href="/pricing">Ranger</a></li>
          <li><a href="/team">Forum</a></li>
          <li className="menu-has-children"><a href="/gallery">Posts</a>
          <ul>
              <li><a href="/">Articles</a></li>
              <li><a href="/">German Law</a></li>

            </ul>
          </li>
          <li><a href="/gallery">Testimonials</a></li>
          <li className="menu-has-children"><a href="/pricing">Private Coaching</a>
            <ul>
              <li><a href="/">Sit and Go Poker Coachings</a></li>
              <li><a href="/">Tournament Poker Coachings</a></li>
              <li><a href="/">NLH Cashgame Poker Coaching</a></li>
            </ul>
          </li>
          <li className="menu-has-children"><a href="/contact">About Us</a>
          <ul>
              <li><a href="/">Success Stories</a></li>
              <li><a href="/">Team</a></li>
           
            </ul>
          </li>
          <li><a href="/contact">Login</a></li>
        </ul>
      </nav>
    </div>
  </header>
      </div>
    )
  }

}

export default Header;