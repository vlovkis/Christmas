import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwjxyeTOzNDtAhVtpIsKHZ9EDZ8QPQgI" target="_blank">
                        <img src="images/9.jpg" />
                    </a></div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-wpexplorer"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Custom letters<span className="job-title">more info in webshop</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwjxyeTOzNDtAhVtpIsKHZ9EDZ8QPQgI" target="_blank">
                        <img src="images/10.jpg" />
                    </a></div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-wpexplorer"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Custom number keychain<span className="job-title">more info in webshop</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwjxyeTOzNDtAhVtpIsKHZ9EDZ8QPQgI" target="_blank"> 
                        <img src="images/7.jpg" />
                    </a></div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-wpexplorer"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Silly 3D pack<span className="job-title">more info in webshop</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwjxyeTOzNDtAhVtpIsKHZ9EDZ8QPQgI" target="_blank">
                        <img src="images/6.jpg" />
                    </a></div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-wpexplorer"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Fidget spinner<span className="job-title">more info in webshop</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwjxyeTOzNDtAhVtpIsKHZ9EDZ8QPQgI" target="_blank">
                        <img src="images/8.jpg" />
                    </a></div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-wpexplorer"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>"Good Jul!"<span className="job-title">more info in webshop</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwjxyeTOzNDtAhVtpIsKHZ9EDZ8QPQgI" target="_blank">
                        <img src="images/2.jpg" />
                    </a></div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-wpexplorer"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Whale<span className="job-title">more info in webshop</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwjxyeTOzNDtAhVtpIsKHZ9EDZ8QPQgI" target="_blank">
                        <img src="images/3.jpg" />
                    </a></div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-wpexplorer"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Dog<span className="job-title">more info in webshop</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwjxyeTOzNDtAhVtpIsKHZ9EDZ8QPQgI" target="_blank">
                        <img src="images/4.jpg" />
                    </a></div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-wpexplorer"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Bird<span className="job-title">more info in webshop</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwjxyeTOzNDtAhVtpIsKHZ9EDZ8QPQgI" target="_blank">
                        <img src="images/5.jpg" />
                    </a></div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-wpexplorer"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Among us<span className="job-title">more info in webshop</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}


export default ImageSlider
