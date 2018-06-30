import React, { Component } from 'react';
import { Parallax } from 'react-parallax';



class LanderImage extends Component {
    render(){
        return(
        <div style={{paddingTop:100}}>
    <div style={{backgroundColor:'transparent', textAlign:'center', minHeight:'425px'}}>
         <Parallax
            
            bgImage={require('../assets/maincover.png')}
            bgImageAlt="pokerplayer"
            strength={200}
            bgStyle={{backgroundColor:'black'}}
            
    >
   
    <h2 style={{color:'white'}}>TAKE YOUR GAME TO THE NEXT LEVEL</h2>
    <p style={{color:'white'}}>Motivation determines what you will do</p>
    <p style={{color:'white'}}>Attitude determines how far you will go</p>
    
        <div style={{ height: 525 }} />
        </Parallax>
        </div>



        </div>
        )
    }
}

export default LanderImage;

// <div class="rs-background-video-layer defaultvid HasListener videoisplaying" data-forcerewind="on" data-volume="mute" data-videowidth="100%" data-videoheight="100%" data-videomp4="https://raiseyouredge.com/wp-content/uploads/2018/03/ryehood.mp4" data-videopreload="auto" data-videoloop="loopandnoslidestop" data-aspectratio="16:9" data-autoplay="true" data-autoplayonlyfirsttime="false" style="z-index: 30; backface-visibility: hidden; left: 0px; top: 0px; position: absolute; transform: translate3d(0px, 0px, 0px); visibility: inherit; opacity: 1;"><div class="html5vid fullcoveredvideo" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"><video style="object-fit: cover; background-size: cover; width: 100%; height: 106.312%; visibility: inherit; opacity: 1; display: block; position: absolute; left: 0px; top: -3.15585%;" class="resizelistener" loop="" preload="auto"><source src="https://raiseyouredge.com/wp-content/uploads/2018/03/ryehood.mp4" type="video/mp4"></video></div><div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div><div class="rs-fullvideo-cover"></div></div>

// <!--Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="https://raiseyouredge.com/wp-content/uploads/2018/03/maincover.png" alt="" title="maincover" width="1365" height="720" data-bgposition="center center" data-bgfit="cover" data-bgparallax="15" class="rev-slidebg defaultimg" data-no-retina="">-->



// <section>
// <div className="intro-text">
// {/*TODO: Animate Words, Shorten section, Add picture of bencb in hoodie, add react button and maybe react text, orange coloring*/}
//     <h2>TAKE YOUR GAME TO THE NEXT LEVEL</h2>
//     <p>Motivation determines what you will do</p>
//     <p>Attitude determines how far you will go</p>
//     <a href="/about" className="btn-get-started scrollto">Enroll Now</a>
//     </div>
// </section>