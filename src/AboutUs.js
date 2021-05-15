import {React,Fragment, Component} from 'react'
import mehak from "./images/mehak.jpg"
import Asad from "./images/Asad.jpg"


import First from "./Home"
import Cards from "./Cards";
import {Link} from 'react-router-dom';
import "./css/style.css"



class Record_View extends Component {

    render(){
        return (
            <Fragment>
            
            <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Mehak Dogra</h2>
                            
                            <div class="form-group form-button">
                                THis is Intro section for MEhak Dogra
                            </div>
                    </div>
                    <div class="signup-image">
                        <figure><img src={mehak} alt="sing up image"/></figure>
                    </div>
                </div>
            </div>
        </section>

        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={Asad} alt="sing up image"/></figure>
                        <a href="#" class="signup-image-link">Mohammed Asad Ansari</a>{/* Link to SIgn-up Admin*/}
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Admin Sign In</h2>
                            <div class="form-group">
                                Hey, Its Mohammed Asad Ansari. I am a student of IIIT-Bangalore. Welcome to my corner on the world wide web.

                                My interests are Algorithms, Machine Learning, and Competitive Programming. I love to learn new things and new technologies. I care about building impactful, accecible and inclusive tech for everyone. I care deeply about diversity and inclusion 🖤.
                                Wanna Know more about me visit <a href="https://asadiiitb.github.io/">here</a>
                            </div>
                        
                    </div>
                </div>
            </div>
            </section> 

            
            </Fragment>
        )
    }
}

export default Record_View