import React, { useState, useEffect } from 'react';
import './App.css';

function Header(props) {

    return(
      <header className="header">
        <div className="header_links">
          <a href="http://localhost:3000/#previous_work">my_work()</a>
          <a href="https://docs.google.com/document/d/1w_tLtpewcCtmsDi7QdWw3OTDlSoLP_HM/edit?usp=sharing&ouid=118314119832464886972&rtpof=true&sd=true">my_resume()</a>
          <a href="http://localhost:3000/#contact">contact_me()</a>
        </div>
      </header>
    )
}

export default Header;