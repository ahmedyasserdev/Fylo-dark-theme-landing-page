import intro from "/src/assets/images/illustration-intro.png"
const Hero = () => {
    return (
        <section className="bg-primary-darkBlueIntro" >
            <div className="container  " >
                <div className = " centering gap-[25px] sm:gap-[44px]  pt-44  flex-col" >

                    <div className="w-[750px] max-w-full" >
                        <img src={intro} alt="intro img" className="w-full h-fit " />
                    </div>

                    <div className="text-white text-center " >
                        <h1 className="text-[33px] md:text-[40px] font-bold " >
                            All your files in one secure location, <br /> accessible anywhere.
                        </h1>

                        <p className="my-4  leading-[1.7] opacity-[0.8] font-normal text-lg px-6 md:w-[65%] lg:w-[53%] max-w-full  md:mx-auto" >
                            Fylo stores all your most important files in one secure location. Access them wherever
                            you need, share and collaborate with friends family, and co-workers.

                        </p>

                    </div>


                </div>
            </div>

        </section>
    )
}

export default Hero