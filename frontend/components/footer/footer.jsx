import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render(){

    return(
      <div className="footer-div">
        <h1 className='legal-text'>
          OfficeBnb Inc. All Rights Reserved 2017
        </h1>
        <div className='footer-links'>
          <a href='https://github.com/harvey93/AirBnb'
            target='_tab'><i className="fa fa-github-square" aria-hidden="true"></i></a>
          <a href='https://www.linkedin.com/in/harvey-mirijanyan-79a133ba'
            target='_tab'>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

export default Footer;
