import React from "react";
import HorizontalNav from "./../../components/horizontalNav/index";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../features/modal/modalSlice";

function Home() {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };
  return (
    <div>
      <HorizontalNav />
      <div className="py-10 bg-[#f5f9fe]" id="home">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[74px] flex flex-col  lg:flex-row items-center justify-between bg-[#f5f9fe]">
          <div className="text-center lg:text-left mb-8 lg:mb-0 bg-[#f5f9fe]">
            <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold">
              Find the Good Life With{" "}
              <span className="text-[#2cda6d]">Good Health.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg">
              Experience top-tier services without leaving your home. We bring
              convenience right to your doorstep!
            </p>
            <div
              className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-[#2cda6d] rounded-full text-base sm:text-lg font-semibold cursor-pointer inline-block"
              onClick={toggleModal}
            >
              Book Appointment
            </div>
          </div>
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2">
            <img src="./static/home_banner.svg" alt="Home Banner" />
          </div>
        </div>
      </div>

      <div className="md:bg-white px-8 pb-4" id="service">
        <h2 className="text-3xl font-semibold flex justify-center justify-items-center pt-4">
          Services
        </h2>
        <div className="md:flex justify-between items-center">
          <div className=" md:w-1/4 w-3/4 ml-16 md:ml-0">
            <img src="./static/Online Doctor-amico.png" />
          </div>

          <div className="text-xl text-center flex-col space-y-4 mt-4">
            <p>We provide</p>
            <p className="text-[#2cda6d] ">
              Doctor's Appointment Booking System
            </p>
            <p className="text-[#2cda6d] ">Remote Consultation</p>
            <p className="text-[#2cda6d] ">
              Health Diagnostics using Wearable IoMT Kit
            </p>
            <p className="text-[#2cda6d] ">
              Your Digital Twin to predict your health conditions
            </p>
            <p>and few other services to be added soon.</p>
          </div>
          <div className="w-1/4 visible sm:max-md:hidden">
            <img src="./static/Printed circuit board-cuate.png" />
          </div>
        </div>
        {/* <h1>Experienced in multiple medical practices</h1>
        <div className={styles.homeServiceShow}>
          <div className={styles.homeServiceCard}>
            <img src="./static/home_service_icon.png" alt="" />
            <h4>Medical</h4>
            <p>
              Experience top-quality medical services without the hassle. Our
              offerings include Telemedicine Consultations.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 mb-8 mx-4 w-full sm:w-1/3 lg:w-1/4 text-center">
            <img
              src="./static/home_service_icon.png"
              alt=""
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">
              Individual and Family
            </h4>
            <p>Personalized Health Solutions for You and Your Loved Ones.</p>
          </div>
          <div className="bg-white shadow-md p-6 mb-8 mx-4 w-full sm:w-1/3 lg:w-1/4 text-center">
            <img
              src="./static/home_service_icon.png"
              alt=""
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Employer</h4>
            <p>
              Empowering Your Workforce with Quality Healthcare with our
              tailored healthcare services.
            </p>
          </div>
        </div>*/}
      </div>

      <div className="py-20" id="aboutUs">
        <h2 className="text-2xl font-semibold text-center mb-10">About Us</h2>
        <div className="mx-4 md:mx-12 lg:mx-[75px] flex flex-col lg:flex-row items-center">
          <div className="xl:w-[700px] md:w-1/2 sm:w-96 w-60 rounded-xl mb-8 lg:mb-0">
            <video width="100%" height="auto" autoPlay muted>
              <source src="./static/aboutUs.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="xl:w-full md:w-2/3   md:text-lg xl:text-xl 2xl:text-2xl lg:pl-10 leading-relaxed">
            <p>
              We are a freelancer group enjoying research and development till
              now in a non-profit way. Thanks to MeitY and Tezpur University
              that we formed our lab. Currently, we work on IoT, SDN, web and
              mobile app developments, fog-edge computing, machine learning, and
              blockchain. Our club aims to monitor a healthy project environment
              and perform good research. Currently, we are focused on developing
              things for the healthcare sector. Who knows when we kick in !!!
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white rounded-3xl" id="contact">
        <h2 className="text-2xl font-semibold text-center mb-10">Contact Us</h2>
        <div className="mx-[75px]  flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="mb-8 flex items-start">
              <img
                src="./static/home_location.png"
                alt=""
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">Location:</h3>
                <p>Tezpur University, Napaam, Tezpur 784028</p>
              </div>
            </div>
            <div className="mb-8 flex items-start">
              <img
                src="./static/home_email.png"
                alt=""
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">Email:</h3>
                <p>team.navalogy@gmail.com</p>
              </div>
            </div>
            <div className="mb-8 flex items-start">
              <img
                src="./static/home_call.png"
                alt=""
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">Call:</h3>
                <p>+91 9365981955</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              title="Google Map"
              className="w-full h-96 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.253955578815!2d92.82484217537781!3d26.70433277677198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebb0aeec46fb%3A0x58910c2e9e88cb03!2sDepartment%20of%20Computer%20Science%20%26%20Engineering%2C%20Tezpur%20University!5e0!3m2!1sen!2sin!4v1701298739067!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
