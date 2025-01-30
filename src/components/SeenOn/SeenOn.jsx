import { useEffect, useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const images = [
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/qxYYkH9/images.png",
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/qxYYkH9/images.png",
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/qxYYkH9/images.png",
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/qxYYkH9/images.png",
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/qxYYkH9/images.png",
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/qxYYkH9/images.png",
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/qxYYkH9/images.png",
    "https://i.ibb.co/qxYYkH9/images.png",
    "https://i.ibb.co/jRsww75/download.png",
    "https://i.ibb.co/qxYYkH9/images.png",
];

const SeenOn = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const imagesPerPage = 5; // Number of images to display on larger screens
    const isSmallDevice = window.innerWidth < 640; // Small device breakpoint (640px)

    // Function to go to the next image set
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + imagesPerPage) % images.length);
        setIsPaused(true); // Pause auto-sliding when user clicks
    };

    // Function to go to the previous image set
    const goToPrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - imagesPerPage + images.length) % images.length
        );
        setIsPaused(true); // Pause auto-sliding when user clicks
    };

    // Automatically advance the slider every 3 seconds
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + imagesPerPage) % images.length);
            }, 3000);

            return () => clearInterval(interval); // Clean up the interval on component unmount
        }
    }, [isPaused]);

    // Get the next set of images to display
    const getImageSet = () => {
        const endIndex = currentIndex + (isSmallDevice ? 1 : imagesPerPage); // Show 1 or 5 images
        if (endIndex <= images.length) {
            return images.slice(currentIndex, endIndex);
        } else {
            // Wrap around to the beginning of the array
            return [...images.slice(currentIndex), ...images.slice(0, endIndex - images.length)];
        }
    };

    return (
        <div className="bg-white py-10 mt-10">
            <div className="relative overflow-hidden w-11/12 mx-auto">
                {/* Left Arrow */}
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none text-2xl"
                    onClick={goToPrevious}
                >
                    <MdOutlineNavigateBefore />
                </button>

                {/* Image Grid */}
                <div className="p-10">
                    <div
                        className={`grid ${
                            isSmallDevice ? "grid-cols-1" : "grid-cols-5"
                        } gap-4`}
                    >
                        {getImageSet().map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center w-full h-32 border border-gray-200 shadow-md rounded-lg bg-white transition-shadow duration-300 hover:shadow-none"
                            >
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none text-2xl"
                    onClick={goToNext}
                >
                    <MdOutlineNavigateNext />
                </button>
            </div>
        </div>
    );
};

export default SeenOn;
