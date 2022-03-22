import React from 'react'
import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { Button, Form } from 'react-bootstrap';

const ContactSeller = () => {

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
    }
    return (
      <div className="container">
        <div className="contact-us-contents">
          <div className="leave-a-comment">
            <h3 className="theme-paragraph-title-h3 text-center pt-5 m5 ">Contact Seller</h3>
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
                <button className="btn btn-success contact_submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContactSeller