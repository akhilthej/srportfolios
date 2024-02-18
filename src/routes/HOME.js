import React from "react";
import { Link } from "react-router-dom";

import Brand_slider from "../components/Brand_slider";


import ImageSlider from "../components/ImageSlider";

import { GlobalData } from "../components/data/GlobalData";

import {SelfGromming,Training,PersonalGrowth,ProfessionalDevelopment,} from '../components/data/data'

const Home = () => {
  return (
    <>
      
      <main className=" overflow-hidden">
        <ImageSlider />

        {/*herosection */}

        <section class="flex items-center my-5 justify-center  bg-white">
          <div class="mx-auto max-w-[55rem]">
            <div class="text-center">
              <null class="cursor-default text-sm sm:text-2xl font-extrabold leading-8 text-gray-900">
                Click . Pose . Post
              </null>
              <h1 class="cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mt-3 leading-[3.5rem] tracking-tight">
                SR Portfolios
              </h1>

              <p class="cursor-default text-sm sm:text-xl font-extrabold leading-8 text-gray-900">
                Are you looking for a Proffectional Photoshoot?
              </p>
            </div>
            <div class="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="/contactus">
                <button class="text-xs sm:text-sm transform rounded bg-red-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
                  Apply Now
                </button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20looking%20some%20information.">
                <button class="text-xs sm:text-sm transform rounded border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-600 hover:text-black">
                  Whatsapp
                </button>
              </a>
            </div>
          </div>
        </section>

      
        {/* Tagline */}
        <section className="flex items-center my-10 justify-center  bg-white ">
          <div className="mx-auto max-w-[55rem]">
            <div className="text-center">
              <p className="cursor-default text-sm sm:text-4xl font-extrabold  text-gray-900">
              Portfolio Photoshoot in Hyderabad
              </p>

              <p className="cursor-default text-sm sm:text-xl pt-5  text-gray-900">
              Portfolio photo shoot shoot is a photo designed to capture the subject in a variety of poses, backdrops and setting it can be for artist models, actors and corporate clients who need to show their professionalism of personal charm. model photography is a great way for an aspiring model or actor to gain invisibility the model. Photo shoot will show your skills. there are no rules like anyone or not allowed to take a portfolio shot. Anyone can take a portfolio, photo shoot you can showcase your capabilities.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap"></div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
                <button className="text-xs sm:text-sm transform rounded bg-red-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
                  Contact Now
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Clients */}
        <Brand_slider />

        {/* Services */}
           {/*Line of Engagement */}
 <section className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
  <div className="xl:max-w-8xl mx-auto px-4">
    {/* Heading for "Line of Engagement" section */}

    <section className="text-center mx-auto mb-12 lg:px-20">

    <p className="text-xl font-medium text-black">
    Explore SR Portfolios
      </p>
      <h2 className="pb-2 font-extrabold text-white text-2xl md:text-5xl lg:text-6xl  mt-3  ">
      PORTFOLIO SHOOT PACKAGES IN HYDERABAD  
      </h2>
      <p className="text-sm font-medium text-black">
      "We make it easy for you! SR Portfolios offers user-friendly websites designed just for you. Whether you're a budding model or looking to refine your skills, our online platform is your go-to destination. Showcase your talent effortlessly and step confidently into the world of modeling and finishing. Your journey begins here, online, with SR Portfolios."
      </p>
    </section>
{/* "Modeling" section */}
<div className="flex flex-wrap justify-center -mx-4  text-center">
  <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-16">
    <div className="flex justify-center items-center">
      <div class='rounded-xl shadow-xl' style={{ backgroundImage: `url(${GlobalData.Coverimages.ClassicPack})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', paddingTop: '100%' }} className="shadow-lg mb-2 bg-gray-50 border-b border-gray-100"></div>
    </div>
    <h3 className="mt-2 text-sm sm:text-2xl transform rounded border border-slate-200 px-12 py-2 font-medium bg-white text-black ">
    CLASSIC PACK
    </h3>
    <p className="font-semibold text-sm text-white bg-orange-600 p-5 drop-shadow-lg rounded-lg">
    

3 HOUR SHOOT<br/>
4 CHANGES OUTFITS<br/>
20 EDITED PHOTOS<br/>
ALL RAW PHOTOS<br/>
MAKEUP AND HAIRSTYLE<br/>
INDOOR SHOOT<br/>
<br/>
    </p>
    <Link to='/contactus'>
      <button className="mt-2 text-sm sm:text-2xl transform rounded bg-orange-500 border border-slate-200 px-12 py-2 font-medium text-white hover:text-black transition-colors hover:bg-slate-50 mb-10">PRICE - 12500/-</button>
    </Link>
  </div>

  {/* "Finishing" section */}
  <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-16">
    <div className=" flex justify-center items-center">
      <div class='rounded-xl shadow-xl' style={{ backgroundImage: `url(${GlobalData.Coverimages.PriumPack})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', paddingTop: '100%' }} className="shadow-lg mb-2 bg-gray-50 border-b border-gray-100"></div>
    </div>
    <h3 className="mt-2 text-sm sm:text-2xl transform rounded border border-slate-200 px-12 py-2 font-medium bg-white text-black ">
    PREMIUM PACK
    </h3>
    <p className="font-semibold text-sm text-white bg-yellow-500 p-5 drop-shadow-lg rounded-lg">
    

4 HOUR SHOOT<br/>

5 CHANGES OUTFITS<br/>

25 EDITED PHOTOS<br/>

ALL RAW PHOTOS<br/>

MAKEUP AND HAIRSTYLE <br/>

INDOOR SHOOT<br/>

1 CINEMATIC REEL
    </p>
    <Link to='/contactus'>
    <button className="mt-2 text-sm sm:text-2xl transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-white hover:text-black transition-colors hover:bg-slate-50 mb-10">PRICE - 15000/-</button>
    </Link>
  </div>
</div>

</div>
</section>


        {/* WE BUILD */}
        <section
          style={{
            backgroundImage: `url(${GlobalData.Coverimages.embark})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="cursor-default py-40 flex flex-col items-center justify-center bg-black/70">
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-red-400 tracking-tight ">
              Portfolio
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-5xl md:text-5xl lg:text-5xl bg-clip-text bg-orange-600 tracking-tight ">
              Shoots
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-red-400 tracking-tight ">
              in Hyderabad
              </h2>
            </div>
          </div>
        </section>
     
 {/*Who is it for? */}
 <section>
          <div className="cursor-default px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight text-black">
              Services
              </h2>
              <p className=" cursor-default text-sm sm:text-xl text-gray-900 ">
              <li>Portfolio shoot in Hyderabad</li>
              <li>Actor portfolio photography in Hyderabad</li>
              <li>Model portfolio shoot in Hyderabad </li>
              <li>Best portfolio photography in Hyderabad</li>
              <li>Professional professional portfolio shoot in Hyderabad</li>
              <li>Affordable portfolio shoot in Hyderabad</li>
              <li>Portfolio shoot packages in Hyderabad</li>
              <li>Top portfolio photographers in Hyderabad</li>
              <li>Creative portfolio shoot in Hyderabad</li>
              <li>Stylish portfolio shoot in Hyderabad</li>
              <li>Fashion portfolio shoot in Hyderabad</li>
              <li>Celebrity portfolio photography in Hyderabad</li> 
              <li>Modelling portfolio shoot in Hyderabad</li>
              <li>Bollywood portfolio photography in Hyderabad</li>
              <li>Professional head shot photography in Hyderabad</li>
              <li>Actor headshot photography in Hyderabad</li>
              <li>Modelling headshot photography in Hyderabad</li>
              <li>Creative portrait photography in Hyderabad</li>
              <li>Cinematic portfolio shoot in Hyderabad</li>
              <li>Glamour portfolio shoot in Hyderabad</li>  
              </p>
            </div>
          </div>
        </section>


       
        {/*Line of Engagement */}
        <section
          id="services"
          className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10"
        >
          <div className="xl:max-w-8xl mx-auto px-4">
            {/* Heading for "Line of Engagement" section */}

            <section className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mt-3 ">
              Unlock Your Potential Online
              </h2>
              <p className="text-sm font-medium text-black">
              Navigating the digital world is vital for modeling and finishing school, and SR Portfolios understands this. Our website development services ensure your online presence is not only visually appealing but also strategically optimized. Here's how joining SR Portfolios Modeling and Finishing School benefits you:

              </p>
            </section>

            {/* "Fixed Price Model" section */}
            <div className="flex flex-wrap flex-row -mx-4 text-center">
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={SelfGromming}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Personalized Growth
                  </h3>
                  <p className="text-gray-500 text-sm">
                  At SR Portfolios, we tailor our training to your unique strengths, helping you refine your skills, boost your confidence, and carve your path in the modeling industry. Our personalized approach ensures you develop as an individual, both personally and professionally.

                  </p>
                </div>
              </div>

              {/* "Time and Materials Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={Training}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Industry-Relevant Training
                  </h3>
                  <p className="text-gray-500 text-sm">
                  SR Portfolios provides hands-on experience and industry insights, preparing you for the demands of the modeling and finishing world. Our expert trainers impart knowledge that aligns with current trends and industry expectations, giving you a competitive edge.

                  </p>
                </div>
              </div>

              {/* "On-Time Delivery" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={PersonalGrowth}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Professional Development
                  </h3>
                  <p className="text-gray-500 text-sm">
                  Beyond modeling techniques, we focus on grooming, etiquette, and effective communication. SR Portfolios equips you with the tools to present yourself professionally, whether on the runway or in a boardroom. Our training extends beyond the surface, fostering holistic growth.

                  </p>
                </div>
              </div>

              {/* "Hiring Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={ProfessionalDevelopment}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Supportive Community
                  </h3>
                  <p className="text-gray-500 text-sm">
                  Joining SR Portfolios means becoming part of a supportive community. Connect with fellow aspiring models and individuals who share your dreams and aspirations. Our network becomes your foundation, offering encouragement, mentorship, and lifelong friendships, enhancing your modeling journey.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* "Documentation" section */}
        <section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mt-3  tracking-tight ">
            Need Help ?
          </h2>
          <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
          By choosing SR Portfolios Modeling and Finishing School, you invest in more than just a training program – you invest in a transformative experience that propels you towards a successful and fulfilling career in the world of modeling and finishing.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contactus">
              <button className="text-xs sm:text-sm transform rounded bg-red-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
                FAQ
              </button>
            </Link>
 
              <a href={`tel:${GlobalData.company.companyPhone}`} className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
                Contact us
              </a>
   
          </div>
        </section>
      </main>
      {/*        <a href={`tel:${GlobalData.company.companyPhone}`}></a>
<a href={`mailto:${GlobalData.company.companyEmail}`}></a> */}
    </>
  );
};

export default Home;
