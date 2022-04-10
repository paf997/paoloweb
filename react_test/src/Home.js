import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import axios from "axios";
import useForm  from './useForm';
import beachPic from './beach_graffiti_alghero.jpeg';
import dymaco from './dymaco-card-pic.png';

function Home (props) {

    const {handleChange, values} = useForm();
    const [color_mode, set_color_mode] = useState(false);
    const postSubmission = async() =>{
        const payload = {
            name:values.name,
            email:values.email,
            msg:values.msg
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

    const submit = async(event) =>{
        event.preventDefault();
        /*await postSubmission();*/
    };

    const switch_color_modes = () => {
      set_color_mode((prev => !prev));
      console.log("color mode!!!");
    };

    return(
    <div className={color_mode ? "dark":"light"}>
        <Header></Header>
        {/*<button className="color-mode" onClick={switch_color_modes}></button>*/}
        <div className="top">
            <img class="beach-photo" alt="beach-altered" src={beachPic}/>
            <p className="ciao">Ciao</p>
            <p className="myname">I am</p>
            <p className="thanks">Paolo</p>
            <div id="about">
                <p className="about-1">I am a Progammer and Web Developer</p>
                <p className="about-2 blue_bgc_white_txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
        </div>

        <div id="previous_work">
            <div className="banner blue_bgc_white_txt">
                <div className="welcome white_text"> Previous Work</div>
                <div className="card_div">
                    <Card text={"Dymaco"}
                        details={"Programed the entire website and created WP theme. Used HTML, CSS, Javascript and PHP"}
                        link={"https://www.dymaco.ca/"}
                        bg_image={dymaco}>
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
             </div>
        </div>
        {/*<div className="temp">underdevelopment</div>*/}
        <div id="contact">
            <div className="welcome">Contact Me
                <form className="form" onSubmit={submit}>
                    <input className="name"
                        type='text'
                        placeholder="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    ></input>

                    <input className="email"
                        type='email'
                        placeholder="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    ></input>

                    <textarea className="msg"
                        placeholder="message"
                        name="msg"
                        value={values.msg}
                        onChange={handleChange}
                    ></textarea>

                    <button className="submit">submit</button>
                </form>
            </div>
        </div>
        <Footer></Footer>
      </div>
    )
}

export default Home;