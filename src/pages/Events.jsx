import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import "../pages/Stylings/Events.css";

import { useState } from 'react';

const EventCarousel = ({ images, carouselId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    let newSlide = currentSlide + direction;
    if (newSlide >= images.length) newSlide = 0;
    if (newSlide < 0) newSlide = images.length - 1;
    setCurrentSlide(newSlide);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-track" 
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.src} alt={image.alt} className="carousel-image"/>
            </div>
          ))}
        </div>
        
        <button className="carousel-nav prev" 
                onClick={() => changeSlide(-1)}>
          ‹
        </button>
        <button className="carousel-nav next" 
                onClick={() => changeSlide(1)}>
          ›
        </button>
        
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div>
      <div className="background-image-event"></div>
      <div className="page-content">
        <Navbar />

        
        <h1 className="events-heading">
          Events
          
        </h1>
        
        <div className="section-container">
          <div className="intro-section-events">
            <h2>fggb</h2>
            <p>On the occasion of Poson Poya Day, with the valuable support of Mrs. Palika Darmawickrama, 
              The Music Teacher of the Thudawa Child Development Centre, and the dedicated efforts of the Centre’s committee, 
              The Thudawa Child Development Centre successfully presented “Bakthi Gee 2025” together with its children
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>2025/07/06 Poshana thinig</h2>
            <p>On the occasion of Poson Poya Day, with the valuable support of Mrs. Palika Darmawickrama, 
              The Music Teacher of the Thudawa Child Development Centre, and the dedicated efforts of the Centre’s committee, 
              The Thudawa Child Development Centre successfully presented “Bakthi Gee 2025” together with its children
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Bakthi Geetha - 2025</h2>
            <p>On the occasion of Poson Poya Day, with the valuable support of Mrs. Palika Darmawickrama, 
              The Music Teacher of the Thudawa Child Development Centre, and the dedicated efforts of the Centre’s committee, 
              The Thudawa Child Development Centre successfully presented “Bakthi Gee 2025” together with its children
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Dansala -2025</h2>
            <p>On the occasion of Vesak Full Moon Poya Day 2025, the Chief Matron, committee members, and children of The 
                  Thudawa Child Development Centre organized a fruit Dansala for the devotees and travelers visiting Vesak celebrations
                   <br />
            
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Bakthi Geetha at ACBC</h2>
            <p>space for the image <br />
            
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Avurudu Uthsawaya -2025</h2>
            <p>space for the image <br />
            
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Avurudu Uthsawaya -2022</h2>
              <EventCarousel 
                    carouselId="Avurudu-2022"
                    images={[
                      { src: "/assets/Events/avurudu2022-1.jpg", alt: "avurudu1" },
                      { src: "/assets/Events/avurudu2022-2.jpg", alt: "avurudu2" },
                      { src: "/assets/Events/avurudu2022-3.jpg", alt: "avurudu3" },
                      { src: "/assets/Events/avurudu2022-4.jpg", alt: "avurudu4" },
                      { src: "/assets/Events/avurudu2022-5.jpg", alt: "avurudu5" },
                      { src: "/assets/Events/avurudu2022-6.jpg", alt: "avurudu6" },
                      { src: "/assets/Events/avurudu2022-7.jpg", alt: "avurudu7" },
                      { src: "/assets/Events/avurudu2022-8.jpg", alt: "avurudu8" },
                      { src: "/assets/Events/avurudu2022-9.jpg", alt: "avurudu9" },
                      { src: "/assets/Events/avurudu2022-10.jpg", alt: "avurudu10" },
                      { src: "/assets/Events/avurudu2022-11.jpg", alt: "avurudu11" },
                    ]}
                  />
            <p> The Avurudu Uthsawaa 2022 successfully held on April month of 2022 with the participation of
              all the children of the Thudawa Child Development Centre. The event was filled with traditional games,
              and cultural performances creating a joyful atmosphere for everyone involved.
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Avurudu Uthsawaya -2021</h2>
              <EventCarousel 
                    carouselId="Avurudu-2021"
                    images={[
                      { src: "/assets/Events/avurudu2021-1.jpg", alt: "avurudu1" },
                      { src: "/assets/Events/avurudu2021-2.jpg", alt: "avurudu2" },
                      { src: "/assets/Events/avurudu2021-3.jpg", alt: "avurudu3" },
                      { src: "/assets/Events/avurudu2021-4.jpg", alt: "avurudu4" },
                      { src: "/assets/Events/avurudu2021-5.jpg", alt: "avurudu5" },
                      { src: "/assets/Events/avurudu2021-6.jpg", alt: "avurudu6" },
                      { src: "/assets/Events/avurudu2021-7.jpg", alt: "avurudu7" },
                      { src: "/assets/Events/avurudu2021-8.jpg", alt: "avurudu8" },
                      { src: "/assets/Events/avurudu2021-9.jpg", alt: "avurudu9" }
                    ]}
                  />
            <p> The Avurudu Uthsawaa 2021 was organized by the matron and committee members, 
              and was successfully held in April 2021 with the participation of all the children of 
              the Thudawa Child Development Centre. The celebration was filled with traditional games and 
              cultural performances, creating a joyful and festive atmosphere for everyone involved.
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Get together - 2015</h2>
            <p>In March 2015, a special reunion was held at the Tudawe Children Development Centre, 
              bringing together children who have grown up there since 1991. The event was thoughtfully organized by 
              the current residents at the time, inspired by the vision of their chief matron. Many of the former children, 
              now adults, have completed their education and built their own families and lives. 
              This heartfelt gathering celebrated their journeys and the enduring bonds of the Tudawe family.           
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Visit by Rotaract Club of Faculty of Science, UOC</h2>
                    <img src="/assets/Events/rotaractuoc.jpg" 
                        alt="Annual Pirith Pinkama 2013" 
                        className="event-image-img"/>
                <p> In 2016, the Rotaract club of the Faculty of Science, University of Colombo, spent a joyful afternoon
                  with the children at Thudawa Children's Home. The visit was filled with music, dancing, laugher, and touch
                  of science including an exciting "Elephant toothpaste" experiment and fun card magic tricks. The Rotaract
                  members also brought thoughful gifts for the children, creating a day full or warmth, learning, and happy 
                  memorial for everyone involved.</p>  
                <p>Read more :
                          <a href="https://uocfosrotaract.wordpress.com/2016/03/17/joy-of-smile/" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             style={{ color: '#d98324', textDecoration: 'none' }}>
                          View original post at UOC Rotaract page
                        </a>
                      </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
              <h2>Annual Pirith Pinkama -2013</h2>
                    <img src="/assets/Events/Annual2013.jpg" 
                        alt="Annual Pirith Pinkama 2013" 
                        className="event-image-img"/>
                <p>The Child Devleopment Centre paying gratitude committed merits on the late members of the Board of Trustess of 
              Our Centre who demised from by holding a Annual Pirith pinkama and arms giving. In addition all the ancestors of 
              Tudawe philonthropic family were committed merits by the alms giving on behalf of 10 Buddhist monks at 12th of
              May 2013 <br />
                  The members passed away were,
                  <ul>  
                    <li>R.K.Perera</li>
                    <li>Former Secretary Sumanasiri Perera</li>
                    <li>Former Vice President M.K.Perera</li>
                    <li>Former Librarian Mrs K.A. Silva.</li>
                  </ul>
                </p>
          </div>
        </div>


        

        <Footer />
      </div>
    </div>
  )
};

export default Events;
