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
      <div className="background2-image"></div>
      <div className="page-content">
        <Navbar />

        
        <h1 className="aboutus-heading">
          Behind Us
          
        </h1>

        <div className="section-container">
          <div className="intro-section">
            <h2>our band</h2>
            <p>space for the image
            </p>
          </div>
        </div>

        <div className="section-container">
          <div className="intro-section">
            <h2>our band</h2>
            <p>space for the image <br />
            This is a showcase of our talents as at 2023 , We would like to thank all the teachers and volunteers 
            helped to upskill our hidden talents in arts and crafts. Lets help to make products to support our home. 
            Our talent in the acting …. This is a showcase of the structures we created during the inter home competitions in 2017 and 2018
            </p>
          </div>
        </div>
        
        <div className="section-container">
          <div className="intro-section">
            <h2>We Dance-Show Colors</h2>
            <p>We Dance-Show Colors Tudawe  Children has developed there presentation skills over time under the guidance of  dancing teacher ,Miss Nuwandi Nilangni in 
              children’s dance center.She is overall talented in designing dancing show,designing dancing dress,makeup and signing and playing instruments .She is always 
              behind the dancing talent of  these girls and we had a great gratitude on her . Tudawe  Children has developed there presentation skills over time under the 
              guidance of  dancing teacher ,Miss Nuwandi Nilangni in children’s dance center.She …</p>
            <button onClick={() => setShow1(!show1)}>{show1 ? "Show Less" : "Read More"}
            </button>
            {show1 && <p> is overall talented in designing dancing show,designing dancing dress,makeup and signing and playing instruments .She is always behind the dancing 
              talent of  these girls and we had a great gratitude on her .
              Inmates of the Centre staged “Coconut Shell Dance” for the “Tharu Muthu Daru” to commemorate the International Children Day held at Kularatna Hall at Ananda College . This 
              show was sponsored by the  All Ceylon Buddhist Congrss.
              Children had a great opportunity to show there talent to distinguish crowed present there and and strengthen there talent in there skills with this opportunity.
              Western Province Children Development Center’s  talent show and the get together held last October paperel to  World Children’s Day.It was organized by Department of Probation 
              and Child Care Services,Western Province .Young girls in tudawe Children Home displaced there talents in….
              
              </p>}
          </div>

          <div className="section-container">
          <div className="intro-section">
            <h2>space for income certificate phiot</h2>
            <p>hfgh.</p>
            <button onClick={() => setShow2(!show2)}>{show2 ? "Show Less" : "Read More"}
            </button>
            
              
              
          </div>
          </div>

          <div className="section-container">
          <div className="intro-section">
            <h2>Thudawe Daruwo – Talent Show</h2>
            <p>Thudawe Daruwo – Talent Show   With the objective of encouraging the extracurricular activities of the inmate’s Entertainment show called “ THUDAWE DARUWO ” was 
              staged at the Wadduwa Wijaya Kumaratunga Auditorium on 17-03-2012. It was a very successful Entertainment show held due to the cooperation and assistance of the Dancing 
              Teacher. It was initiated as a request from the girls and Bord of trustees has taken effort by fund rising ,message passing and coordinating the ceremony with souvenirs 
              ,inviting …</p>
            <button onClick={() => setShow3(!show3)}>{show3 ? "Show Less" : "Read More"}
            </button>
            {show3 && <p>  guest and managing ,sound ,lighting and supportive dancing teams.From the talent show they have reflect there harmony , sharing happiness and work toward
               same goal sane as from one mother.It has become a great opportunity to reflect the hidden talents of these children.


              List of Events
              <ol>
                  <li>Puuja Dance</li> 
                  <li>Theme Song</li>
                  <li>Wirodi Wannama</li>
                  <li> Dance for song “Sudu Sanda Eliye”</li>
                  <li>Gajaba Wannama</li>
                  <li>Sura Pappa ,Jim Pappa (Astrix ) Drama</li>
                  <li>Coconut Sell Dance</li>
                  <li>Tea Plucker Dance</li>
                  <li>Nanu Muraya</li>
                  <li>Tamil Dance</li>
                  <li>Raban Dance</li>
                  <li>Wadiga Patuna</li>
                  <li>Hindi Dance</li>
                
              </ol>
              </p>}
          </div>
          </div>

          <div className="section-container">
          <div className="intro-section">
            <h2>We Play – We Win</h2>
            <p>We Play – We Win Our talents are not bound only to conventional education. When we play we win there. we could achieve the top level of various 
              sectors such as sports. The inmates of the Tudawe Child Development Home participated in the sport meets organized by the Western Province Childcare 
              and Probation Dept.                 They won the following events;     First Place Kalutara District Sports Meet held in 2010   Runners up …</p>
            <button onClick={() => setShow4(!show4)}>{show4 ? "Show Less" : "Read More"}
            </button>
            {show4 && <p> Our talents are not bound only to conventional education. When we play we win there. we could achieve the top level of various sectors such as sports.
              The inmates of the Tudawe Child Development Home participated in the sport meets organized by the Western Province Childcare and Probation Dept.enfant_51  <br />           
              
              They won the following events;  
              <ol>
                First Place Kalutara District Sports Meet held in 2010
                Runners up Kalutara District in 2011
                First Place in Kalutara District 2012
                First Place in Western Province 2012 
              </ol>
              <br />The inmates’ participated at the Annual Sports Meet Organized by the Sammastha Lanka Baudha Sammelanaya in 2013 Inter House Sport Meet held in Colombo Inmates of 
              the Tudawe Child Development Centre participated and won the following events. <br />

              Winnings – Sports Meets held in  2011 Kalutara District
              <ol>
                <li>Under 8-10 yrs Gunny Bag Race – First Place</li>
                <li>Under 11-13 yrs High Jump – First Place</li>
                <li>Under 8-10 yrs Relay Race for Girls – First Place</li>
                <li>Under 8 -10 yrs 50o Meters Race- First Place</li>
                <li>Mixed Races Senior B -Division – First Place</li>
                <li>Dancing Competition Junior Division – First Place</li>
                <li>Poetry Competition Senior B Division – First Place</li>  
              </ol>
                <br />Winnings – Sports Meets held in  2009 – Western Province
              <ol>
                <li>Coconut leaves weaving competition – First Place</li>
                <li>Marking eye on Elephant Competition – First Place</li>  
              </ol>  
                </p>}
              
          </div>
          </div>

          <div className="section-container">
          <div className="intro-section">
            <h2>Tudawe Brothers (Pvt) Ltd</h2>
            <p>Tudawe Brothers (Pvt) Ltd The ancestral home of the Tudawe family was donated on 09th June 1988 to serve as a Home to take care of destitute girls in and around
               the Wadduwa area. Presently the Home accommodates around 41 girls and since its inception, has benefited over 100 children, providing a comfortable home environment.
                We are proud to record that these children have left the Home to become successful in society.   Tudawe Brothers was the brainchild of the … </p>
            <button onClick={() => setShow5(!show5)}>{show5 ? "Show Less" : "Read More"}
            </button>
            {show5 && <p> late Mr. Lawrence de S Tudawe,with a Diploma in Building Construction from Ceylon Technical College and his brother, 
              the late Mr. Dionysius de S Tudawe, who had a passion for the construction field.
              In 1942, the brothers identified the need for a stable construction firm in Sri Lanka and formed Tudawe Brothers as a partnership.
              Subsequenlty,it was converted into a limited liability company in 1947 as Tudawe Brothers Limited,under the Companies Ordiance of 1938.
              The company was established as a family business and grew to become one of Sri Lanka’s premier construction engineering firms, offering end-to-end 
              construction solutions on par with international quality standards.
              The ancestral home of the Tudawe family was donated on 09th June 1988 to serve as a Home to take care of destitute girls in and around the Wadduwa area.
              Presently the Home accommodates around 41 girls and since its inception, has benefited over 100 children, providing a comfortable home environment. We are
                proud to record that these children have left the Home to become successful in society.

              Tudawe Brothers (Pvt) Ltd Website : http://www.tudawe.com/</p>}
          </div>
          </div>

          <div className="section-container">
          <div className="intro-section">
            <h2>Friends Kinderhilfe International e.V.</h2>
            <p>Friends Kinderhilfe International e.V. FRIENDS Kinderhilfe International e.V. has addressed the heed „friend“ for children in Sri Lanka who need our help to 
              give them a chance of a better future. As registered non-profit association we are getting involved with a manageable and transparent organization helping children
               to find a home, but primarily a life with promising prospects. FRIENDS would like to be a „good friend” of the smallest and weakest in Sri Lanka. For years we have 
               been getting … </p>
            <button onClick={() => setShow5(!show5)}>{show5 ? "Show Less" : "Read More"}
            </button>
            {show5 && <p> involved on the spot offering lasting programs and projects to support education and training of street children and orphans 
              as well as children of poor families. Oriented to the demands of children we strengthen our efforts in order to offer children in the third
               world country Sri Lanka a future.
              Our organization was founded in 1994 and has addressed the task to give abandoned and poor children and orphans in Sri Lanka a better life. As registered
              and accredited non-profit association, located in Göppingen, we have presently more than 200 members who share the „idea of friendship“ – reflecting the 
              aim of FRIENDS Kinderhilfe International e.V. – with us and form the basis of our activities by membership, sponsorship or personal engagement.
              For more than fifty years, Germany has lend a helping hand to the people of Sri Lanka. Official development cooperation-projects laid the foundation in the
              1950s. But as Germans started to travel to Sri Lanka in growing numbers, hundreds of private projects contributed to an impressive network of cooperation – 
              and friendship.
              Friends Kinderhilfe International e.V. Website : https://www.friends-kinderhilfe.de/index.php/en German Embassy in Colombo,Project Locations
              in Sri Lanka :Reference :http://germanyhelpinghands.lk/projects.php?id=431&project=Tudawe-Girls-Home</p>}
          </div>
          </div>

          <div className="section-container">
          <div className="intro-section">
            <h2>List of individual donor including Kusuma Paranagama, Swarna Padmini Thisera ,Soma Gunatilleka and Chitra Wijesekera who support for us for our education and facilities.</h2>
            <p>List of individual donor including
              <ul>
                <li>Kusuma Paranagama</li>Kusuma Paranagama, Swarna Padmini Thisera ,Soma Gunatilleka and Chitra Wijesekera who support for us for our education and facilities.
                <li>Swarna Padmini Thisera</li>
                <li>Soma Gunatilleka</li>
                <li>Chitra Wijesekera who support for us for our education and facilities.</li>
              </ul>
               
               
            </p>
          </div>
          </div>

          <div className="section-container">
          <div className="intro-section">
            <h2>Well wishers including Professor Ven. Kotapitiye Rahula Nayaka Thera ,Ven.Sasthrapathi Thalpitiye Chandarathana Thera , Mr.G.G.D. Somarathna and Mr.Jagath 
              Sumathipala have forwarded their messages of Goodwill wishing all success to the Tudawe Child Development Center.</h2>
            <p>Well wishers including Professor Ven. Kotapitiye Rahula Nayaka Thera ,Ven.Sasthrapathi Thalpitiye Chandarathana Thera , Mr.G.G.D. Somarathna and Mr.Jagath
               Sumathipala have forwarded their messages of Goodwill wishing all success to the Tudawe Child Development Center.
            </p>
          </div>
          </div>
              
          <div className="section-container">
          <div className="intro-section">
            <h2>The Office Bearers of the Board of Trustees of Tudawe Child Development Centre for the year of 2013</h2>
            <p>space for the image
            </p>
          </div>
          </div> 
          <div className="section-container">
          <div className="intro-section">
            <h2>Former Office Bearers,Patrons and Trustees has listed down as recognition for the great service they provided for the Thudwe Children Development Center.</h2>
            <p>space for the image<br/>
            Former Office Bearers,Patrons and Trustees has listed down as recognition for the great service they provided for the Thudwe Children Development Center.
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
