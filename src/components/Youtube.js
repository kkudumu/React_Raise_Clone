import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Youtube extends Component {
    render(){
        return(
        <div className="wow fadeInUp" style={{position:'relative', width:'100%', textAlign:'center'}}>
        <Image style={{width:'100%'}} responsive src="https://raiseyouredge.com/wp-content/uploads/2017/10/youtube-section-3.png"/>
        <h2 style={{position:'absolute', top:65, width:'100%', height:'100%'}}>CHECK US OUT ON YOUTUBE</h2>
        <h5 style={{position:'absolute', top:100, width:'100%', height:'100%'}}>INFINITE POKER VALUE AT ZERO COST</h5>
   
        

        </div>
        )
    }
}

export default Youtube;

// (max-width: 800px) 100vw, 1200px