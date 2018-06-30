import React, { Component } from 'react';



class LanderImage extends Component {
    render(){
        return(
        <div>
            <section id="intro">
            
                <div className="intro-text">
                {/*TODO: Animate Words, Shorten section, Add picture of bencb in hoodie, add react button and maybe react text, orange coloring*/}
                    <h2>TAKE YOUR GAME TO THE NEXT LEVEL</h2>
                    <p>Motivation determines what you will do</p>
                    <p>Attitude determines how far you will go</p>
                    <a href="/about" className="btn-get-started scrollto">Enroll Now</a>
                    </div>
            </section>
        </div>
        )
    }
}

export default LanderImage;