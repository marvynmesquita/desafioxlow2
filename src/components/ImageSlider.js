import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideStyle = {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentSlide].url}`
    }
    const sliderStyle = {
        height: '100%',
        width: '100%',
        position: 'relative'
    }
    const leftArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '3.2rem',
        fontSize: '3rem',
        cursor: 'pointer',
        color: 'white',
        zIndex: '1'
    }
    const rightArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '3.2rem',
        fontSize: '3rem',
        cursor: 'pointer',
        color: 'white',
        zIndex: '1'
    }
    const nextSlide = () => {
        const isLast = currentSlide === slides.length - 1
        const newIndex = isLast? 0 : currentSlide + 1;
        setCurrentSlide(newIndex);
    }
    const prevSlide = () => {
        const isFirst = currentSlide === 0;
        const newIndex = isFirst? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    }
    const dotContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
    }
    const dotStyle = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '2rem',
    }
    const goToSlide = (index) => {
        setCurrentSlide(index);
    }
    return (
        <div style={sliderStyle}>
            <div style={leftArrowStyle} onClick={prevSlide}>🡠</div>
            <div style={rightArrowStyle} onClick={nextSlide}>🡢</div>
            <div style={slideStyle}></div>
            <div style={dotContainerStyle}>
                {slides.map((slide, index) => (
                    <div key={index} style={dotStyle} onClick={() => goToSlide(index)}>●</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider;