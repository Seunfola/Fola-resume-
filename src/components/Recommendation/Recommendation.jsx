import React from 'react';
import Bolaji from '../../img/Boalji.jpg';
import John from '../../img/John.jpeg';
import Toun from '../../img/Toun.jpeg';
import flex1 from '../../img/flex1.jpg';
import './recommendation.css';

const Recommendation = () => {

    return (
        <div className='mt-3 r-wrapper'>
            <div className='wrapper'>
                <span className=' wrapper fs-3'>Recommendations</span>

            </div>
            <div className="card-group">
                <div className="border-0 card ms-3">
                    <img src={Bolaji} className="card-img-top" alt="Bolaji" />
                    <div className="card-body">
                        <h5 className="card-title">Bolaji Ajani</h5>
                        <p className="card-text ">Folahan has a strong understanding of frontend development and has shown an ability to quickly adapt to new technologies and frameworks. He is a dedicated and hardworking team player who consistently delivers high-quality work.  </p>
                        <p className="card-text"><small className="text-muted">Senior Front-End Developer at Giv Energy</small></p>
                        <p><i>fabulousbj@hotmail.com</i></p>
                    </div>
                </div>
                <div className="border-0 card ms-2">
                    <img src={flex1} className="card-img-top" alt="Feliix" />
                    <div className="card-body">
                        <h5 className="card-title">Felix Afolayan</h5>
                        <p className="card-text">The valuable contribution to any project at hand, his passion for frontend development and eagerness to learn makes him an ideal guy I always want to works with. He is an asset to any team. Please do not hesitate to contact me if you require any further information.</p>
                        <p className="card-text"><small className="text-muted">Mid-Level Frond-End Developer at Bet 365</small></p>
                        <span><i>bossfelfo@gmail.com</i></span>
                    </div>
                </div>
                <div className="border-0 card ms-2">
                    <img src={Toun} className="card-img-top" alt="Adetoun" />
                    <div className="card-body">
                        <h5 className="card-title">Adetoun Olayemi</h5>
                        <p className="card-text">In the time that I have had the pleasure of working alongside Fola, I have been consistently impressed with his skills and work ethic.. He never giving up person with strong desire to grow, pays attention to detail and willingness to take on new challenges.</p>
                        <p className="card-text"><small className="text-muted">Senior Front-End Developer at Credo</small></p>

                        <p><i>adetoun@thebulb.africa</i></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Recommendation