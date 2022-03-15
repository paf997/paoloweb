import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import axios from "axios";
import useForm  from './useForm';

function Home (props) {

    const {handleChange, values} = useForm();
    const [color_mode, set_color_mode] = useState(true);
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
        console.log("hello " + values.name + " " + values.email);
        /*await postSubmission();*/
    };

    const switch_color_modes = () => {
      set_color_mode((prev => !prev));
      console.log("Mode" + color_mode);
    };
    return(
    <div className={color_mode ? "dark":"light"}>
        <Header></Header>
        <div className="welcome">
            <p className="ciao">Ciao</p>
            <p className="myname">My Name Is Paolo A Fenu </p>
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