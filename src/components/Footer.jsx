
import React from 'react';
import logo from '/src/assets/images/logo.svg';
import locationIcon from "/src/assets/images/icon-location.svg"
import emailIcon from "/src/assets/images/icon-email.svg"
import phoneIcon from "/src/assets/images/icon-phone.svg"
import {FaFacebookF ,FaTwitter , FaInstagram } from "react-icons/fa"

const connetction = [
  {
    icon: phoneIcon,
    title: "+1-543-123-4567"
  },
  {
    icon: emailIcon,
    title: "example@fylo.com"
  },
]


const links = [
  " About Us",
  "Jobs",
  "Press",
  "Blog",
]

const links2 = [
  " Contact Us",
  "  Terms",
  "  Privacy",

]

const socials = [
  { icon: <FaFacebookF />, id: 1 },
  { icon: <FaTwitter />, id: 2},
  { icon: <FaInstagram />, id:3},
];

const Footer = () => {
  return (
    <section className="bg-primary-darkBlueFooter text-white  pt-[100px]    md:pt-[300px] lg:pt-[200px]  pb-[100px] ">
      <div className="container">

        <a href="#"   className = "centering md:block" >
          <img src={logo} alt="logo" className="object-contain" />
        </a>

        <div className=" centering md:justify-between pt-[40px] flex-col md:flex-row  gap-[20px] md:gap-[5px]  " >
          <div className="flex items-start  gap-4 md:w-[25%] " >
            <img className="" src={locationIcon} alt="location" />
            <p className=" opacity-[0.8]  " >

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua

            </p>
          </div>


          <div >

            {
              connetction.map(({ icon, title }, index) => (
                <div className="flex p-[10px] gap-[10px] items-center" key={index} >
                  <img src={icon} />
                  <h6 className="text-[12px] opacity-[0.8]" >{title}</h6>
                </div>
              ))
            }

          </div>


          <ul>
            {
              links.map((link, index) => (
                <li className="text-[15px]  p-[5px] opacity-[0.8] " key={index} >{link}</li>
              ))
            }

          </ul>

          <ul>
            {
              links2.map((link, index) => (
                <li className="text-[15px]  p-[5px] opacity-[0.8] " key={index} >{link}</li>
              ))
            }

          </ul>


          <div className = "flex gap-[12px] items-center " >
            {
              socials.map((link,) => (
                  <i key = {link.id} className = " transition-colors duration-200 border border-white rounded-full p-[5px] cursor-poinet hover:border-accent-cyan hover:text-accent-cyan " >
                      {link.icon}
                  </i>
                ))
            }

          </div>




        </div>








      </div>
    </section>
  );
};

export default Footer;
