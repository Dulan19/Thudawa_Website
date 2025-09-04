import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import "../pages/Stylings/Events.css";

import { useState, useEffect } from 'react';

const EventCarousel = ({  images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          className="carousel-nav prev" 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ❮
        </button>
        <button 
          className="carousel-nav next" 
          onClick={goToNext}
          aria-label="Next image"
        >
          ❯
        </button>

        {/* Thumbnail navigation */}
        <div className="carousel-dots">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Events = () => {

  const[showOlderEvents, setShowOlderEvents] = useState(false);

  return (
    <div>
      <div className="background-image-event"></div>
      <div className="page-content">
        <Navbar />

        
        <h1 className="events-heading">
          Events  
        </h1>

        <div className="recent-events-section"></div>
        
        <div className="section-container">
          <div className="intro-section-events">
            <h2>fggiopb</h2>
            <p>On the occasion of Poson Poya Day, with the valuable support of Mrs. Palika Darmawickrama, 
              The Music Teacher of the Thudawa Child Development Centre, and the dedicated efforts of the Centre’s committee, 
              The Thudawa Child Development Centre successfully presented “Bakthi Gee 2025” together with its children
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>2025/08</h2>
            <p>On the occasion of Poson Poya Day, with the valuable support of Mrs. Palika Darmawickrama, 
              The Music Teacher of the Thudawa Child Development Centre, and the dedicated efforts of the Centre’s committee, 
              The Thudawa Child Development Centre successfully presented “Bakthi Gee 2025” together with its children
              {/* 2025/8/ - session from wadduwa library about the reading(new photos from whatsapp) */}
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
            l
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
            <h2>Tharumuthudaru - 2023</h2>
              <EventCarousel 
                    carouselId="shrine-2023"
                    images={[
                      { src: "assets/2023 - Tharumuthudaru/tharumuthudaru - 2023 (1).JPG", alt: "tharumuthudaru 2023 - 1" },
                      { src: "assets/2023 - Tharumuthudaru/tharumuthudaru - 2023 (2).JPG", alt: "tharumuthudaru 2023 - 2" },
                      { src: "assets/2023 - Tharumuthudaru/tharumuthudaru - 2023 (3).JPG", alt: "tharumuthudaru 2023 - 3" },
                      { src: "assets/2023 - Tharumuthudaru/tharumuthudaru - 2023 (4).JPG", alt: "tharumuthudaru 2023 - 4" },
                      { src: "assets/2023 - Tharumuthudaru/tharumuthudaru - 2023 (5).JPG", alt: "tharumuthudaru 2023 - 5" },
                      { src: "assets/2023 - Tharumuthudaru/tharumuthudaru - 2023 (6).JPG", alt: "tharumuthudaru 2023 - 6" },
                      { src: "assets/2023 - Tharumuthudaru/tharumuthudaru - 2023 (7).JPG", alt: "tharumuthudaru 2023 - 7" },
                      { src: "assets/2023 - Tharumuthudaru/tharumuthudaru - 2023 (8).JPG", alt: "tharumuthudaru 2023 - 8" },
                      { src: "assets/2023 - Tharumuthudaru/tharumuthudaru - 2023 (9).JPG", alt: "tharumuthudaru 2023 - 9" },
                    ]}
                  />
              <p> Tharumuthudaru is the annual concert of the All Ceylon BUddhist Congras child care section,which showcases
                  the talents and skills of the children. The event is a celebration of their hard work and dedication, and 
                  it provides an opportunity for the children to express themselves through music, dance, and other performances.
              The concert is a highlight of the year for the children and the community, and it is a testament to the positive impact
              of the children from various child care centers.           
              </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Buddha Shrine Construction & Relic Enshrinement Ceremony - 2023</h2>
              <EventCarousel 
                    carouselId="shrine-2023"
                    images={[
                      { src: "assets/2023 - buduge sadeema/2023-shrine (1).jpg", alt: "shrine1" },
                      { src: "assets/2023 - buduge sadeema/2023-shrine (2).jpeg", alt: "shrine2" },
                      { src: "assets/2023 - buduge sadeema/2023-shrine (3).jpeg", alt: "shrine3" },
                      { src: "assets/2023 - buduge sadeema/2023-shrine (5).jpg", alt: "shrine5" },
                      { src: "assets/2023 - buduge sadeema/dathuthanpath (1).jpeg", alt: "shrine6" },
                      { src: "assets/2023 - buduge sadeema/dathuthanpath (2).jpeg", alt: "shrine7" },
                      { src: "assets/2023 - buduge sadeema/dathuthanpath (3).jpeg", alt: "shrine8" },
                      { src: "assets/2023 - buduge sadeema/dathuthanpath (4).jpeg", alt: "shrine9" },
                      { src: "assets/2023 - buduge sadeema/dathuthanpath (5).jpeg", alt: "shrine10" },
                      { src: "assets/2023 - buduge sadeema/dathuthanpath (7).jpeg", alt: "shrine12" },
                    ]}
                  />
              <p> The new Buddha Shrine at the Tudawe Child Development Centre was officially opened in a special ceremony in 
                2023. The construction was made possible through the generous donations of Mr. and Mrs. Udugahapaththuwa.           
              </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Avurudu Uthsawaya -2023</h2>
              <EventCarousel 
                    carouselId="aurudu uthsawaya-2023"
                    images={[
                      { src: "assets/2022 - loka lama dinaya/2022 World Children Day/childrenday - 2022 (1).jpg", alt: "avurudu1" },
                      
                    ]}
                  />
              <p> The Avurudu Uthsawaa 2023 successfully held on April month of 2023 with the participation of
              all the children of the Thudawa Child Development Centre. The event was filled with traditional games,
              and cultural performances creating a joyful atmosphere for everyone involved.
              </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>World Children's Day -2022</h2>
              <EventCarousel 
                    carouselId="children-day-2022"
                    images={[
                      { src: "assets/2022 - loka lama dinaya/2022 World Children Day/childrenday - 2022 (1).jpg", alt: "avurudu1" },
                      { src: "assets/2022 - loka lama dinaya/2022 World Children Day/childrenday - 2022 (2).jpg", alt: "avurudu1" },
                      { src: "assets/2022 - loka lama dinaya/2022 World Children Day/childrenday - 2022 (3).jpg", alt: "avurudu1" },
                      { src: "assets/2022 - loka lama dinaya/2022 World Children Day/childrenday - 2022 (4).jpg", alt: "avurudu1" },
                      { src: "assets/2022 - loka lama dinaya/2022 World Children Day/childrenday - 2022 (5).jpg", alt: "avurudu1" },
                      { src: "assets/2022 - loka lama dinaya/2022 World Children Day/childrenday - 2022 (6).jpg", alt: "avurudu1" },
                      { src: "assets/2022 - loka lama dinaya/2022 World Children Day/childrenday - 2022 (7).jpg", alt: "avurudu1" },
                    ]}
                  />
              <p> An event for World Children’s Day was organized by the matron and committee members, 
                and was successfully held in October 2022 with the participation of all the children of the 
                Thudawa Child Development Centre. The celebration featured a bonfire and dancing performances by 
                the children, creating a memorable and joyful experience for everyone involved.
              </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Relegious Event - 2022</h2>
              <EventCarousel 
                    carouselId="Relegious-event-2022"
                    images={[
                      { src: "assets/2022 - Relegious Event/image1.jpg", alt: "relegious event - 2022-1" },
                      { src: "assets/2022 - Relegious Event/image2.jpg", alt: "relegious event - 2022-2" },
                      { src: "assets/2022 - Relegious Event/image3.jpg", alt: "relegious event - 2022-3" },
                      { src: "assets/2022 - Relegious Event/image4.jpg", alt: "relegious event - 2022-4" },
                      { src: "assets/2022 - Relegious Event/image5.jpg", alt: "relegious event - 2022-5" }
                    ]}
                  />
            <p> In 2022, the committee, matron, and children of the Tudawe Child Development Centre organized and offered a 
              special meritorious almsgiving to the Buddhist nuns in loving memory of our founding president, Mr. Rohan Tudawe, 
              honoring his life, service, and lasting contributions.
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
                      { src: "/assets/Events/avurudu2022-5.jpg", alt: "avurudu5" },                     
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
      </div>
      
      <div className="toggle-section">
        <button
          onClick={() => setShowOlderEvents(!showOlderEvents)}
          className="toggle-older-events-btn"  
        >
          <span className = "button-icon">
            {showOlderEvents ? '▲' : '▼'}
          </span>
          <span className="button-text">
            {showOlderEvents ? 'Hide Older Events' : 'View All Events'}
          </span>
        </button>
        <p className="toggle-description">
          {showOlderEvents
            ? "Showing all events from our history"
            : "Click to view more events from our archives"}
            </p>
      </div>

      {showOlderEvents &&(
        <div className="older-events-section">

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
            <h2>Bakthi Geetha - 2018</h2>
              <EventCarousel 
                    carouselId="BakthiGeetha-2018"
                    images={[
                      { src: "assets/2018 - bakthi geehta ymba/2018- BakthiGeetha (1).JPG", alt: "bakthigeetha-1,2018" },
                      { src: "assets/2018 - bakthi geehta ymba/2018- BakthiGeetha (2).JPG", alt: "bakthigeetha-2,2018" },
                      { src: "assets/2018 - bakthi geehta ymba/2018- BakthiGeetha (3).JPG", alt: "bakthigeetha-3,2018" },
                      { src: "assets/2018 - bakthi geehta ymba/2018- BakthiGeetha (4).JPG", alt: "bakthigeetha-4,2018" },
                      { src: "assets/2018 - bakthi geehta ymba/2018- BakthiGeetha (5).JPG", alt: "bakthigeetha-5,2018" },
                      { src: "assets/2018 - bakthi geehta ymba/2018- BakthiGeetha (6).JPG", alt: "bakthigeetha-6,2018" },
                      { src: "assets/2018 - bakthi geehta ymba/2018- BakthiGeetha (7).JPG", alt: "bakthigeetha-7,2018" },
                      { src: "assets/2018 - bakthi geehta ymba/2018- BakthiGeetha (8).JPG", alt: "bakthigeetha-8,2018" },
                    ]}
                  />
            <p> On the occasion of Poson Poya Day in 2018, Our Children of the Thudawa Child Development Centre
              performed a Bakthi Geetha concert at Young Members Buddhist Association (YMBA).
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Sportsmeet - 2018</h2>
              <EventCarousel 
                    carouselId="Sportsmeet-2018"
                    images={[
                      { src: "assets/2018 - sportsmeet/2018 - sportsmeet (1).JPG", alt: "sportsmeet-1,2018" },
                      { src: "assets/2018 - sportsmeet/2018 - sportsmeet (2).JPG", alt: "sportsmeet-2,2018" },
                      { src: "assets/2018 - sportsmeet/2018 - sportsmeet (3).JPG", alt: "sportsmeet-3,2018" },
                      { src: "assets/2018 - sportsmeet/2018 - sportsmeet (4).JPG", alt: "sportsmeet-4,2018" },
                      { src: "assets/2018 - sportsmeet/2018 - sportsmeet (5).JPG", alt: "sportsmeet-5,2018" },
                      { src: "assets/2018 - sportsmeet/2018 - sportsmeet (6).JPG", alt: "sportsmeet-6,2018" },
                      { src: "assets/2018 - sportsmeet/2018 - sportsmeet (7).JPG", alt: "sportsmeet-7,2018" },
                    ]}
                  />
            <p> The Sportsmeet 2018 was successfully held in 2018 with the participation of all the children of 
              the Thudawa Child Development Centre. The event was filled with various sports activities and competitions,
              creating a lively and energetic atmosphere for everyone involved. The children showcased their athletic skills.
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Sportsmeet - 2017</h2>
              <EventCarousel 
                    carouselId="childrenday-2013"
                    images={[
                      { src: "assets/2017  - sportsmeet/sportsmeet - 2017 (1).JPG", alt: "suhadahamuwa-1,2013" },
                      { src: "assets/2017  - sportsmeet/sportsmeet - 2017 (1).JPG", alt: "suhadahamuwa-1,2013" }
                    ]}
                  />
            <p> The Sportsmeet 2017 was successfully held in 2017 with the participation of all the children of 
              the Thudawa Child Development Centre. The event was filled with various sports activities and competitions,
              creating a lively and energetic atmosphere for everyone involved. The children showcased their athletic skills .
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
            <h2>Sportsmeet - 2014</h2>
              <EventCarousel 
                    carouselId="Sportsmeet-2014"
                    images={[
                      { src: "assets/Sport meet 2014/sportsmeet2014 (1).JPG", alt: "sportsmeet-1,2014" },
                      { src: "assets/Sport meet 2014/sportsmeet2014 (2).JPG", alt: "sportsmeet-2,2014" },
                      { src: "assets/Sport meet 2014/sportsmeet2014 (3).JPG", alt: "sportsmeet-3,2014" },
                      { src: "assets/Sport meet 2014/sportsmeet2014 (4).JPG", alt: "sportsmeet-4,2014" },
                      { src: "assets/Sport meet 2014/sportsmeet2014 (5).JPG", alt: "sportsmeet-5,2014" },
                      { src: "assets/Sport meet 2014/sportsmeet2014 (6).JPG", alt: "sportsmeet-6,2014" },
                      { src: "assets/Sport meet 2014/sportsmeet2014 (7).JPG", alt: "sportsmeet-7,2014" },
                    ]}
                  />
            <p> The Sportsmeet 2014 was successfully held in 2014 with the participation of all the children of 
              the Thudawa Child Development Centre. The event was filled with various sports activities and competitions,
              creating a lively and energetic atmosphere for everyone involved. The children showcased their athletic skills
              and teamwork, making it a memorable day for all.
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Children's Day - 2013</h2>
              <EventCarousel 
                    carouselId="childrenday-2013"
                    images={[
                      { src: "assets/Zoo Children day celebration 2013/image1.jpg", alt: "zoo-1,2013" },
                      { src: "assets/Zoo Children day celebration 2013/image2.jpg", alt: "zoo-2,2013" },
                      { src: "assets/Zoo Children day celebration 2013/image3.jpg", alt: "zoo-3,2013" },
                      { src: "assets/Zoo Children day celebration 2013/image4.jpg", alt: "zoo-4,2013" },
                    ]}
                  />
            <p> The Department of Probation and Child Care Services organized a special event for all Child Development 
              Centres in the Western Province to celebrate World Children’s Day at the zoo. Our children also showcased a 
              delightful dance performance during the event. It was a joyful and memorable experience for all the children 
              who participated.
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Suhada Hamuwa - 2013</h2>
              <EventCarousel 
                    carouselId="suhadahamuwa-2013"
                    images={[
                      { src: "assets/adishishta suhada hamuwa - 2013/image1.JPG", alt: "suhadahamuwa-1,2013" },
                      { src: "assets/adishishta suhada hamuwa - 2013/image2.JPG", alt: "suhadahamuwa-2-2,2013" },
                      { src: "assets/adishishta suhada hamuwa - 2013/image3.JPG", alt: "suhadahamuwa-2-2,2013" },
                      { src: "assets/adishishta suhada hamuwa - 2013/image4.JPG", alt: "suhadahamuwa-2-2,2013" }
                    ]}
                  />
            <p> "Suhada Hamuwa" is a special event organized by the Tudawe Child Development Centre, with the help of
              the Friends Lanka Child Foundation. To a honor to the Matron of the Thudawa Child Development Centre, 
              Mrs. A.Kirigalla.
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Bakthi Geetha - 2013</h2>
              <EventCarousel 
                    carouselId="Bakthi-2013"
                    images={[
                      { src: "/assets/2013-acbc-bakthi/IMG_20130526_214420.jpg", alt: "bakthi-1,2013" },
                      { src: "/assets/2013-acbc-bakthi/IMG_20130526_223739.jpg", alt: "bakthi-2,2013" }
                    ]}
                  />
            <p> Children of the Thudawa Child Development Centre performed a Bakthi Geetha concert at the All 
              Ceylon Buddhist Congress (ACBC) on May of 2013. 
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

        <div className="section-container">
          <div className="intro-section-events">
            <h2>Tharumuthudaru Annual Concert - 2012</h2>
              <EventCarousel 
                    carouselId="Tharumuthudaru-2012"
                    images={[
                      { src: "assets/2012 - tharumuthu daru/Tharumuthu Daru/DSC09381.JPG", alt: "tharumuthudaru-2012" },
                      { src: "assets/2012 - tharumuthu daru/Tharumuthu Daru/DSC09387.JPG", alt: "tharumuthudaru-2012" },
                      { src: "assets/2012 - tharumuthu daru/Tharumuthu Daru/DSC09458.JPG", alt: "tharumuthudaru-2012" },
                      { src: "assets/2012 - tharumuthu daru/Tharumuthu Daru/DSC09463.JPG", alt: "tharumuthudaru-2012" },
                    ]}
                  />
            <p> Tharumuthudaru is the annual concert of the All Ceylon BUddhist Congras child care section,
              which showcases the talents and skills of the children. The event is a celebration of their hard work and dedication,
              and it provides an opportunity for the children to express themselves through music, dance, and other performances.
              The concert is a highlight of the year for the children and the community, and it is a testament to the positive impact
              of the children from various child care centers.
            </p>
          </div>
        </div>

        <div className="back-to-top-container">
          <button
            onClick = {() => {
              setShowOlderEvents(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="back-to-top-btn"
          >
            Back to Recent Events ↑
          </button> 
        </div>
      </div>
      )}
        
        <Footer />
      </div>
    
  );
};

export default Events;
