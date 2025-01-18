import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar} from "./components/Navbar.tsx";
import {Hero} from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Footer from "./components/Footer.tsx";
import Contact from "./components/Contact.tsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import PhotoPreviewSection from "./components/PhotoPreviewSection.tsx"; // import AOS styles

const App: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Customize the animation duration
            once: true, // Make sure the animation only runs once
        });
    }, []);

    return (
        <div className="app">
            <Navbar/>
            <Hero/>

            <Features/>
            <PhotoPreviewSection/>
            {/*<Stats />*/}
            <Testimonials/>
            {/*<BackToTop />*/}
            <Contact/>
            <Footer/>

        </div>
    );
};

export default App;