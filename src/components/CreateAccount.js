import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Button } from 'reactstrap';


class CreateAccount extends Component {
    render(){
        return(
        <div style={{backgroundColor:'transparent', textAlign:'center', minHeight:'525px'}}>
         <Parallax
            blur={2}
            bgImage={require('../assets/happyguy.png')}
            bgImageAlt="pokerplayer"
            strength={200}
            bgStyle={{}}
            bgHeight={'auto'}
            
    >
        <div style={{ height: 425 }} />
   
        <div style={{position:'relative', bottom:250}}>
        <h2 data-inline-fontsize="true" data-inline-lineheight="true" data-fontsize="35" data-lineheight="39" style={{color:'white', textAlign:'center', fontSize:36.239, lineHeight:1, fontFamily:'Roboto'}}>CREATE A FREE ACCOUNT</h2>
        <h5 style={{color:'white', letterSpacing:'4px', fontFamily:'Roboto',marginBottom:'44px'}}>START A POKER BLOG AND DOCUMENT YOUR JOURNEY UP THE STAKES</h5>
        <Button style={{backgroundColor:'rgb(255,152,0)', fontSize:'17px', lineHeight:'17px', fontWeight:400, fontFamily:'Source Sans Pro', padding: '20px 35px', boxSizing:'border-box', color:'black', border:'3px solid black'}}>GET STARTED</Button>
        </div>
        
        
        </Parallax>
        </div>
        )
    }
}

export default CreateAccount;

// (max-width: 800px) 100vw, 1200px

<h2 style="text-align: center; font-size: 36.239px; line-height: 39.863px;" >CREATE A FREE ACCOUNT</h2>