import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';


class ProsThink extends Component {
    render(){
        return(
        <div>
          <section id="features">
          <div className="container">
          <div className="section-header wow fadeIn" data-wow-duration="1s">
              <h3 className="section-title">WHAT DO PROS THINK</h3>
              <span className="section-divider" />
              <h5 style={{textAlign:'center'}}>Testimonials</h5>
            </div>
            <Grid fluid>
            <Row style={{flexDirection:'horizontal', paddingBottom:25}}>
                <Col data-wow-delay="0.3s" className="wow fadeInLeft" style={{}} xs>
                <img src="https://raiseyouredge.com/wp-content/uploads/2018/03/fedor.jpg" alt="/" />
                </Col>
                
                <Col data-wow-delay="0.3s" className="wow fadeInRight" style={{}} xs>
                <h5>
                Fedor Holz, #1 Ranked Global Poker Index
                </h5>
                <p>
                I have the highest respect for Ben as a poker Player. His work ethic and Approach to the game are very unique and make him one of the toughest opponents on the highest stakes. We spent a lot of time together talking about Hands and strategy and I can say that his insight has always been valuable to me.
                </p>
                </Col>
            </Row>
            <Row style={{flexDirection:'horizontal', paddingBottom:40}}>
                <Col data-wow-delay="0.2s" className="wow fadeInLeft" style={{}} xs>
                <img src="https://raiseyouredge.com/wp-content/uploads/2018/03/patrick-leonard-1.jpg" alt="/" />
                </Col>
                <Col data-wow-delay="0.2s" className="wow fadeInRight" style={{}} xs>
                <h5>
                Patrick Leonhard (pads1611), Owner & Head coach of BitB
                </h5>
                <p>
                Ben is undoubtedly one of the best players in the world, but in my opinion he excels even further in terms of coaching and is likely the best tournament poker coach in the world. I’ve worked with him on WSOP preparation where he showed just how well prepared and organized he is (something surprisingly rare for tournament coaches!) and instantly wanted him to be a part of bitB where he has taken the quality of our coaching to a higher level. Great player, great guy, great coach.
                </p>
                </Col>
            </Row>
            <Row style={{flexDirection:'horizontal', paddingBottom:40}}>
                <Col data-wow-delay="0.1s" className="wow fadeInLeft" style={{}} xs>
                <img src="https://raiseyouredge.com/wp-content/uploads/2018/03/steffen.jpg" alt="/" />
                </Col>
                <Col data-wow-delay="0.1s" className="wow fadeInRight" style={{}} xs>
                <h5>
                Steffen Sontheimer, 2017 Poker Masters Winner
                </h5>
                <p>
                I know Ben for the biggest part of my poker career already. We were not just studying poker together, but were flatmates for more than a year sharing thoughts and strategies pretty much everyday. His work ethic and professionalism is outstanding and the combination of understanding theoretical concepts as well as applying those to player pools of all levels is rarely seen out there. I decided to play the highest live tournaments out there myself and one thing I can tell you guys for sure: I’m really happy to not face my buddy Ben out there in the Live-Arena.
                </p>
                </Col>
            </Row>
            </Grid>
            </div>
            </section>    
        </div>
        )
    }
}

export default ProsThink;