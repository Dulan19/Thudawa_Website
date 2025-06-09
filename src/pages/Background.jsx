"use client"
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import "./Stylings/Background.css"

function Background() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  return (
    <div>
      <div className="background1-image"></div>
      <div className="page-content">
        <Navbar />

        
        <h1 className="aboutus-heading">
          sdfsdfsdf
          <h6>
            
           fsdfsd
            <br />
            sdfsdf
          </h6>
        </h1>

        
        <div className="section-container">
          <div className="intro-section">
            <h2>Thalpitiya Village</h2>
            <p>Thalpitiya Village Thalpitiya Village is located 31 km away from the central city, Colombo. 
              Though it is close to city center, It has preserved the beauty of the Village, and currently going 
              through a lot of development projects. Let’s see the Beauty of the Village, If you travel by train,you 
              feel the  breeze of the Indian ocean,  you can get down from the Pinwattha or Wadduwa Station and walk
               towards Thalpitiya. On the beach, and there are numerous hotels ready...</p>
            <button onClick={() => setShow1(!show1)}>{show1 ? "Show Less" : "Read More"}
            </button>
            {show1 && <p>to provide accommodation in Thapitiya. The five-star Hotel, which is an architectural masterpiece designed
                      by Jeffry Bawa stands facing the Indian Ocean. It offers a great service to the customers including meals, 
                      rooms, spa and other facilities such as sports and travel arrangements. There are many players ready to provide
                        the service as a tailor made solution which ultimately makes you comfortable even if you are there for a short period.
                      The unique icon that proves that you reach  Thalpitiya is the Thalpitiya Channel, which has 3 bridges, two railway 
                      bridges, and the Galle Road bridge within a short distance near the beach.  It is one of the best places to watch the 
                        sunset. The channel was built in the period of the British who governed Sri Lanka to transport goods such as, tea timber
                            inside the country as well as to Colombo linking another channel network.

                                You can rest in the delta of Thalpitiya Cannel surrounded by coconut trees and shrubs (mangrove swamps) down the channel 
                                      and have nice photos while moving by train. The popular seen is fishing on the channel using small boats and traditional 
                        fishing rods. It is great if you can have a ride on these small boats and go inside the country to south Bolgoda Lake although 
                        it is a little bit risky. The area is surrounded by mangroves, lagoon, and other indigenous trees which make a natural habitat 
                        for birds and animals. You can pluck coconuts bent to the river and taste the water inside.

                      In the morning, it is wonderful to see the fishermen’ going to catch fish and meet their customers on the beach bargaining 
                        prices .you can see pulling nets by lots of people reciting traditional songs, and you can also join them, supporting and 
                      sharing their happiness after hard work. Now, you can relax under the shadows of coconut trees on the beach and feel the difference 
                            between the midnight and sunset breeze.

                        History
                        Natural Beauty
                        Raja Maha Viharaya
                        Facilities
                        According to the Folklores Thalpitiya village is a land that provided coconut oil for the Kotte Dalada Maligawa where the honorable
                        tooth relic was placed those days.

                          Although this land is called Thalpitiya at present, it was called Thelpitiya or Thelwaththa then usually a village is named due to 
                          several reasons. A land full of Palmyra trees may be named Thalpitiya. But today there is no Palmyra plantation in this village. But
                          there is evidence to justify this village was named Thelpitiya.

                          This area is full of coconut plantations. And was found a number of oil-extracted mills within an area of four square miles Thus it
                          provides reasonable evidence the name Thelpitiya is converted to Thalpitiya. Today  Thalpitiya is well known in the Panadura area.

                          Nowadays Thalpitiya is evolved as a famous village in various areas.

                          Take a bike or you can walk inside the village. Coconut is a plant that is fully integrated with the seaside lifestyle and Sri Lankans 
                          tend to utilize each part of the tree for different purposes. Thalpitiya is famous for producing coconut oil using a tool called Sekkuwa 
                          which is made by two stones touching each other and pulled by bulls in a circle. It has been designed in such a way, that the dried content
                          (is) put into the space, and due to the pressure in between stones the oil in the dried coconut will be extracted and poured into the baskets.

                          Toddy tapping is a major industry, in Thalpitiya and is famous due to natural toddy production. Although it is a nice experience to watch The 
                          Toddy Trapper tend to risk their life while going through the ropes linking trees everyday morning to collect toddy and bring them to down. 
                          Fresh toddy is used to create old arrack. While having a walk you can experience the village foods, rice, and curry with fruits for dessert
                          and experience the tastes of coconut and coconut oil, coconut milk.

                          The unique iconic symbol for Thalpitya is the Thalpitiya Raja Maha Viharaya. The Buddhist culture expresses the nature of the human mind reducing 
                          attachments. You can step towards meditation under the boa tree, and understand the reality of the Buddhist philosophy.

                          Thalpitiya Raja Maha Viharaya

                          The closest town, Wadduwa is famous for native Doctors, although few of them remain, you can see the 
                          traditional houses they lived while walking. You can rent a Bike to ride around Wadduwa. When you go you will see inside the buried paddy fields, 
                          which are half converted into lagoons ,,provide nets for birds and burros for small animals like rabbits, hedgehogs etc. You can climb a small mountain 
                          area while go ing through Moronthuduwa Road and get a real adventure experience.

                          With the time,Thalpitiya has modernized with new facilities, with the influence of the transportation. In Wadduwa most of the local banks are available 
                          with ATM facilities. Fresh foods, vegetables, fruits, fish or meat form Market or Food City .Even medicines you can buy from there. We invite you to have 
                            a chat with villagers, and share their views.</p>}
          </div>

          
        

          
          <div className="mvv-section">
            <h2>dfgfdgdfg</h2>
            <div className="mvv-grid">
              <div className="mvv-card">
                <div className="mvv-icon">🎯</div>
                <h3>fdgdfgd</h3>
                <p>
                  dfgfdgfdg
                </p>
                <h3>මෙහෙවර</h3>
                <p>
                  dfgfdg
                </p>
              </div>
              <div className="mvv-card">
                <div className="mvv-icon">👁️</div>
                <h3>Vision</h3>
                <p>
                 dfgfdgdf
                 </p>
                <h3>දැක්ම</h3>
                <p>
                  dfgdfgdfg
                </p>
              </div>
              
            </div>
          </div>

          
          <div className="facilities-section">
            <h2>gdfgdfg</h2>
            <div className="facilities-grid">
              <div className="facility-card">
                <div className="facility-image">🏠</div>
                <h3>gdfgdfgdfg</h3>
                <p>dfgfdgdf</p>
                <div className="facility-fact">
                  dfgdfgfd
                </div>
              </div>
              <div className="facility-card">
                <div className="facility-image">🛏️</div>
                <h3>dfgfdgfdg</h3>
                <p>dfgdfg</p>
                <div className="facility-fact">dgdfgdfg</div>
              </div>
              <div className="facility-card">
                <div className="facility-image">📚</div>
                <h3>dgdfgdf</h3>
                <p>gddfgfdg.</p>
                <div className="facility-fact">dfgfdgdf</div>
              </div>
              <div className="facility-card">
                <div className="facility-image">🎮</div>
                <h3>fgdgdfg</h3>
                <p>fdgfdgdf</p>
                <div className="facility-fact">dgfdgd</div>
              </div>
              <div className="facility-card">
                <div className="facility-image">🍳</div>
                <h3>dgdfg</h3>
                <p>dgfdgdf</p>
                <div className="facility-fact">fdgdfg</div>
              </div>
            </div>
          </div>

          
          <div className="donor-section">
            <h2>fdgfdg</h2>
            <div className="donor-content">
              <p>
                dfgfdg
              </p>
              <div className="donor-highlights">
                <div className="donor-card">
                  <h3>dfgdf</h3>
                  <p>dfgfd</p>
                </div>
                <div className="donor-card">
                  <h3>fgdd</h3>
                  <p>dfgdf</p>
                </div>
                <div className="donor-card">
                  <h3>fdg</h3>
                  <p>dfgd</p>
                </div>
              </div>
              <div className="donation-call">
                <p>
                  dfgd
                </p>
                <button className="donate-btn">fdgd</button>
              </div>
            </div>
          </div>

          
          <div className="life-section">
            <h2>dfgfd</h2>
            <div className="life-content">
              <div className="daily-routine">
                <h3>fdgd</h3>
                <div className="routine-grid">
                  <div className="routine-item">
                    <span className="routine-icon">🌅</span>
                    <span>dggd</span>
                  </div>
                  <div className="routine-item">
                    <span className="routine-icon">📖</span>
                    <span>dfg</span>
                  </div>
                  <div className="routine-item">
                    <span className="routine-icon">🌱</span>
                    <span>dfg</span>
                  </div>
                  <div className="routine-item">
                    <span className="routine-icon">🍽️</span>
                    <span>dfg</span>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <blockquote>
                  content
                </blockquote>
                <cite>sub contebnt</cite>
              </div>
            </div>
          </div>

          
          <div className="spiritual-section">
            <h2>topic</h2>
            <div className="spiritual-content">
              <div className="spiritual-item">
                <h3>topic</h3>
                <p>
                  content
                </p>
              </div>
              <div className="spiritual-item">
                <h3>topic</h3>
                <p>
                 content
                </p>
              </div>
              <div className="spiritual-item">
                <h3>topic</h3>
                <p>
                  contenbt
                </p>
              </div>
            </div>
          </div>

          
          <div className="closing-section">
            <div className="closing-content">
              <h2>topic</h2>
              <p className="closing-message">
                content
              </p>
              <p>
                
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Background
