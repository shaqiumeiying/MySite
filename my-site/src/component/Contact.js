import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
// import contact from '../assets/img/contact.png';


export const Contact = () => {
    const formInitialDetails ={
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [details, setDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (key, value) => {
        setDetails({
            ...details,
            [key]: value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(details)
        });
        setButtonText("Send");
        let result = await response.json();
        setDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({
                success: true,
                message: "Email Sent Successfully"
            });
        } else {
            setStatus({
                sucesss: false,
                message: "Failed to send email"
            });
        }

    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={""} alt="Contact Me"/>
                    </Col>
                    <Col md={6}>
                        <h2>Connect with me</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="First Name" value={details.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Last Name" value={details.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" placeholder="Email Address" value={details.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" placeholder="Tel" value={details.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" placeholder="Message" value={details.message} onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.success !== undefined &&
                                    (<Col>
                                    <p className={status.success ? "success" : "danger"}>{status.message}</p>
                                    </Col>)
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>


    )
}