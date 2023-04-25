import React from 'react';
import Bolaji from '../../img/Boalji.jpg';
import John from '../../img/John.jpeg';
import Toun from '../../img/Toun.jpeg';
import flex1 from '../../img/flex1.jpg';
import './recommendation.css';

const Recommendation = () => {

    return (
        <div className='r-wrapper mt-3'>
            <div className='wrapper'>
                <span className=' wrapper fs-3'>Recommendations</span>

            </div>
            <div class="card-group">
                <div class="card border-0 ms-3">
                    <img src={Bolaji} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Bolaji Ajani</h5>
                        <p class="card-text ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Senior Front-End Developer MenaGet</small></p>
                    </div>
                </div>
                <div class="card ms-2 border-0">
                    <img src={flex1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Felix Afolayan</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Mid-Level Frond-End Developer</small></p>
                    </div>
                </div>
                <div class="card ms-2 border-0">
                    <img src={John} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">John Daniels</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Full-Stack Developer Bulb-Africa</small></p>
                    </div>
                </div>
                <div class="card ms-2 border-0">
                    <img src={Toun} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Adetoun Olayemi</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Senior Front-End Developer Credo</small></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Recommendation