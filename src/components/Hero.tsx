import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { HeroContent } from './HeroContent';

export const Hero: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    // Start the audio muted
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = true; // Ensure audio starts muted
        }
    }, []);

    // Handle mute/unmute toggle
    const toggleMute = () => {
        if (audioRef.current) {
            const newMutedState = !audioRef.current.muted;
            audioRef.current.muted = newMutedState;
            setIsMuted(newMutedState);

            // Ensure audio plays when unmuted
            if (!newMutedState) {
                audioRef.current.play().catch((err) => console.error('Play failed:', err));
            }
        }
    };

    return (
        <section className="hero-section" id="home">
            {/* Audio Element */}
            <audio ref={audioRef} loop>
                <source src="https://res.cloudinary.com/dkznriytt/video/upload/v1737194812/w6pv73bgu4m2datpvsto.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Background Video */}
            <div className="video-wrapper">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://res.cloudinary.com/dkznriytt/video/upload/v1737054165/web0015-travel/mcy3ydvkfyizx752o1ma.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Mute Button */}
                <button
                    onClick={toggleMute}
                    className="mute-button"
                    aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
            </div>

            {/* Hero Content */}
            <HeroContent />
        </section>
    );
};
