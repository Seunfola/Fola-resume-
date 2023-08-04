import React from 'react';
import './experience.css';

const Experience = () => {
    return (
        <div className="experience">
            <span>Experience</span>
            <div className='n-wrapper'>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Experience </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Soft Skills</button>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fs-1" id="offcanvasScrollingLabel" style={{ color: 'var(--orange)' }}>Experience</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p className='fs-3 font-weight-bold' style={{ color: 'var(--orange)' }}>
                        Front-End Web Developer
                    </p>
                    <span className='fs-5' style={{ color: 'var(--orange)' }}>
                        The Bulb Africa, Lagos April 2022 - Till-Present
                    </span>
                    <span>
                        <ol className='list mt-5 fs-6' style={{ color: 'var(--orange)' }}>
                            <li> Implemented website, Single web pages, from concepts through deployment.</li>
                            <li> Collaboration with the designers and product team members to improve and implement web
                                applications new features.</li>
                            <li>Daily maintenance and debugging of code base, making use of reusable components where
                                necessary and keeping a dry code always.</li>
                            <li>Standardize all output development with a new responsive, mobile first approach and strategy.</li>
                        </ol>
                        <span className='fs-4'>Achievements:</span>
                        <div style={{ color: 'var(--orange)' }}> Contributed to the opening of company site revamping</div>
                        <div style={{ color: 'var(--orange)' }}> Developed the UI design for a Estate agency Client</div>
                        <div style={{ color: 'var(--orange)' }}> Contributed to the opening discussion about best designs for projects</div>
                        <div style={{ color: 'var(--orange)' }}> Involvements in assessing and brainstorming about designs functionality</div>
                    </span>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fs-1 flex-nowrap" id="offcanvasScrollingLabel" style={{ color: 'var(--orange)' }}>Soft Skills</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className='fs-6' style={{ color: 'var(--orange)' }}>
                        <li>
                            Excellent interpersonal, communication, and teamwork skills</li>
                        <li>Good project management techniques</li>
                        <li>Honest and transparent with a great sense of responsibility </li>
                        <li>Precise numerical, analytical, and presentation skills</li>
                        <li>Expert user of MS word, Excel, and PowerPoint</li>
                        <li>Highly innovative—sees better ways of doing things</li>
                        <li>Teachable—apt to learn with great attention to details</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience