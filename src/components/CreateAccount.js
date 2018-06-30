import React, { Component } from 'react';
import { Parallax } from 'react-parallax';


class CreateAccount extends Component {
    render(){
        return(
        <div style={{backgroundColor:'transparent', textAlign:'center', minHeight:'525px'}}>
         <Parallax
            blur={2}
            bgImage={require('../assets/happyguy.png')}
            bgImageAlt="pokerplayer"
            strength={200}
            bgStyle={{backgroundColor:'black'}}
            
    >
        <h2 style={{color:'white'}}>CREATE A FREE ACCOUNT</h2>
        <h5 style={{color:'white'}}>START A POKER BLOG AND DOCUMENT YOUR JOURNEY UP THE STAKES</h5>
        <div style={{ height: 525 }} />
        </Parallax>
        </div>
        )
    }
}

export default CreateAccount;

// (max-width: 800px) 100vw, 1200px