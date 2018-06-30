import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LanderImage from './components/LanderImage';
import CrushPoker from './components/CrushPoker';
import ProsThink from './components/ProsThink';
import Discord from './components/Discord';
import CreateAccount from './components/CreateAccount';
import Rye from './components/Rye';
import Youtube from './components/Youtube';
import GetSocial from './components/GetSocial';
import Masterclass from './components/Masterclass';



class App extends Component {
  render() {
    return (
  <div>
  <Header/>
  <LanderImage/>
  <main id="main">
  <CrushPoker/>
  <ProsThink/>
  <Discord/>
  <CreateAccount/>
  <Rye/>
  <Youtube/>
  <GetSocial/>
  <Masterclass/>

    <section id="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3 className="cta-title">Call To Action</h3>
            <p className="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="/">Call To Action</a>
          </div>
        </div>
      </div>
    </section>
    <section id="more-features" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">More Features</h3>
          <span className="section-divider" />
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="box wow fadeInLeft">
              <div className="icon"><i className="ion-ios-stopwatch-outline" /></div>
              <h4 className="title"><a href>Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box wow fadeInRight">
              <div className="icon"><i className="ion-ios-bookmarks-outline" /></div>
              <h4 className="title"><a href>Dolor Sitema</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box wow fadeInLeft">
              <div className="icon"><i className="ion-ios-heart-outline" /></div>
              <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box wow fadeInRight">
              <div className="icon"><i className="ion-ios-analytics-outline" /></div>
              <h4 className="title"><a href>Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="clients">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-md-2">
            <img src="img/clients/client-1.png" alt="/" />
          </div>
          <div className="col-md-2">
            <img src="img/clients/client-2.png" alt="/" />
          </div>
          <div className="col-md-2">
            <img src="img/clients/client-3.png" alt="/" />
          </div>
          <div className="col-md-2">
            <img src="img/clients/client-4.png" alt="/" />
          </div>
          <div className="col-md-2">
            <img src="img/clients/client-5.png" alt="/" />
          </div>
          <div className="col-md-2">
            <img src="img/clients/client-6.png" alt="/" />
          </div>
        </div>
      </div>
    </section>
    <section id="pricing" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Pricing</h3>
          <span className="section-divider" />
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="box wow fadeInLeft">
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> month</span></h4>
              <ul>
                <li><i className="ion-android-checkmark-circle" /> Quam adipiscing vitae proin</li>
                <li><i className="ion-android-checkmark-circle" /> Nec feugiat nisl pretium</li>
                <li><i className="ion-android-checkmark-circle" /> Nulla at volutpat diam uteera</li>
                <li><i className="ion-android-checkmark-circle" /> Pharetra massa massa ultricies</li>
                <li><i className="ion-android-checkmark-circle" /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="/" className="get-started-btn">Get Started</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="box featured wow fadeInUp">
              <h3>Business</h3>
              <h4><sup>$</sup>29<span> month</span></h4>
              <ul>
                <li><i className="ion-android-checkmark-circle" /> Quam adipiscing vitae proin</li>
                <li><i className="ion-android-checkmark-circle" /> Nec feugiat nisl pretium</li>
                <li><i className="ion-android-checkmark-circle" /> Nulla at volutpat diam uteera</li>
                <li><i className="ion-android-checkmark-circle" /> Pharetra massa massa ultricies</li>
                <li><i className="ion-android-checkmark-circle" /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="/" className="get-started-btn">Get Started</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="box wow fadeInRight">
              <h3>Developer</h3>
              <h4><sup>$</sup>49<span> month</span></h4>
              <ul>
                <li><i className="ion-android-checkmark-circle" /> Quam adipiscing vitae proin</li>
                <li><i className="ion-android-checkmark-circle" /> Nec feugiat nisl pretium</li>
                <li><i className="ion-android-checkmark-circle" /> Nulla at volutpat diam uteera</li>
                <li><i className="ion-android-checkmark-circle" /> Pharetra massa massa ultricies</li>
                <li><i className="ion-android-checkmark-circle" /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="/" className="get-started-btn">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="faq">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Frequently Asked Questions</h3>
          <span className="section-divider" />
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <ul id="faq-list" className="wow fadeInUp">
          <li>
            <a data-toggle="collapse" className="collapsed" href="/faq1">Non consectetur a erat nam at lectus urna duis? <i className="ion-android-remove" /></a>
            <div id="faq1" className="collapse" data-parent="/faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="/faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="ion-android-remove" /></a>
            <div id="faq2" className="collapse" data-parent="/faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="/faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="ion-android-remove" /></a>
            <div id="faq3" className="collapse" data-parent="/faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="/faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="ion-android-remove" /></a>
            <div id="faq4" className="collapse" data-parent="/faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="/faq5" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="ion-android-remove" /></a>
            <div id="faq5" className="collapse" data-parent="/faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="/faq6" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="ion-android-remove" /></a>
            <div id="faq6" className="collapse" data-parent="/faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="team" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Our Team</h3>
          <span className="section-divider" />
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row wow fadeInUp">
          <div className="col-lg-3 col-md-6">
            <div className="member">
              <div className="pic"><img src="img/team/team-1.jpg" alt="/" /></div>
              <h4>Walt="/"er White</h4>
              <span>Chief Executive Officer</span>
              <div className="social">
                <a href><i className="fa fa-twitter" /></a>
                <a href><i className="fa fa-facebook" /></a>
                <a href><i className="fa fa-google-plus" /></a>
                <a href><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="member">
              <div className="pic"><img src="img/team/team-2.jpg" alt="/" /></div>
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <div className="social">
                <a href><i className="fa fa-twitter" /></a>
                <a href><i className="fa fa-facebook" /></a>
                <a href><i className="fa fa-google-plus" /></a>
                <a href><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="member">
              <div className="pic"><img src="img/team/team-3.jpg" alt="/" /></div>
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div className="social">
                <a href><i className="fa fa-twitter" /></a>
                <a href><i className="fa fa-facebook" /></a>
                <a href><i className="fa fa-google-plus" /></a>
                <a href><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="member">
              <div className="pic"><img src="img/team/team-4.jpg" alt="/" /></div>
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div className="social">
                <a href><i className="fa fa-twitter" /></a>
                <a href><i className="fa fa-facebook" /></a>
                <a href><i className="fa fa-google-plus" /></a>
                <a href><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="gallery">
      <div className="container-fluid">
        <div className="section-header">
          <h3 className="section-title">Gallery</h3>
          <span className="section-divider" />
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item wow fadeInUp">
              <a href="img/gallery/gallery-1.jpg" className="gallery-popup">
                <img src="img/gallery/gallery-1.jpg" alt="/" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item wow fadeInUp">
              <a href="img/gallery/gallery-2.jpg" className="gallery-popup">
                <img src="img/gallery/gallery-2.jpg" alt="/" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item wow fadeInUp">
              <a href="img/gallery/gallery-3.jpg" className="gallery-popup">
                <img src="img/gallery/gallery-3.jpg" alt="/" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item wow fadeInUp">
              <a href="img/gallery/gallery-4.jpg" className="gallery-popup">
                <img src="img/gallery/gallery-4.jpg" alt="/" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item wow fadeInUp">
              <a href="img/gallery/gallery-5.jpg" className="gallery-popup">
                <img src="img/gallery/gallery-5.jpg" alt="/" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item wow fadeInUp">
              <a href="img/gallery/gallery-6.jpg" className="gallery-popup">
                <img src="img/gallery/gallery-6.jpg" alt="/" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-lg-4 col-md-4">
            <div className="contact-about">
              <h3>Avilon</h3>
              <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              <div className="social-links">
                <a href="/" className="twitter"><i className="fa fa-twitter" /></a>
                <a href="/" className="facebook"><i className="fa fa-facebook" /></a>
                <a href="/" className="instagram"><i className="fa fa-instagram" /></a>
                <a href="/" className="google-plus"><i className="fa fa-google-plus" /></a>
                <a href="/" className="linkedin"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="info">
              <div>
                <i className="ion-ios-location-outline" />
                <p>A108 Adam Street<br />New York, NY 535022</p>
              </div>
              <div>
                <i className="ion-ios-email-outline" />
                <p>info@example.com</p>
              </div>
              <div>
                <i className="ion-ios-telephone-outline" />
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-8">
            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage" />
              <form action method="post" className="contactForm">
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation" />
                  </div>
                  <div className="form-group col-lg-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validation" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validation" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                  <div className="validation" />
                </div>
                <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright">
            © Copyright <strong>Avilon</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="/intro" className="scrollto">Home</a>
            <a href="/about" className="scrollto">About</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
  <a href="/" className="back-to-top"><i className="fa fa-chevron-up" /></a>
</div>

    );
  }
}

export default App;
