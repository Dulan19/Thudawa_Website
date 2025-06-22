"use client"
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import "./Stylings/Aboutus.css"

function Aboutus() {
  return (
    <div>
      <div className="background1-image"></div>
      <div className="page-content">
        <Navbar />

        <h1 className="aboutus-heading">
          Our Journey Since 1996
          <h6>
            {" "}
            Restoring childhoods, shaping futures — a home where compassion, education, and community
            <br />
            create hope for every child.
          </h6>
        </h1>

        <div className="section-container">
          <div className="intro-section">
            <div className="intro-content-wrapper">
              <div className="intro-image"></div>
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
                    <h3>1996</h3>
                    <p>Founded by the Tudawe family with a vision to provide hope and care for vulnerable children</p>
                  </div>
                  <div className="timeline-image-container timeline-image-1996"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>1997</h3>
                    <p>
                      New two-storied building constructed to accommodate more children and provide better facilities
                    </p>
                  </div>
                  <div className="timeline-image-container timeline-image-1997"></div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3>2004</h3>
                    <p>
                      Study room built with generous donations from German supporters, enhancing educational
                      opportunities
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
                      Playground and butterfly garden added, creating spaces for recreation and connection with nature
                    </p>
                  </div>
                  <div className="timeline-image-container timeline-image-2010"></div>
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
                    <img src="/placeholder.svg?height=80&width=80" alt="Morning prayers" className="routine-image" />
                    <span>Morning prayers and breakfast together</span>
                  </div>
                  <div className="routine-item">
                    <img src="/placeholder.svg?height=80&width=80" alt="School time" className="routine-image" />
                    <span>School and study time</span>
                  </div>
                  <div className="routine-item">
                    <img src="/placeholder.svg?height=80&width=80" alt="Gardening" className="routine-image" />
                    <span>Gardening and caring for our trees</span>
                  </div>
                  <div className="routine-item">
                    <img src="/placeholder.svg?height=80&width=80" alt="Family meals" className="routine-image" />
                    <span>Shared meals and family time</span>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-image">
                  <img src="/placeholder.svg?height=150&width=150" alt="Happy child" className="testimonial-img" />
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
