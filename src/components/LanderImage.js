import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Button } from 'reactstrap';
import { Wave, Random } from 'react-animated-text';


class LanderImage extends Component {
    render(){
        return(
        <div style={{paddingTop:100}}>
        <div style={{backgroundColor:'transparent', textAlign:'center', minHeight:'425px'}}>
         <Parallax
            bgImage={require('../assets/maincover.png')}
            bgImageAlt="pokerplayer"
            strength={200}
    >
    <div style={{ height:555, display:'flex', backgroundSize:'cover'}} />


   
   <div style={{position:'relative', bottom:235, justifyContent:'center', textShadow: '2px 2px black' }}>
    <p style={{wordSpacing:'1px', color:'white', fontSize:47, fontWeight:400, lineHeight:'90px', zIndex:8, letterSpacing:'1px', fontFamily:'Anton'}}><Wave
      text="TAKE YOUR GAME TO THE NEXT LEVEL"
      effect="verticalFadeIn"
      effectDirection="right"
      effectChange={2.0}
      speed={25}
      effectDuration={0.8}
      iterations={1}
    /></p>
    <p style={{color:'white', fontSize:'22px', lineHeight:'21px', fontWeight:300, fontFamily:'Open Sans'}}><Wave
      text="Motivation determines what you will do"
      effect="verticalFadeIn"
      effectDirection="right"
      effectChange={2.0}
      speed={25}
      effectDuration={4}
      iterations={1}
      delay={1}
    />
    
    </p>
    <p style={{color:'white', fontSize:'22px', lineHeight:'21px', fontWeight:300, fontFamily:'Open Sans'}}>
    <Wave
      text="Attitude determines how far you will go"
      effect="verticalFadeIn"
      effectDirection="right"
      effectChange={2.0}
      speed={20}
      effectDuration={4}
      iterations={1}
      delay={100}
    />
    </p>
    <Button style={{backgroundColor:'rgb(255,152,0)', fontSize:'17px', lineHeight:'17px', fontWeight:400, fontFamily:'Source Sans Pro', padding: '12px 35px', boxSizing:'border-box', position:'relative',  top:10}}>ENROLL NOW</Button>

    </div>
        </Parallax>
        </div>

        </div>
        )
    }
}

export default LanderImage;

