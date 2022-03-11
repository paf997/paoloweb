import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import axios from "axios";

type form_state = {
    name:String;
    email:String;
    message:String;
}

function Home (props) {

    const [color_mode, set_color_mode] = useState(true);
    const [form_state, use_form_state] = useState();
    const submit = async(event:FormEvent) =>{
        event.preventDefault();
        await postSubmission();
    };

    const postSubmission = async() =>{
        const payload = {
            message:"form spark submission",
        }

        try{
            const result = await axios.post(formSparkURL, payload);
            console.log(result);
        }catch(error){
            console.log(error);

        }
    };

    const formID = "lx11Nz0L";
    const formSparkURL = `https://submit-form.com/${formID}`;

    const switch_color_modes = () => {
      set_color_mode((prev => !prev));
      console.log("Mode" + color_mode);
    };
    return(
    <div className={color_mode ? "dark":"light"}>
        <Header></Header>
        <div className="welcome">
            <p className="ciao">Ciao</p>
            <p className="name">My Name Is Paolo A Fenu </p>
            <p className="thanks">Thanks For Visiting</p>
        </div>
        <div id="card_div">
            <Card text={"Dymaco"}
                details={"Programed the entire website and created WP theme. Used HTML, CSS, Javascript and PHP"}
                link={"https://www.dymaco.ca/"}>
            </Card>
            <Card text={"OCS"}
                details={"Contributed a number of components including header, footer and animated block on home page. Used HTML, CSS, PHP, and Flynt"}           
                link={"https://ottawachoralsociety.com/"}>
                </Card>
            <Card text={"Ritorenllo"}
                details={"Programmed majority of website. Used HTML, CSS, PHP and Flynt"}
                link={"https://ritornello.ca/"}>
             </Card>
        </div>
        <div className="welcome">Contact Me
            <form onSubmit={submit}>
                <button>Submit</button>
            </form>
        </div>
        <Footer></Footer>
      </div>
    )
}

export default Home;