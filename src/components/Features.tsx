import { BedDouble, ShieldCheck, TreeDeciduous, Utensils, Mountain, Leaf } from 'lucide-react';
import React from "react";

const AboutSection: React.FC = () => {
    return (
        <section className="py-5 feature-section" id="about">
            <div className="container text-center">
                <h1 className="display-4 fw-bold mb-4" data-aos="fade-right" style={{color:"white"}}>Why Choose The Den at Yala?</h1>
                <div className="row">
                    <div className="col-md-4 mb-4" data-aos="fade-up">
                        <div className="card feature-card">
                            <div className="card-body text-center">
                                <TreeDeciduous style={{width: 48, height: 48, fill: "#198754"}} className="mb-3"/>
                                <h5 className="card-title">Natural Environment</h5>
                                <p className="card-text">
                                    Surrounded by pristine wilderness and natural beauty.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up">
                        <div className="card feature-card">
                            <div className="card-body text-center">
                                <ShieldCheck style={{width: 48, height: 48, fill: "#198754"}} className="mb-3"/>
                                <h5 className="card-title">Safe Experience</h5>
                                <p className="card-text">
                                    Professional guides ensure your safety while exploring wildlife.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up">
                        <div className="card feature-card">
                            <div className="card-body text-center">
                                <BedDouble style={{width: 48, height: 48, fill: "#198754"}} className="mb-3"/>
                                <h5 className="card-title">Luxury Comfort</h5>
                                <p className="card-text">
                                    Modern amenities with a touch of wilderness luxury.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* New Feature: Excellent Cuisine */}
                    <div className="col-md-4 mb-4" data-aos="fade-up" >
                        <div className="card feature-card">
                            <div className="card-body text-center">
                                <Utensils style={{width: 48, height: 48, fill: "#198754"}} className="mb-3"/>
                                <h5 className="card-title">Excellent Cuisine</h5>
                                <p className="card-text">
                                    Enjoy gourmet meals prepared with fresh, local ingredients.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* New Feature: Adventure Activities */}
                    <div className="col-md-4 mb-4" data-aos="fade-up" >
                        <div className="card feature-card">
                            <div className="card-body text-center">
                                <Mountain style={{width: 48, height: 48, fill: "#198754"}} className="mb-3"/>
                                <h5 className="card-title">Adventure Activities</h5>
                                <p className="card-text">
                                    Engage in thrilling safari rides, birdwatching, and nature walks.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* New Feature: Eco-Friendly Practices */}
                    <div className="col-md-4 mb-4" data-aos="fade-up" >
                        <div className="card feature-card">
                            <div className="card-body text-center">
                                <Leaf style={{width: 48, height: 48, fill: "#198754"}} className="mb-3"/>
                                <h5 className="card-title">Eco-Friendly Practices</h5>
                                <p className="card-text">
                                    Sustainability at its core, with green practices for a better future.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
