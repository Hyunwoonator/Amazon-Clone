import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />

            {/*product*/}
            <div className="home__row">
                <Product 
                id="000001"
                title="DualSense Wireless Controller PS5"
                price={69.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SX522_.jpg"
                />
                <Product 
                id="000002"
                title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
                price={549.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                id="000003"
                title="Razer DeathAdder v2 Pro Wireless Gaming Mouse: 20K DPI Optical Sensor - 3x Faster Than Mechanical Optical Switch - Chroma RGB Lighting - 70 Hr Battery Life - 8 Programmable Buttons - Classic Black"
                price={129.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/61pVyI0EqUL._AC_UY218_.jpg"
                />
                <Product 
                id="000004"
                title="New Apple iPhone 12 Pro (256GB, Pacific Blue) [Locked] + Carrier Subscription"
                price={1099.99}
                rating={3}
                image="https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_UY218_.jpg"
                />
                <Product 
                id="000005"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={949.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                id="000006"
                title="Logitech G PRO Mechanical Gaming Keyboard, Ultra Portable Tenkeyless Design, Detachable Micro USB Cable, 16.8 Million Color LIGHTSYNC RGB backlit keys"
                price={119.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/51K1mE5uVyL._AC_UY218_.jpg"
                />
                <Product 
                id="000007"
                title="Apple AirPods Pro"
                price={199.69}
                rating={4}
                image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                id="000008"
                title="All-new Echo (4th Gen, 2020 release) | With premium sound, smart home hub, and Alexa | Charcoal"
                price={69.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY218_.jpg"
                />
                <Product 
                id="000009"
                title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
                price={118.95}
                rating={4}
                image="https://m.media-amazon.com/images/I/71smqRr0pmL._AC_UY218_.jpg"
                />
                <Product 
                id="000010"
                title="Lenovo Legion 5 Gaming Laptop, 15.6 FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black"
                price={1050.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/41XcG+X7BSL._AC_SY161_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
