import React from 'react'
import { Link } from 'react-router-dom'
import {GlobalData} from '../../../components/data/GlobalData'


import { Helmet } from "react-helmet-async";


const Modeling = () => {
  return (
    <div>
      <Helmet>
        <title>Modeling School - ilahe</title>
        <meta
          name="description"
          content="Discover the top modeling and finishing school to refine your skills, boost your confidence, and embark on a successful modeling career."
        />
        <link rel="canonical" href="/contactus" />
      </Helmet>
     {/* Title Card */}
     <section className="py-20 sm:py-40" style={{ backgroundImage: `url(${GlobalData.Coverimages.ModelingSchool})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
     <div className="flex flex-col items-center md:flex-row justify-center">
       <div className="md:w-1/2 md:pr-10">
        
       </div>
       <div className="md:w-1/2 px-5">
         <div className="text-right md:text-left"> {/* Align titles to the right on mobile, left on larger screens */}
           <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
           Modeling
           </h1>
           <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
           Let's Build Fashion With Style.
           </p>
   
           <div className="mt-8 flex flex-wrap justify-center gap-4">
             <Link to="/contactus">
               <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 Get in Touch
               </a>
             </Link>
   
             <a href={GlobalData.company.companyWhatsapp}>
               <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 WhatsApp
               </a>
             </a>
           </div>
         </div>
       </div>
     </div>
   </section>



   </div>
  )
}


export default Modeling