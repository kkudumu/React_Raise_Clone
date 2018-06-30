import React, { Component } from 'react';
import { Card } from 'antd';


const { Meta } = Card;

class CrushPoker extends Component {
    render(){
        return(
    <div>
<section id="about" className="section-bg">
      <div className="container-fluid">
        <div className="section-header">
          <h3 className="section-title">CRUSH POKER WITH US</h3>
          <span className="section-divider" />
          <p className="section-description">
            THE FUTURE OF LEARNING IS HERE
          </p>
        </div>
        <div className="row" style={{marginLeft:100}}>
        {/*Left Animated Side*/}
          <div className="col-sm-3 about-img wow fadeInLeft">
          <Card
            hoverable
            style={{ maxWidth: 212, maxHeight:330 }}
            cover={<img alt="example" src="https://raiseyouredge.com/wp-content/uploads/2017/04/tmc-212x300.png" />}
        >
            <Meta
          
            title="The Tournament Masterclass"
            
            />
        </Card>
          </div>
          <div className="col-sm-3 about-img wow fadeInLeft">
          <Card
            hoverable
            style={{ maxWidth: 212, maxHeight:330 }}
            cover={<img alt="example" src="https://raiseyouredge.com/wp-content/uploads/2018/05/Kopie-von-Kopie-von-Kopie-von-START-WINNING-4.png" />}
        >
            <Meta
            
            title="Bounty Beast - The Craft of Knockouts"
           
            />
        </Card>
          </div>
          
          {/*Right Animated Side*/}
          <div className="col-sm-3 about-img wow fadeInRight">
          <Card
            hoverable
            style={{ maxWidth: 212, maxHeight:330 }}
            cover={<img alt="example" src="https://raiseyouredge.com/wp-content/uploads/2017/04/sng-212x300.png" />}
        >
            <Meta
            title="Crush 6 Max Hyper SNGs"
        
            />
        </Card>
          </div>
          <div className="col-sm-3 about-img wow fadeInRight">
          <Card
            hoverable
            style={{ maxWidth: 212, maxHeight:330 }}
            cover={<img alt="example" src="https://raiseyouredge.com/wp-content/uploads/2017/04/cash-212x300.png" />}
        >
            <Meta
            title="Elementary Cash Game"
            
            />
        </Card>
          </div>
        </div>
      </div>
    </section>
    </div>
        
        )
    }
}

export default CrushPoker;