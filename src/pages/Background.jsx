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

  const truncatedText3 = "Entrance to Premises Tudawe Chidren Development Center (Tudawe Chidren Home) located  in beautiful  Thalpitiya village in the Panadura Electorate in Kalutara District in Sri Lanka. Although Thalpitiya  is developing rapidly due to globalization you can still fell the  Natural beauty of the  Indian Ocean, Thalpitya Cannal with the genuine worm welcomes of the villagers.In addition the village composite with best class hotels in Sri Lanka which  offers up the ultimate tropical  holiday. tudawe children home location  can visit within one hour from";

  const fullText3 = "Entrance to Premises Tudawe Chidren Development Center (Tudawe Chidren Home) located  in beautiful  Thalpitiya village in the Panadura Electorate in Kalutara District in Sri Lanka. Although Thalpitiya  is developing rapidly due to globalization you can still fell the  Natural beauty of the  Indian Ocean, Thalpitya Cannal with the genuine worm welcomes of the villagers.In addition the village composite with best class hotels in Sri Lanka which  offers up the ultimate tropical  holiday. tudawe children home location  can visit within one hour from the capital Colombo within 1 hour due to the development in the roadnetwork and trasport.If you are using Public passport you can use bus with the destination preferably  Kaluathara  ,  Aluthgama or Mathugama travels in the  Galle Road. If you comming from Colombo,you can get down from the Thalpitya Junction located approximately 3 and half  kilo-meters away from the Panadura Town. Enternce to Daladawaththa TempleEnternce to Daladawaththa TempleAfter walking  around 700m down in the Daladawaththa Road to the Land Side you can see the Daladawaththa Temple.It is a historical temple  provided shelter to safeguard the sacred Tooth Relic of Lord Buddha hidden in a huge tree at the Thalpitiya Temple premises. Then you have to turn Right and walk along the Central road (Mada Para) around 250 m until you see the entrance of the Tudawe Childrean Home. You can use the Train and get down in Pinwattha or Wadduwa Stations  and come to Galle Road.if you are at Pinawattha you have to travel further to Galle direction and If you are at  Wadduwa you have to travel to the direction of Colombo. If you are already in the ….. Happy traverelling and Tudawe Family waiting to see you there… [googlerouteplaner=2]";

  const truncatedText4 = "Tudawe Philanthropist Family During the 18 th century well known Tudawe Family lived in Thalpitiya Wadduwa engaged in religious and social activities in helping the temple and the poor families providing wealth and attending their needs. When the ancestors of the Tudawe philanthropist family passed away, the sons and daughters wanted to look after their business activities operating in Colombo and decided to live in Colombo leaving their old parental house and property at Talpitiya valued millions of Rupees. They went";

  const fullText4 = "Tudawe Philanthropist Family During the 18 th century well known Tudawe Family lived in Thalpitiya Wadduwa engaged in religious and social activities in helping the temple and the poor families providing wealth and attending their needs. When the ancestors of the Tudawe philanthropist  family passed away, the sons and daughters wanted to look after their business activities operating in Colombo and decided to live in Colombo leaving their old parental house and property at Talpitiya valued millions of Rupees. They went Colombo and lived because it was very convenient to run their business enterprises. Late Lawrence Tudawe encouraged the other family members of the Tudawe family to donate the parental House and Property to a religious organization in the Country.A family friend Francis Wanigersekera suggested that the Parental House and Prioperty of Tudawe Family situated lonely at Thalpitiya should be donated to the Buddhists Organisation called Samastha Lanka Bauddha Maha Sammelanaya (All Ceylon Buddhists Congress) in Colombo . At a discussion of all family members decided unanimously to donate their parental house and property to this Religious and Social Organization.";

  const fullText5 = `Thalpitiya Village Thalpitiya is a remote village in the Panadura Electorate in Kalutara District in Sri Lanka. During the 18th 
  century Panadura became a popular Buddhists City as the result of the Historical Panadura Great Controversy held on 26th August by Ven Wadeepasinghe
   Megettuwatta Gunananda Nayaka Thera an erudite Buddhist scholar lived in the country to save Sri Lanka Buddhasasanaya from missionary workers during 
   the 18th Century invasion by the British Government. Thalpitiya village in Wadduwa Police area became very popular among the inhabitants in the past
    as the bhikkus lived in the Thalpitiya temple provided shelter to safeguard the sacred Tooth relic of Lord Buddha hidden in a huge tree at the Thalpitiya
     Temple premises. Subsequently the sacred tooth relics was taken away to down south. Thereafter it was taken to Kandy and kept at the Dalada Maligawa the
      palace of Sri Wickramarajasinghe the last king who was captured by the British Army. So that thalpitiya temple is very precious wealth for the villagers.`;
  
  const truncatedText5 = `Thalpitiya Village Thalpitiya is a remote village in the Panadura Electorate in Kalutara District in Sri Lanka. During the 18th century
   Panadura became a popular Buddhists City as the result of the Historical Panadura Great Controversy held on 26th August by Ven Wadeepasinghe Megettuwatta Gunananda
    Nayaka Thera an erudite Buddhist scholar lived in the country to save Sri Lanka Buddhasasanaya from missionary workers during the 18th Century invasion by the British
     Government. Thalpitiya village in Wadduwa Police area became very popular`;

  return (
    <div>
      <div className="background2-image"></div>
      <div className="page-content">
        <Navbar />

        
        <h1 className="aboutus-heading">
          Background
          
        </h1>

        
        
          
          <div className="section-container">
            <div className="intro-section">
              <h2>Establishment</h2>
                <p>
                Thalpitiya Village Thalpitiya Village is located 31 km away from the central city, Colombo. 
              Though it is close to city center, It has preserved the beauty of the Village, and currently going 
              through a lot of development projects. Let’s see the Beauty of the Village, If you travel by train,you 
              feel the  breeze of the Indian ocean,  you can get down from the Pinwattha or Wadduwa Station and walk
               towards Thalpitiya. On the beach, and there are numerous hotels ready
                {!show1 && "..."}
                {show1 && (
                  <>
                    {" "} Pto provide accommodation in Thapitiya. The five-star Hotel, which is an architectural masterpiece designed
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
                            between the midnight and sunset breeze.<br/>
                  </>
                )}
              </p>
          
                      {show1 && (
                        <div>
                            <ul><li>History</li>
                            <li>Natural Beauty</li>
                            <li>Raja Maha Viharaya</li>
                            <li>Facilities</li></ul><br/>
                            <p>According to the Folklores Thalpitiya village is a land that provided coconut oil for the Kotte Dalada Maligawa where the honorable
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
                            a chat with villagers, and share their views.</p>
                        </div>
                      )}
                
                
                <button className="read-btn"
                onClick={() => setShow1(!show1)}>
                  {show1 ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

          <div className="section-container">
            <div className="intro-section">
              <h2>Establishment</h2>
                <p>
                Under the guidance of Lawrence Tudawe, members of the Tudawe family donated the Parental House and property of the Tudawe Family situated lonely at 
                Thalpitiya donated to the Buddhists Organisation called Samastha Lanka Bauddha Maha Sammelanaya (All Ceylon Buddhists Congress) in Colombo. It is the 
                foundation of the establishment of the Tudawe children's home.
                Tudawe Children's Home has been started with 11 children who have been neglected and orphaned around the Wadduwa area on the 9th, of June 1988
                {!show2 && "..."}
                {show2 && (
                  <>
                    {" "}by donating the property to the All Ceylon Buddhists Congress. It has been registered under…. on 01'st of June 1989. The first matron was 
                    Miss. Yasawathi Jayawardhana. Since 1988 it has been a shelter for nearly 111 girls. most of them are now living in a good position in society. The 
                    children's home is controlled by a board of governors and the children are assigned to the home by the Department of Probation and Child Care Services.
                  </>
                )}
              </p>
          
                      {show2 && (
                        <div>
                          <p>1st matron: Miss Yasawathi Jayawardhana</p>
                          
                            <table>
                              <tr>
                                <th>The first Board of trustees was fallows (1888),</th>
                                <th>Committee Members –</th>
                              </tr>
                              <tr>
                                <td>
                                  <ul>
                                    <li>President                 – Mr.Rohan Tudawe</li>
                                    <li>Vice Presidents      – Mr.Jayakis Tudawe</li>
                                    <li>General Secretary  – Mr. G Harischandra Graru</li>
                                    <li>Treasurer                – Mr. Layanal Hasthanayaka</li>
                                  </ul>
                                </td>
                                <td>
                                  <ul>
                                    <li>Mr.H.D.Soysa</li>
                                    <li>B.D.M.Samanthilaka</li>
                                    <li>Mr.M.D.Oliver Gunathillaka</li>
                                    <li>Mrs.Rathna Somadasa</li>
                                    <li>Mrs.T. Liliyan Silva</li>
                                    <li>Mrs. C de Silva</li>
                                    <li>Mrs. P.E.Gunathilaka</li>
                                  </ul>
                                </td>
                              </tr>
                        
                            </table>
                          
                        </div>
                      )}
                
                
                <button className="read-btn"
                onClick={() => setShow2(!show2)}>
                  {show2 ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          
          <div className="section-container">
            <div className="intro-section">
              <h2>Entrance to Premises</h2>
              <p>
              {show3 ? fullText3 : truncatedText3 + "..."}
              </p>
              <button className="read-btn"
              onClick={() => setShow3(!show3)}>
              {show3 ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
          

          <div className="section-container">
            <div className="intro-section">
              <h2>Tudawe Philanthropist Family</h2>
              <p>
              {show4 ? fullText4 : truncatedText4 + "..."}
              </p>
              <button className="read-btn"
              onClick={() => setShow4(!show4)}>
              {show4 ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          <div className="section-container">
            <div className="intro-section">
              <h2>Thalpitiya Village</h2>
              <p>
              {show5 ? fullText5 : truncatedText5 + "..."}
              </p>
              <button className="read-btn"
              onClick={() => setShow5(!show5)}>
              {show5 ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

        
              

          
          
        

        <Footer />
      </div>
    </div>
  )
}

export default Background
