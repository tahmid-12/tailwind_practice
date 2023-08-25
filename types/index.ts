import { StaticImageData } from "next/image";

export interface HeroProps{
    heading: string;
    message: string;
}

export interface SliderProps{
    sliders: { image: string }[];
}

export interface InstagramImageProps{
    socialImg: string | StaticImageData;
}