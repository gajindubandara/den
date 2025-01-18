import React, { FormEvent, useState } from 'react';
import { Mail, MapPin, Phone, Send} from "lucide-react";
// import Swal from 'sweetalert2';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        //
        // const scriptURL = 'https://script.google.com/macros/s/AKfycbyxOPeXddcdIq3bPpBjN2-Ex1Qu2iwqihmPDiW16haBIN2SxKwHlnscLLVar0xxxPpM6A/exec';
        //
        // const payload = {
        //     ...formData,
        //     phone: formData.phone || 'Not Provided',
        // };
        //
        // try {
        //     await fetch(scriptURL, {
        //         method: 'POST',
        //         mode: 'no-cors',
        //         body: JSON.stringify(payload),
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     });
        //
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Message Sent Successfully!',
        //         text: 'Thank you for reaching out. We will get back to you soon.',
        //         timer: 3000,
        //         timerProgressBar: true,
        //         showConfirmButton: false,
        //         background: '#121212',
        //         color: '#ffffff',
        //         customClass: {
        //             popup: 'custom-swal-popup',
        //         },
        //     });
        //
        //     setFormData({ name: '', phone: '', email: '', message: '' });
        //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // } catch (error) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Submission Failed!',
        //         text: 'There was an error sending your message. Please try again later.',
        //         timer: 3000,
        //         timerProgressBar: true,
        //         showConfirmButton: false,
        //         background: '#121212',
        //         color: '#ffffff',
        //         customClass: {
        //             popup: 'custom-swal-popup',
        //         },
        //     });
        // } finally {
        //     setIsSubmitting(false);
        // }
    };

    return (
        <section className="contact-section py-5 bg-light" id="contact">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5" data-aos="fade-right">
                    <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
                </div>

                {/* Preloader */}
                {isSubmitting && (
                    <div id="preloader" className="d-flex justify-content-center mb-4">
                        <img
                            id="preloader-logo"
                            src="https://res.cloudinary.com/dkznriytt/image/upload/f_auto,q_auto/v1/g2-site/zjgue0tgbm3rj5ihdbyz"
                            alt="Loading Logo"
                            style={{ width: "80px", height: "80px" }}
                        />
                    </div>
                )}
                {/* Contact Info Icons */}
                <div className="row mb-5 g-4" data-aos="fade-up">
                    <div className="col-md-4">
                        <div className="text-center contact-info">
                            <div className="d-flex justify-content-center mb-3">
                                <MapPin className="info-icon" size={48} color="rgb(25, 135, 84)" />
                            </div>
                            <h5 className="fw-bold">Our Address</h5>
                            <p className="mb-0">415 Mission St</p>
                            <p>San Francisco, CA 94105</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center contact-info">
                            <div className="d-flex justify-content-center mb-3">
                                <Phone className="info-icon" size={48} color="rgb(25, 135, 84)" />
                            </div>
                            <h5 className="fw-bold">Phone Number</h5>
                            <p className="mb-0">(555) 123-4567</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center contact-info">
                            <div className="d-flex justify-content-center mb-3">
                                <Mail className="info-icon" size={48} color="rgb(25, 135, 84)" />
                            </div>
                            <h5 className="fw-bold">Email Address</h5>
                            <p className="mb-0">contact@example.com</p>
                        </div>
                    </div>
                </div>

                {/* Form and Map Layout */}
                <div className="row g-4">
                    {/* Contact Form */}
                    <div className="col-lg-6" data-aos="fade-up">
                        <form className="contact-form p-4 rounded shadow-lg bg-white" onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label text-success">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label text-success">Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label text-success">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="message" className="form-label text-success">Your Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="den-btn w-100">
                                        <span className="btn-content">
                                            <Send  className="camera-icon" size={24}/>
                                            <span className="btn-text">{isSubmitting ? "Sending..." : "Send Message"}</span>
                                        </span>
                                        <span className="btn-particles"></span>
                                    </button>
                                    {/*<button*/}
                                    {/*    type="submit"*/}
                                    {/*    className="btn btn-success btn-lg w-100"*/}
                                    {/*    disabled={isSubmitting}*/}
                                    {/*>*/}
                                    {/*    {isSubmitting ? "Sending..." : "Send Message"}*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Google Map */}
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="map-container rounded shadow-lg">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.917482539084!2d-122.40111108468159!3d37.79110997975715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b5c5e8f5%3A0x8d3bcb930d6d1e05!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1615174193745!5m2!1sen!2sus"
                                width="100%"
                                height="444"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};


export default ContactSection;