import React from "react";


const BackToTop: React.FC = () => {
    // const [isVisible, setIsVisible] = useState(false);
    //
    // useEffect(() => {
    //     const toggleVisibility = () => {
    //         setIsVisible(window.scrollY > 300);
    //     };
    //
    //     window.addEventListener('scroll', toggleVisibility);
    //     return () => window.removeEventListener('scroll', toggleVisibility);
    // }, []);
    //
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // };

    return (

        <section className="ftco-section ftco-about ftco-no-pt img">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-12 about-intro">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="img d-flex w-100 align-items-center justify-content-center"
                                     style={{backgroundImage:"url(https://img.freepik.com/free-photo/view-wild-elk-nature_23-2150829541.jpg)"}}>
                                </div>
                            </div>
                            <div className="col-md-6 pl-md-5 py-5">
                                <div className="row justify-content-start pb-3">
                                    <div className="col-md-12 heading-section ftco-animate">
                                        <span className="subheading">About Us</span>
                                        <h2 className="mb-4">Make Your Tour Memorable and Safe With Us</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in
                                            Bookmarksgrove right at the coast of the Semantics, a large language
                                            ocean.</p>
                                        <p><a href="#" className="btn btn-primary">Book Your Destination</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <a
        //     href="#"
        //     className={`back-to-top ${isVisible ? 'visible' : ''}`}
        //     onClick={(e) => {
        //         e.preventDefault();
        //         scrollToTop();
        //     }}
        // >
        //     <i className="fas fa-arrow-up"></i>
        // </a>
    );
};

export default BackToTop;