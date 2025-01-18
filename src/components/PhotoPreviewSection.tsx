import React from 'react';
import {Camera} from "lucide-react";

const CreativePhotoSection = () => {
    return (
        <section className="py-5">
            <div className="container text-center">
                <div className="photo-preview-section">
                    <div className="responsive-container-block bigContainer">
                        <div className="responsive-container-block Container">
                            <h1 className="display-4 fw-bold mb-4" data-aos="fade-right" data-aos-delay="400">
                                Moments Worth Capturing
                            </h1>
                            <p>
                                Where every frame tells a story of wilderness and luxury
                            </p>
                            <div className="responsive-container-block imgContainer">
                                <div className="project project1">
                                    <img className="smallImage"
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7exDOYVspt6wavL-MPFtzkdrLT6r-Gh971g&s"/>
                                </div>
                                <div className="project project2">
                                    <img className="smallImage"
                                         src="https://media.istockphoto.com/id/1162854296/photo/bison.jpg?s=612x612&w=0&k=20&c=d5HoJW_QuNpNxWMu5DxL8TaM-VHd3Z3hgE4uMSk3ooc="/>
                                </div>
                                <div className="project project3">
                                    <img className="smallImage"
                                         src="https://scenicventures.com/wp-content/uploads/2019/03/Wild-Life.jpg"/>
                                </div>
                                <div className="project project4">
                                    <img className="smallImage"
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDOsBjWIqAShMh6hJXiKHKha6G4fha5J_Zw&s"/>
                                </div>
                                <div className="project project5">
                                    <img className="smallImage"
                                         src="https://t4.ftcdn.net/jpg/10/33/47/31/360_F_1033473182_gAQ1sGkBky2OwebIT9BKs8ZnhsAXf01b.jpg"/>
                                </div>
                                <div className="project project6">
                                    <img className="smallImage"
                                         src="https://img.freepik.com/free-photo/photorealistic-scene-wild-elephants_23-2151436830.jpg"/>
                                </div>
                            </div>
                            {/* Creative Button */}
                            {/*<button  className="book-btn">Explore More</button>*/}
                            <button className="den-btn">
                                <span className="btn-content">
                                    <Camera className="camera-icon" size={24}/>
                                    <span className="btn-text">Explore More</span>
                                </span>
                                <span className="btn-particles"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreativePhotoSection;
