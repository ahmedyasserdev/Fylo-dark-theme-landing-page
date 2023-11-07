import satish from "/src/assets/images/profile-1.jpg"
import bruce from "/src/assets/images/profile-2.jpg"
import iva from "/src/assets/images/profile-3.jpg"
import quotes from "/src/assets/images/bg-quotes.png"

const testimonials = [
    {

        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well- oiled collaboration machine.",
        name: "Satish Patel",
        position: "Founder & CEO, Huddle",
        img: satish
    },
    {

        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well- oiled collaboration machine.",
        name: "Bruce McKenzie",
        position: "Founder & CEO, Huddle",
        img: bruce
    },
    {


        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well- oiled collaboration machine.",
        name: " Iva Boyd",
        position: "Founder & CEO, Huddle",
        img: iva
    },

]

const Testimonials = () => {
    return (
        <section className=" pb-[150px] md:pb-[250px] " >
            <div className="container z-10" >

                <div className="flex bg-[url('/src/assets/images/bg-quotes.png')]  bg-no-repeat bg-left-top flex-col md:flex-row items-center gap-[12px] md:gap-4 text-white  " >
                    {
                        testimonials.map(({ description, name, img, position }, index) => (
                            <div key={index} className=" p-[30px] md:p-[35px]  mt-9 bg-primary-darkBlueTestimonials rounded-[2px] shadow-md shadow-primary-darkBlueFooter " >
                                <p className="opacity-[0.8]   font-normal leading-[1.6] tracking-[0.8px] " >{description}</p>

                                <div className="flex items-center gap-[12px] pt-4  " >
                                    <div className="w-[30px] " >
                                        <img className="w-full h-auto rounded-full object-contain" src={img} alt={name} />
                                    </div>

                                    <div  >
                                        <h6 className="font-[400] text-[14px]" >{name}</h6>
                                        <p className="text-[12px] opacity-[0.8] " >{position}</p>
                                    </div>


                                </div>

                            </div>
                        ))
                    }

                </div>


            </div>


        </section>
    )
}

export default Testimonials