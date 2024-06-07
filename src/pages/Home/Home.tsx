import { FC } from "react";

import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import {
  NiarightIcone,
  aboutNia1,
  aboutNia2,
  aboutNia3,
  dotedVector,
} from "../../assets";
import { HeadingTitle } from "../../components/text";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import OurServicesSection from "./components/OurServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import OurWorkSection from "./components/OurWorkSection";
import PartnersSection from "./components/PartnersSection";
// import "./styles.css";
interface HomeProps {}
// [
//   {
//     src: slider1,
//     text: "we have created all the solution and designs",
//     delay: 7000,
//   },
//   {
//     src: slider2,
//     text: "Lorem ipsum dolor sit amet consectetur. Sed nunc varius varius laoreet quisque Lorem ipsum dolor sit amet consectetur. Sed nunc varius varius laoreet quisque..marco ",

//     delay: 5000,
//   },
// ];

const aboutImages = [{ src: aboutNia1 }, { src: aboutNia2 }];
const customPadding = " px-[18px] sm:px-10 lg:px-[100px]";
const HomePage: FC<HomeProps> = () => (
  <>
    {" "}
    {/* <div className="w-[18px] md:w-6 lg:w-[11.1%] bg-sky-500 h-4 fixed top-1/2 left-0 transform translate-x-0 translate-y-1/2 z-50"></div>
    <div className="w-[18px] md:w-6 lg:w-[11.111%] bg-orange-500 h-4 fixed top-[50.5%] left-0 transform translate-x-0 translate-y-1/2 z-50"></div> */}
    {/* <div className="w-[18px] md:w-6 lg:w-[100px] bg-sky-500 h-4 fixed top-1/2 right-0 transform translate-x-0 translate-y-1/2 z-50"></div> */}
    {/* <div className="w-[18px] md:w-6 lg:w-[100px] bg-sky-500 h-4 fixed top-1/2 left-0 transform translate-x-0 translate-y-1/2 z-50"></div> */}
    <section
      id="section2"
      className={`bg-gradient-to-r from-[#B45E00] to-[#FF9D32] top-0 bottom-0 left-0 right-0`}
    >
      {/* <Hero /> */}
    </section>
    <AboutSection />
    <OurServicesSection />
    <PartnersSection />
    <OurWorkSection />
    {/* <ReviewsSection /> */}
    <NewsSection />
    {/* 
   
   
    */}
  </>
);

export default HomePage;

const AboutSection = () => {
  return (
    <>
      <section
        id="about-us"
        className="relative  lg:h-[813px] md:flex justify-center items-center    lg:gap-[50px] overflow-hidden py-6 px-[40px] sm:px-10 lg:px-[100px] "
      >
        <img
          src={dotedVector}
          className="absolute -left-0 top-[10%] hidden lg:block "
        />
        <img
          src={dotedVector}
          className="absolute -right-0 bottom-[10%] hidden  lg:block"
        />
        <div className="aboutText  md:w-1/2  ">
          <HeadingTitle
            headerDark="why"
            headerOrang="nia"
            type="aboutUsHeader"
          />
          <div className=" m-auto capitalize ">
            <Text
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight={{ base: "normal", md: "medium" }}
              textAlign={"center"}
            >
              Lorem ipsum dolor sit amet consectetur. Scelerisque ut fermentum
              non libero quis Lorem ipsum dolor sit amet consectetur.
              Scelerisque ut fermentum non libero quis Lorem ipsum dolor sit
            </Text>
          </div>
          <div className="flex gap-3 items-center justify-end md:me-4 xl:pt-[32px] cursor-pointer">
            <Link to={"/about-us"}>
              <Text
                fontSize={{ base: "18px", md: "20px" }}
                fontWeight={{ base: "medium" }}
                textAlign={"end"}
              >
                read more
              </Text>
            </Link>
            <span>
              <img src={NiarightIcone} />
            </span>
          </div>
        </div>
        <div className="aboutImages h-[380px] lg:h-[813px] w-1/2 md:flex flex-col justify-end hidden relative  ">
          <img
            src={aboutNia3}
            className="w-[190px] h-[160px]  top lg:w-[280px] lg:h-[230px]  xl:w-[376px]   xl:h-[304px]  ms-auto   absolute top-[31px] lg:top-[120px] xl:top-[80px] right-0    order-1 z-20	 "
          />
          <img
            src={aboutNia2}
            className="w-[190px] h-[160px]  lg:w-[280px] lg:h-[230px]  xl:w-[376px]   xl:h-[304px]  order-2 z-10 absolute left-0 top-[116px]  lg:top-[255px]"
          />
          <img
            src={aboutNia1}
            className="w-[190px] h-[160px]   lg:w-[280px] lg:h-[230px]  xl:w-[376px]   xl:h-[304px]  ms-auto order-3 z-0 absolute  right-0 bottom-[31px] lg:bottom-[20%]  xl:bottom-[7%]"
          />
        </div>
      </section>
    </>
  );
};
