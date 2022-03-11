import React, { useState, useEffect } from 'react';
import './App.css';

function Header(props) {

    return(
      <header className={"header"}>
        <a href="http://localhost:3000/#card_div">my_work()</a>
        <a href="https://docs.google.com/document/d/1PPsxCbuu3FZbL6a1WiCNogNH-9vhP5HBu5BIyeYd0ao/edit?usp=sharing">my_resume()</a>
        <a href="#">contact_me()</a>
      </header>
    )
}

export default Header;