import React from 'react';
import { useRef } from 'react';
import Footer from '../components/footer/Footer';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import {toast} from 'react-toastify'

import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3zgbs9b",
        "template_c0q60aa",
        form.current,
        "user_ioCCPj5788w13VpSQ7Yp1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
    toast.success('Message has been sent thanks for reaching out. You will be contacted shortly')
    
  };

  return (
    <div>
      <section className="contact-us ">
        <div>
          <h1 className="h1">
            Contact <span>Us </span> <BsFillTelephoneOutboundFill />
          </h1>
          <img className="contact_img" src="../images/about-us.jpg" />
        </div>

        <div className="container pt-5 ">
          <div className="contact-us-layout">
            <div className="contact-us-contents">
              <div className="leave-a-comment">
                <h3 className="theme-paragraph-title-h3">Send Us a Message</h3>
                <div className="single-blog-comment-form">
                  <form
                    action=""
                    method="POST"
                    className="contact-us-form"
                    onSubmit={sendEmail}
                    ref={form}
                  >
                    <input
                      type="text"
                      placeholder="Name (Required)"
                      id="id_name"
                      name="name"
                    />
                    <input
                      type="email"
                      placeholder="Email (Required)"
                      id="id_email"
                      name="email"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      id="id_subject"
                      name="subject"
                    />
                    <textarea
                      cols="25"
                      rows="10"
                      id="id_message"
                      name="message"
                    ></textarea>
                    <button className="btn btn-success contact_submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="contact-us-sidebar">
           
            
                    <h3 className="theme-paragraph-title-h3">Our Address</h3>
                
                    <div className="contact-us-address-contents">
                      <p className="contact-us-company-address">
                        <span>
                          <i className="fas fa-map-marker"></i>
                        </span>
                        {""}
                      </p>
                      Chiba-Ken Nodashi Kimagase 2720-1
                      <p className="contact-us-company-address"></p>
                      <p className="contact-us-company-address contact-us-phone">
                       
                          <i className="fas fa-phone"></i>
                       
                        +8170-1782-1131
                      </p>
                      <p className="contact-us-company-address">
                        <span>
                          <i className="far fa-envelope"></i>
                        </span>{" "}
                        jcrossmd14@gamil.com
                      </p>
                    </div>
                 
                  
                    Help Us by Sharing
                 
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f c_icon"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter c_icon"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g c_icon"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                
             
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
