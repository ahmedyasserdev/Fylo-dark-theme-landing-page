import productiveImg from '/src/assets/images/illustration-stay-productive.png'
import arrow from "/src/assets/images/icon-arrow.svg"
const Productive = () => {
    return (
        <section className = "pb-[30px]" >
            <div className="container mt-[30px] md:mt-[50px]  grid grid-cols-1 md:grid-cols-2  place-items-center gap-[50px]  " >
                <div>
                    <img src={productiveImg} alt="stay productive" />
                </div>

                <div className="text-white" >
                    <h2 className="text-[22.6px] md:text-[35px] lg:text-[45px] font-bold  text-center md:text-start " >
                        Stay productive, <br className="hidden md:block" /> wherever you are


                    </h2>

                    <div className="my-4 tracking-[1.3px] " >
                        <p className="opacity-[0.8] mb-4 " >
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                            needs.
                        </p>
                        <p className="opacity-[0.8]" >
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email
                            nts required.
                        </p>

                    </div>

                    <a href="#" className=" transition-colors duration-200 text-accent-cyan border-b pb-[5px] border-accent-cyan hover:text-white hover:border-white " >
                        See how Fylo works
                        <img src={arrow} alt='arrow' className=" animate-bounce  ml-2 inline-block w-[20px] object-contain h-[20px] " />
                    </a>


                </div>

            </div>


        </section>
    )
}

export default Productive