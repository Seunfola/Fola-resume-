import React from 'react'

import './experience.css'

const Experience = () => {
  return (
    <div className="experience">
        <span>Experience</span>
        <div className='e-wrapper'>
      <button className="btn btn-primary me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Experience</button>
      <button className="btn btn-primary me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="#offcanvasScrolling">Education</button>
      
      </div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
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
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fs-1" id="offcanvasScrollingLabel" style={{ color: 'var(--orange)' }}>Educational Background</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body fs-5" style={{ color: 'var(--orange)' }}>
          <p className='fs-5'><b>B Eng.,Mining Engineering,</b>
            <br /> Federal University of Technology, Akure 2011 – 2017</p>
          <span className='fs-6'>Courses Completed Include:
            <ul className='mt-3 mb-5'>
              <li>Computer science</li>
              <li>Engineering Mathematics</li>
              <li>Statistics</li>
              <li>Electrical Electronics Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Use of English</li>
            </ul>

          </span>

          <p className='fs-5 mt-3 mb-5'><b>SSCE,</b>
            <br />  Oladipo Alayande School of Science (oke-Bola,Ibadan) 2007 – 2010</p>
          <p className='fs-5'><b>JSCE,</b>
            <br />  Oke-Ado High School (oke-Ado,Ibadan) 2004 – 2007</p>
        </div>
      </div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
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
  );
}

export default Experience
