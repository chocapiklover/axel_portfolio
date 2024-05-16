

import Navbar from './components/navbar'
import { FaExternalLinkAlt } from 'react-icons/fa';
import  ContactSection  from './components/contactSection'



function App() {

  const recentWorks = [
    { title: "5 No-Code SAAS Startups That Are Making $100,000+ a Month", videoSrc: "https://www.youtube.com/embed/KBFKTeFIQws?si=b4zVwzKP8wngF2V3", link: "https://youtu.be/KBFKTeFIQws?si=UsLOuaIJqnB3ndl2" },
    { title: "6 Ways Alcohol Is Slowly Killing You - ", videoSrc: "https://www.youtube.com/embed/WXstOWgUN98?si=9YFwJPyO6v238QAR", link: "https://youtu.be/WXstOWgUN98?si=8lSsIbxanlxdfvba" },
    { title: "Best No-Code Tools 2024 - Hook", videoSrc: "https://www.youtube.com/embed/rAYajO90J3c?si=TVhi3uE-jA99xm8y&amp;controls=0", link: "https://youtu.be/rAYajO90J3c?si=PKmOSrzG8s8FhkL4" },
    { title: "5 AI No-Code Copywriting Tools - ", videoSrc: "https://www.youtube.com/embed/lT59B2P_X5I?si=KCDcxa2nDUFhn1R0", link: "https://youtu.be/lT59B2P_X5I?si=ImFLfxkLEkVq30II" },
  ];
  
  const testimonials = [
    {
      title: "Lawn Care Life",
      quote: "Axel is a very skilled editor. I also appreciate his willingness to follow instructions and his fantastic communication. Highly recommended.",
      image: "./channels4_profile2.jpeg" // Replace with actual image URL
    },
    {
      title: "Gleb kras",
      quote: "Fast turn around and great communication. Thank you for your work Axel",
      image: "./channels4_profile.jpg" // Replace with actual image URL
    },
    
  ];

  return (
    <>
   <Navbar /> {/* Moved the Navbar outside the main divs to position it absolutely */}

   <div>
      <div id='home' className="bg-black relative w-full h-screen z-10 overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover opacity-50" autoPlay muted loop playsInline>
          <source src="./background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='relative flex mx-8 items-center text-left px-4' style={{ height: '100vh' }}> {/* Full viewport height */}
          <div className='flex flex-col items-center justify-center w-full'> {/* Center content vertically and horizontally */}
            <h1 className="text-3xl text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">From Vision to Screen, Crafting:
              <span className="sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-teal-300 animate-gradient bg-[length:200%_200%]">
                {' '} Cinematic Masterpieces 
              </span>
              <div className='relative'>
              <a href="#contact" >
                <button className="absolute border-transparent left-0 btn bg-gradient-to-r my-10 from-blue-300 to-teal-300 text-white font-bold py-1 px-4 rounded-xl hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-400 transition duration-900 ease-in-out hover:border-transparent">
                  Contact Me
                </button>
              </a>
              </div>
            </h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id='about' className="bg-black hero py-60">
        <div className="hero-content flex-col lg:flex-row mx-3">
          <img src="./pfp.jpg" className=" max-w-64 shadow-2xl opacity-90 mask mask-hexagon" />
          <div className="mt-10 lg:mt-0 lg:ml-10">
            <h1 className="text-5xl font-bold text-gray-200">
              Looking for a video editor who gets 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300"> your vision?</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-300 leading-relaxed font-thin mt-4">
              With over 4 years of Premiere Pro experience, I turn raw footage into compelling stories. From promotional videos to social media content, I deliver high-quality results that exceed expectations.
            </p>

          </div>
        </div>
      </div>

      {/* testimonial  */}

      <div className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto text-center px-3">
        <h1 className="text-4xl md:text-6xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-teal-300 animate-gradient bg-[length:200%_200%] ">What My Clients Say</h1>
        <p className="text-lg text-gray-200 leading-relaxed font-thin mt-4 ">
          Hear from some of our satisfied clients who have experienced my top-notch video editing services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.title} 
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-200  font-semibold">{testimonial.title}</h3>
              <p className="text-gray-200 leading-relaxed font-thin mt-4">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      

      {/* numbers section  */}
      <div className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto text-center my-">
        <h1 className="text-5xl font-bold px-3">My business in numbers</h1>
        <p className="text-gray-300 mt-4 mb-16 px-3 font-thin text-xl">
        My commitment to excellence is reflected in the numbers. 
        <br />
        Here’s a snapshot of my achievements and the impact I've made.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-3">
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">4+</h2>
            <p className="text-gray-200 mt-2 text-lg font-thin">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">100%</h2>
            <p className="text-gray-200 mt-2 text-lg font-thin">Job Success Rate on Upwork</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">5 </h2>
            <p className="text-gray-200 mt-2 text-lg font-thin">Star Rated on Upwork</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">2M+</h2>
            <p className="text-gray-200 mt- text-lg font-thin">Social media views and engagements across various platforms</p>
          </div>
        </div>
      </div>
    </div>

      {/* Feature Section */}
      <div className="bg-black text-white py-60">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-3">
          <div className="flex-1 flex items-center justify-center">
            <img 
              src="./premier.jpg" 
              alt="Video Editor at work" 
              className="rounded-lg h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-16 self-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-teal-300 animate-gradient bg-[length:200%_200%]">
                Efficient
              </h1>
              <p className="max-w-2xl text-lg text-gray-400 leading-relaxed font-thin mt-4">
                Quick turnarounds and seamless video editing, ensuring your vision comes to life with precision.
              </p>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-teal-300 animate-gradient bg-[length:200%_200%]">
                Professional
              </h1>
              <p className="max-w-2xl  text-lg text-gray-400 leading-relaxed font-thin mt-4">
                High-quality, captivating videos crafted with meticulous attention to detail.
              </p>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl  font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-teal-300 animate-gradient bg-[length:200%_200%]">
                Experienced
              </h1>
              <p className="max-w-2xl text-lg text-gray-400 leading-relaxed font-thin mt-4">
                Years of expertise in creating compelling stories that leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      
      {/* Services Section */}
      <div id='services' className="bg-black text-white py-60 ">
        <div className="text-center  mx-2 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold">I can help you with</h1>
        </div>
        <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-40 ">
          <div className="text-center">
            <img 
              src="./timeline.jpg" 
              alt="Editing" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold  text-gray-200">Editing</h2>
            <p className="max-w-2xl text-lg text-gray-400 leading-relaxed font-thin mt-4">
              Professional editing to transform your raw footage into polished videos that tell your story.
            </p>
          </div>
          <div className="text-center">
          <div className="diff ">
            <div className="diff-item-1 w-full h-48 object-cover mb-4">
              <img alt="daisy" src="./before.jpg" className='h-fill rounded-lg' />
            </div>
            <div className="diff-item-2 w-full  object-cover mb-4">
              <img alt="daisy" src="./after.jpg " className='h-fill rounded-lg' />
            </div>
            <div className="diff-resizer"></div>
          </div>
            <h2 className="text-2xl font-bold text-gray-200">Color Correction</h2>
            <p className="max-w-2xl text-lg text-gray-400 leading-relaxed font-thin mt-4">
              Enhance your videos with expert color correction, bringing your visuals to life.
            </p>
          </div>
          <div className="text-center">
            <img 
              src="./sound.jpg" 
              alt="Sound Design" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold  text-gray-200">Sound Design</h2>
            <p className="max-w-2xl text-lg text-gray-400 leading-relaxed font-thin mt-4">
              Craft immersive soundscapes that perfectly complement your visuals.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* recent work  */}
    
    <div id='work' className="bg-black text-white py-28">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Recent Work</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentWorks.map((work, index) => (
          <div key={index} className="relative group mx-2">
            <iframe
              src={work.videoSrc}
              title={work.title}
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-48 object-cover rounded-lg mb-4"
            ></iframe>
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-lg font-bold">{work.title}</h2>
              <a href={work.link} className="text-gray-400 hover:text-white transition-colors">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    
    <ContactSection />
  
    
  </>
  )
}

export default App
