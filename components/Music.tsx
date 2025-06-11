"use client"
import { Music} from 'lucide-react';
import { useState, useRef } from 'react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('/music.mp3'));

    const togglePlayback = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-7 right-7">
            <button
                onClick={togglePlayback}
                className="rounded-full border-2 p-3 text-[#61DBFB] bg-black hover:bg-gray-800 transition hover:scale-110 items-center justify-center flex hover:rotate-12 active:scale-90"
            >
                <Music className=''/>
            </button>
        </div>
    );
}
