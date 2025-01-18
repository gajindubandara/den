import React, { useState, useEffect } from 'react';
import { Users, Hotel, Camera, Award } from 'lucide-react';
import { Carousel, Image } from 'antd';

interface StatItemProps {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    value: number;
    label: string;
}

const StatItem: React.FC<StatItemProps> = ({ Icon, value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // Animation duration in ms
        const increment = value / (duration / 50); // Increment value

        const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
                clearInterval(counter);
                setCount(value);
            } else {
                setCount(Math.ceil(start));
            }
        }, 50);

        return () => clearInterval(counter);
    }, [value]);

    return (
        <div className=" col-12 d-flex justify-content-center mb-4">
            <div className="text-center">
                {/*<Icon className="mb-3" size={48} />*/}
                <Icon className="mb-3" />
                <h3>{count}</h3>
                <p>{label}</p>
            </div>
        </div>
    );
};

const Stats: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.stats');
            if (element) {
                const position = element.getBoundingClientRect();
                setIsVisible(position.top < window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stats = [
        { Icon: Users, value: 5000, label: 'Happy Guests' },
        { Icon: Hotel, value: 50, label: 'Luxury Rooms' },
        { Icon: Camera, value: 100, label: 'Wildlife Species' },
        { Icon: Award, value: 15, label: 'Awards Won' },
    ];

    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Side Image Slider */}
                    <div className="col-md-10 col-12">
                        <Carousel autoplay autoplaySpeed={3000} dotPosition="bottom">
                            {/* Multiple Images */}
                            <div>
                                <Image
                                    src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D"
                                    alt="Image 1"
                                    className="img-fluid rounded"
                                    style={{width: '100%', height: 'auto', objectFit: 'cover'}} // Adjusting image fit
                                />
                            </div>
                            <div>
                                <Image
                                    src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D"
                                    alt="Image 2"
                                    className="img-fluid rounded"
                                    style={{width: '100%', height: 'auto', objectFit: 'cover'}} // Adjusting image fit
                                />
                            </div>
                            <div>
                                <Image
                                    src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D"
                                    alt="Image 3"
                                    className="img-fluid rounded"
                                    style={{width: '100%', height: 'auto', objectFit: 'cover'}} // Adjusting image fit
                                />
                            </div>
                        </Carousel>
                    </div>

                    {/* Right Side Stats */}
                    <div className="col-md-2 col-12">
                        {isVisible &&
                            stats.map((stat, index) => (
                                <StatItem key={index} {...stat} />
                            ))}
                    </div>
                    {/*<div className="col-md-2 col-12">*/}
                    {/*    {isVisible &&*/}
                    {/*        stats.map((stat, index) => (*/}
                    {/*            <StatItem key={index} {...stat} />*/}
                    {/*        ))}*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};

export default Stats;
