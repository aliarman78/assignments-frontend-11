import React, { useEffect, useState } from 'react';
import Slider from '../Carousel/Slider';
import ExtraSec from '../ExtraSec1/ExtraSec';
import ExtraSection from '../ExtraSec2/ExtraSection';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Products from '../Products/Products';
import Spinner from '../Spinner/Spinner';


const Home = () => {
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
    }, []);

    if (spinner) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Products></Products>
            <ExtraSec></ExtraSec>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );

};

export default Home;