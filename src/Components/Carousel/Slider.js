import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/pexels-cup-of-couple-7657736.jpg';
import image2 from '../../images/pexels-jess-bailey-designs-788946.jpg';
import image3 from '../../images/pexels-melike-benli-9741361.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '800px' }}
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '800px' }}
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: '800px' }}
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;