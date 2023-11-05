import React, { useEffect  , useRef} from 'react'
import logo from "/src/assets/images/logo.svg"
const links = ["Features", "Team", "Signin"]
const Header = () => {
    const headerRef = useRef()

    useEffect(() => {
        window.addEventListener("scroll" , () => {
                if (window.scrollY  > 100 ) {
                        headerRef.current.style.background = "#0c1524"
                        headerRef.current.style.padding = "20px 0 "

                }else {
                    headerRef.current.style.background = "transparent"
                    headerRef.current.style.padding = "60px 0 "
                }
        }  )
    } , [] )

    return (
        <header ref={headerRef}  className = "pt-[60px]   fixed top-0  lef-0 w-full z-50  transition-all duration-400 " >

     <div className=" container  flex  justify-center sm:justify-between items-center  gap-[30px] sm:gap-0 flex-wrap " >
               <a href='/' >
                   <img src={logo} alt="logo" />
               </a>
        
               <nav>
                   <ul className="flex  items-center gap-12 " >
        
                       {
                           links.map((link, index) => (
                               <li key={index}>
                                   <a className="text-white opacity-[0.85] hover:opacity-[1] hover:underline transition-opacity duration-200" href={`/${link.toLowerCase()}`} >{link}</a>
                               </li>
                           )
                           )
                       }
        
        
                   </ul>
        
               </nav>
        
     </div>

        </header>
    )
}

export default Header