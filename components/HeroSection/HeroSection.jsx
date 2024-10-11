import React from "react";
import Image from 'next/image';

//INTERNAL  IMPORT
import Style from './HeroSection.module.css';
import {Button} from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
    return (
    <div classname={Style.heroSection}>
        <div className={Style.heroSection_box}>
            <div className={Style.heroSection_box_left}> 
                <h1>Discover, collect, and sell NFTs </h1>
                <p>
                Discover the most outstanding NTFs in all topics of life. Creative your NTFs and sell them
                </p>   
                <button start your search/>
            </div>
            <div className={Style.heroSection_box_right}>
                <image
                 src={images.hero}
                 alt="Hero Section"
                 width={600}
                 height={600}
                />
            </div>
        </div>
    </div>
    );
};
export default HeroSection;