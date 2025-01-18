import { Star, Quote } from "lucide-react";
import React from "react";

const TestimonialCard: React.FC<{ text: string; author: string }> = ({
                                                                         text,
                                                                         author,
                                                                     }) => {
    return (
        <div className="col-md-4 col-sm-12 mb-4 d-flex align-items-stretch " data-aos="fade-up" >
            <div className="card shadow-lg p-4 w-100 testimonial-card">
                {/* Quote Icon */}
                <div className="mb-4 text-center">
                    <Quote className="text-primary" style={{ width: "2rem", height: "2rem",stroke: "#198754" }} />
                </div>

                {/* Rating */}
                <div className="mb-4 text-center">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="text-warning"
                            style={{ width: "1.25rem", height: "1.25rem"}}
                            fill="currentColor"
                        />
                    ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="mb-4 text-center">
                    <p className="text-muted">"{text}"</p>
                </blockquote>

                {/* Author */}
                <footer className="text-center text-dark font-weight-bold">- {author}</footer>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            text: "An amazing experience! Waking up to wildlife was incredible.",
            author: "John Doe",
        },
        {
            text: "Perfect blend of luxury and nature. Will definitely return!",
            author: "Jane Smith",
        },
        {
            text: "The staff and guides made our stay unforgettable.",
            author: "Mike Johnson",
        },
    ];

    return (
        <section className="py-5 testimonial-section">
            <div className="container text-center">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-4" data-aos="fade-right" >
                        What Our Guests Say
                    </h1>
                    {/*<Star*/}
                    {/*    className="text-success"*/}
                    {/*    style={{width: "2rem", height: "2rem", fill: "#198754"}}*/}
                    {/*/>*/}
                </div>

                {/* Testimonials Grid */}
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
