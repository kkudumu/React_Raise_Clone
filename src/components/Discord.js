import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

class Discord extends Component {
    render(){
        return(
        <div>
        <Grid fluid style={{backgroundColor:'#0c0c0d'}}>
        <Row>
            <Col style={{minHeight:364.437, justifyContent:'center', textAlign:'center', padding:'11%'}} xs>
            <img style={{maxHeight:500, maxWidth:250}} src="https://raiseyouredge.com/wp-content/uploads/2017/10/Discord-LogoWordmark-Color.svg" alt="leftdisc" />
            <p style={{color:'white', fontSize:19}}>Join our growing Poker community, dedicated to improvement. We have channels for everything. From poker to life improvement, investing and even the best tv series. Joining is free and the value is priceless.</p>
            </Col>
            <Col style={{minHeight:471, height:'auto'}} xs>
            <img style={{maxHeight:500}} src="https://raiseyouredge.com/wp-content/uploads/2017/10/Discord-Chat-Image-2.png" alt="rightdisc" />
            </Col>
        </Row>
        </Grid>

        </div>
        )
    }
}

export default Discord;

// (max-width: 800px) 100vw, 1200px