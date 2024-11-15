import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import cheader from '../assets/img/contact header.png';
import csent from '../assets/img/contact sent.png';
import envelope from '../assets/img/envolope.gif';
import sent from '../assets/img/sent.png';
import bling from '../assets/bling.mp3';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

// user id:QwTz8yuzrU6f7pJTA
// template id: template_43oreur
// service id: service_brauvm5

const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
};

export const Contact = () => {
    const [details, setDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [soundPlayed, setSoundPlayed] = useState(false);

    useEffect(() => {
        if (formSubmitted && !soundPlayed) { 
            const audio = new Audio(bling);
            audio.play();
            setSoundPlayed(true);
        }
    }, [formSubmitted, soundPlayed]);

    const onFormUpdate = (key, value) => {
        setDetails({
            ...details,
            [key]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!details.email) {
            setStatus({
                success: false,
                message: "Cannot send, an email address is required!"
            });
            return;
        }

        setButtonText("Sending...");
        try {
            const result = await emailjs.send(
                'service_brauvm5', 
                'template_43oreur', 
                {
                    from_name: details.firstName + " " + details.lastName,
                    to_name: "Diana",
                    from_email: details.email,
                    to_email: "shaqiumeiying@gmail.com",
                    phone: details.phone,
                    message: details.message,
                }, 
                'QwTz8yuzrU6f7pJTA'); 

            if (result.status === 200) {
                setStatus({
                    success: true,
                    message: "Email Sent Successfully"
                });
                setFormSubmitted(true);
            } else {
                setStatus({
                    success: false,
                    message: "Failed to send email"
                });
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus({
                success: false,
                message: "Failed to send email"
            });
        } finally {
            setButtonText("Send");
            setDetails(formInitialDetails);
        }
    };

    return (
        <TrackVisibility partialVisibility once>
            {({ isVisible }) => (
                <div className={`${isVisible ? "animate__animated animate__fadeInUp" : "hidden"}`}>
                    <div className="contact-image-container">
                        <img src={formSubmitted ? csent : cheader} alt="Contact Me" className={`contact-image ${formSubmitted ? "animate__animated animate__fadeIn" : ""}`} />
                    </div>
                    <section className="contact" id="connect">
                        <Container>
                            <Row className="align-items-center">
                                {formSubmitted ? (
                                    <Col md={12} className={formSubmitted ? "animate__animated animate__fadeIn" : ""}>
                                        <img src={sent} alt="" style={{ width: '200px', height: 'auto' }} />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <p><strong>Message received!</strong></p>
                                        <br />
                                        <p><strong>I'll get back to you asap, thanks :)</strong></p>
                                    </Col>
                                ) : (
                                    <>
                                        <Col md={6}>
                                            <img src={envelope} alt="envelope.gif" />
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
                                                    <Col sm={12} className="px-1">
                                                        <textarea rows="2" placeholder="Message" value={details.message} onChange={(e) => onFormUpdate('message', e.target.value)} />
                                                    </Col>
                                                    <Col>
                                                        <button type="submit" style={{ alignItems: 'center' }}><span>{buttonText}</span></button>
                                                        {status.success !== undefined && (
                                                            <p className={status.success ? "success" : "danger"}>{status.message}</p>
                                                        )}
                                                    </Col>
                                                </Row>
                                            </form>
                                        </Col>
                                    </>
                                )}
                            </Row>
                        </Container>
                    </section>
                </div>
            )}
        </TrackVisibility>
    );
};
