import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.firstName) errors.firstName = 'First Name is required';
        if (!formData.lastName) errors.lastName = 'Last Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Form is valid, handle submission
            setIsSubmitted(true);
            console.log('Form submitted:', formData);
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            });
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-md-6">
                    <h2>Contact Us</h2>
                    {isSubmitted && <div className="alert alert-success">Thank you for contacting us!</div>}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="firstName"
                                className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="lastName"
                                className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="message"
                                className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                            ></textarea>
                            {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='col-md-6'>

                  <h3>For any inquiries please email</h3>
                  <span>Mail: <Link to=''>support@qloudhost.com</Link></span>
                  <span>Contact Support: <Link to=''>Submit Ticket</Link></span>
                  <div><Link to=''><FaFacebookF /></Link>
                  <Link to=''><FaLinkedinIn /></Link>
                  <Link to=''></Link>
                  <Link to=''></Link>
                  <Link to=''></Link>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;
