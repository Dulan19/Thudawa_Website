"use client"
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import "./Stylings/Aboutus.css"

import React, { useState, useEffect } from "react";

function Aboutus() {
  const images1997 = [
    require("../assets/gallery/planing-of-two-storid-new-bulding.jpg"),
    require("../assets/gallery/opening-two-stiard-building.jpg"),
    require("../assets/gallery/opening-two-stiard-building2.jpg"),
    require("../assets/gallery/opening-study-room-tudawe-child-home.jpg"),
    require("../assets/gallery/computer-room-tudawe-.jpg"),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images1997.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="background1-image"></div>
      <div className="page-content">
        <Navbar />

        <h1 className="aboutus-heading">
          Our Journey Since 1995
          <h6>
            Restoring childhoods, shaping futures — a home where compassion, education, and community
            <br />
            create hope for every child.
          </h6>
        </h1>

        <div className="section-container">
          <div className="intro-section">
            <div className="intro-content-wrapper">
              <div className="intro-image-a"></div>
              <div className="intro-text">
                <h2>Our Story</h2>
                <p>
                  Tudawe Children Development Center began as a dream — a safe haven where children who have lost family
                  or support could regain hope, joy, and purpose. For nearly three decades, we've nurtured vulnerable
                  girls with love, shelter, and opportunity.
                </p>
                <p>
                  Tudawe historical house is located in the beautiful village area. The Tudawe Children Development
                  Center premises gathered around the parental House and Property which has enough space for buildings
                  as well as playgrounds. We have to remember Tudawe Family and other initiators who encourage us to
                  donate this nearly half-arced property for making a better world for children.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-section">
            <h2>Our History Timeline</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>1994</h3>
                    <p>The family home built in 1980 was officially transformed into the Tudawe Children Development
                      Center — dedicated to the care and development of children in need.</p>
                  </div>
                  <div className="timeline-image-container timeline-image-1994"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>1995</h3>
                    <p>Due to the matron's dedication, the center's services grew, and more space was required as the
                      number of children increased.</p>
                  </div>
                  <div className="timeline-image-container timeline-image-1995"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>1996</h3>
                    <p>Mrs. Maris Wenaer from Germany funded 10 washrooms, improving daily routines and hygiene for all
                      the children at the center.</p>
                  </div>
                  <div className="timeline-image-container timeline-image-1996"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>1997</h3>
                    <p>
                      Mrs. Ingries Senanayaka and Lions Club Germany helped build a two-story building with new dorms, a
                      library, and a computer room.
                    </p>
                  </div>
                  <div className="timeline-image-container timeline-image">
                    <img
                      src={images1997[currentImageIndex]}
                      alt="1997 events"
                      className="timeline-image"
                    />
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>2004</h3>
                    <p>
                      Mrs. Silvia from Germany and Sunil's friends funded a dedicated Study Room – named 'Sumanasiri
                      Perera Memorial Hall' – enhancing educational opportunities.
                    </p>
                  </div>
                  <div className="timeline-image-container timeline-image-2004"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>2010</h3>
                    <p>
                      Foreign and local donors helped build a swing set, slides, and a butterfly garden for play and
                      joy, creating spaces for recreation and connection with nature.
                    </p>
                  </div>
                  <div className="timeline-image-container timeline-image-2010"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>2021</h3>
                    <p>
                      Successfully started counseling for children in need, supported by the Divisional Secretariat Office and M.D.S.R. Gunathilaka.
                    </p>
                  </div>
                  <div className="timeline-image-container timeline-image-2021"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>2023</h3>
                    <p>
                      The committee funded the construction of a stage, curtains, and a wall, enhancing the center's facilities for events and activities.
                    </p>
                  </div>
                  <div className="timeline-image-container timeline-image-2023"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>2024</h3>
                    <p>
                      Committee efforts led to painting wall art and adding gardening decor with interlock blocks and grasses. Friends donated chairs and tables to the classroom, and solar panels were installed with community support.
                    </p>
                  </div>
                  <div className="timeline-image-container timeline-image-2024"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>2025</h3>
                    <p>
                      Association funds supported the establishment of a computer lab, a new wall, and garden decorations, further enhancing the center's infrastructure and environment.
                    </p>
                  </div>
                  <div className="timeline-image-container timeline-image-2025"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mvv-section">
            <h2>Our Foundation</h2>
            <div className="mvv-grid">
              <div className="mvv-card">
                <div className="mvv-icon">🎯</div>
                <h3>Mission</h3>
                <p>
                  Our mission is to foster, protect and provide, for those
                  <br /> children who have been disowned, neglected, orphaned or abused and to provide all the
                  inhabitants with welfare and guidance.
                </p>
                <h3>මෙහෙවර</h3>
                <p>
                  අනාථ,අසරණ ,අත්හල හා අපයෝජනයට ලක් වු <br />
                  දරුවන්ට, රැකවරණය ,භාරය ,නඩත්තුව , සුබසාධනය සහ <br />
                  පරිවසිකයන්ට නිවැරදි මගපෙන්වීමක් ලබාදීම <br />
                  අපගේ මෙහෙවරයි.
                </p>
              </div>
              <div className="mvv-card">
                <div className="mvv-icon">👁️</div>
                <h3>Vision</h3>
                <p>
                  Our vision is to put an end to the sufferingsof innocent children who are being tampered by social
                  imbalances and injustice; to recreate their childhoods through justice and social equality and through
                  that, create a better future for them.
                </p>
                <h3>දැක්ම</h3>
                <p>
                  අසාධාරණය, යුක්තිය හා සමාජ විෂමතාවයන් මුල්කරගෙන
                  <br /> ,අකාලයේ මුකුලිත වී යන මල් කැකුළු … <br />
                  සාධාරණය යුක්තිය හා සමාජ සාධාරණත්වය ඉදිරියේ <br />
                  විකසිත වී සුවද හමන මල් බවට පත්කරන පැහැදිලි හෙටක් <br />
                  ඇති කිරීම, සුන්දර ළමා ලෝකයක් බිහි කිරීම <br />
                  අපේ දැක්මයි.
                </p>
              </div>
            </div>
          </div>

          <div className="facilities-section">
            <h2>Meet Our Home</h2>
            <div className="facilities-grid">
              <div className="facility-card">
                <div className="facility-img-container facility-img-1"></div>
                <h3>The Parental House</h3>
                <p>The heart of our home where children feel the warmth of family and belonging.</p>
                <div className="facility-fact">
                  Did you know? This historic house has been a beacon of hope for nearly 30 years!
                </div>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-2"></div>
                <h3>Bedrooms & Office</h3>
                <p>Comfortable sleeping quarters and administrative spaces that ensure both rest and organization.</p>
                <div className="facility-fact">Each child has their own personal space to call home.</div>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-3"></div>
                <h3>Study Room</h3>
                <p>A dedicated learning environment built with international support to foster education and growth.</p>
                <div className="facility-fact">Built in 2004 with donations from Germany!</div>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-4"></div>
                <h3>Playground</h3>
                <p>Safe outdoor spaces where children can play, laugh, and simply be kids.</p>
                <div className="facility-fact">Added in 2010 along with our beautiful butterfly garden.</div>
              </div>
              <div className="facility-card">
                <div className="facility-img-container facility-img-5"></div>
                <h3>Kitchen & Garden</h3>
                <p>Where nutritious meals are prepared and children learn valuable life skills through gardening.</p>
                <div className="facility-fact">Each girl has her own tree to care for! 🌱</div>
              </div>
            </div>
          </div>

          <div className="donor-section">
            <h2>Our Gratitude</h2>
            <div className="donor-content">
              <p>
                We extend our heartfelt gratitude to our generous donors and supporters who make our mission possible:
              </p>
              <div className="donor-highlights">
                <div className="donor-card">
                  <h3>Mrs. Maris Wenaer</h3>
                  <p>A dedicated supporter whose contributions have touched countless lives</p>
                </div>
                <div className="donor-card">
                  <h3>Lions International</h3>
                  <p>Providing ongoing support and resources for our children's development</p>
                </div>
                <div className="donor-card">
                  <h3>German Donors</h3>
                  <p>Made our study room possible, opening doors to education and opportunity</p>
                </div>
              </div>
              <div className="donation-call">
                <p>
                  Want to make a difference? Your support can help us continue providing hope, education, and love to
                  vulnerable children.
                </p>
                <button className="donate-btn">Support Our Mission</button>
              </div>
            </div>
          </div>

          <div className="life-section">
            <h2>Life at Tudawe</h2>
            <div className="life-content">
              <div className="daily-routine">
                <h3>A Day in Our Home</h3>
                <div className="routine-grid">
                  <div className="routine-item">
                    <div className="day-img-container day-img-1"></div>
                    <span>weekdays Routine</span>
                  </div>
                  <div className="routine-item">
                    <div className="day-img-container day-img-2"></div>
                    <span>Weekend</span>
                  </div>
                  <div className="routine-item">
                    <div className="day-img-container day-img-3"></div>
                    <span>Gardening and caring for our trees</span>
                  </div>
                  <div className="routine-item">
                    <div className="day-img-container day-img-4"></div>
                    <span>Shared meals commit</span>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-image">
                  
                </div>
                <blockquote>
                  "This place gave me not just a home, but a family. Here, I learned that every ending can be a new
                  beginning."
                </blockquote>
                <cite>- A grateful resident</cite>
              </div>
            </div>
          </div>

          <div className="spiritual-section">
            <h2>Growing Together</h2>
            <div className="spiritual-content">
              <div className="spiritual-item">
                <h3>🌳 Personal Growth</h3>
                <p>
                  Each girl has her own tree to care for, teaching responsibility and the beauty of nurturing life. As
                  the trees grow, so do our children - with patience, care, and love.
                </p>
              </div>
              <div className="spiritual-item">
                <h3>🙏 Spiritual Guidance</h3>
                <p>
                  We provide spiritual support and guidance, helping children find inner strength and peace through
                  their journey of healing and growth.
                </p>
              </div>
              <div className="spiritual-item">
                <h3>🤝 Community Values</h3>
                <p>
                  Our home operates as a close-knit community where every child learns the importance of cooperation,
                  respect, and mutual support.
                </p>
              </div>
            </div>
          </div>

          <div className="closing-section">
            <div className="closing-content">
              <h2>Our Promise</h2>
              <p className="closing-message">
                "Here, childhood is not lost — it's rebuilt with love, care, and second chances."
              </p>
              <p>
                At Tudawe Children Development Center, every day is an opportunity to nurture hope, foster dreams, and
                create futures filled with possibility. Together, we continue this journey of transformation, one child
                at a time.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Aboutus