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
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactSeller