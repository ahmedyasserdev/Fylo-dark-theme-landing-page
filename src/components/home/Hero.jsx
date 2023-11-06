import intro from "/src/assets/images/illustration-intro.png";
import curv from '/src/assets/images/bg-curvy-desktop.svg';
import curvMobile from '/src/assets/images/bg-curvy-mobile.svg';

const Hero = () => {
  return (
    <section className="bg-primary-darkBlueIntro">
      <div className="container">
        <div className="centering gap-[25px] sm:gap-[44px] pt-44 flex-col">
          <div className="w-[750px] max-w-full">
            <img src={intro} alt="intro img" className="w-full h-fit" />
          </div>

          <div className="text-white text-center">
            <h1 className="text-[33px] md:text-[40px] font-bold">
              All your files in one secure location, <br /> accessible anywhere.
            </h1>

            <p className="mt-[25px] mb-[35px] leading-[1.7] opacity-[0.8] font-normal text-lg px-6 md:w-[65%] lg:w-[53%] max-w-full md:mx-auto">
              Fylo stores all your most important files in one secure location. Access them wherever you need, share
              and collaborate with friends, family, and co-workers.
            </p>

            <a href="#" className="btn px-20 py-[14px] font-bold">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="w-full mt-[30px] ">
        <img src={curv} alt="curv img" className="h-full w-full hidden md:block " />
        <img src={curvMobile} alt="curv img" className="h-full w-full block md:hidden " />
      </div>
    </section>
  );
};

export default Hero;
