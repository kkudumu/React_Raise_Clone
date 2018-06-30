import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

class Rye extends Component {
    render(){
        return(
        <div>
        <Grid fluid style={{backgroundColor:'#0c0c0d', maxHeight:500}}>
        <Row>
            <Col xs>
            <img style={{minHeight:318, height:'auto'}} src="https://raiseyouredge.com/wp-content/uploads/2017/10/RYE-600x375-2.png" alt="leftdisc" />

            </Col>
            <Col style={{paddingTop:60, paddingRight:70, minHeight:258.625, height:'auto', fontSize:19, lineHeight:1.88, textAlign:'center',justifyContent:'center'}} xs>
            <h2 style={{color:'white'}}>QUALITY MATTERS</h2>
            <h5 style={{color:'white'}}>OUR CORE VALUES</h5>
            <p style={{color:'white'}}>Your Poker success is our motivation. Not only will we change the way you think about poker, but you get the best strategies to beat the games as well as a detailed guide on how to implement them. We are constantly updating the content as Poker evolves to ensure you’re never falling behind.</p>
            </Col>
        </Row>
        </Grid>

        </div>
        )
    }
}

export default Rye;

// (max-width: 800px) 100vw, 1200px