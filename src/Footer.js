import React, { useState } from 'react';
import './App.css';

function Footer(props) {

    return(
      <header className={"footer"}>
          <a href="http://localhost:3000/#previous_work">my_work()</a>
          <a href="https://docs.google.com/document/d/1w_tLtpewcCtmsDi7QdWw3OTDlSoLP_HM/edit?usp=sharing&ouid=118314119832464886972&rtpof=true&sd=true">my_resume()</a>
          <a href="http://localhost:3000/#contact">contact_me()</a>
      </header>
    )
}

export default Footer;