import React from 'react'
import  access from "/src/assets/images/icon-access-anywhere.svg"
import  security from "/src/assets/images/icon-security.svg"
 import collaboration from  "/src/assets/images/icon-collaboration.svg"
 import  any from "/src/assets/images/icon-any-file.svg"
const features = [
    {
        icon:  access,
        title: "Access your files, anywhere",
        description: " The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
        icon: security,
        title: "  Security you can trust",
        description: " 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
        icon: collaboration,
        title: "Real-time collaboration",
        description: " Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
        icon: any,
        title: "Store any type of file",
        description: "  Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    }
]

const Features = () => {
    return (

        <section  className = "pb-[30px] md:pb-[50px]" >
            <div className="container " >

                <div className='grid grid-cols-1  md:grid-cols-2   text-center  gap-[30px] w-[80%] mx-auto  ' >
                    {

                        features.map(({ title, description, icon }, index) => (
                            <div className='text-white  ' key={index} >
                                <img src={icon} alt={'icon-img'} className=' mx-auto w-[60px] h-[60px] object-contain  ' />

                                <h4 className='text-[20px] font-bold  my-[15px] '  >{title}</h4>
                                <p className='font-normal opacity-[0.8] text-sm  max-w-100 sm:w-[70%] mx-auto ' >{description}</p>
                            </div>
                        ))
                    }


                </div>


            </div>


        </section>
    )
}

export default Features