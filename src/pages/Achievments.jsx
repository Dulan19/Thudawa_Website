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
          Achievements
          
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
            <h2>Best Children Development Home-2012 (Pvt) Ltd</h2>
            <p>Tudawe Child Development Centre won the first place and received the Award participating in a competition to elect the
               best Children Development Home in the Western Province organized by the Childcare and Probation Dept of the Western Province in 2012. Tudawe Child Development 
               Center was graded by the Child care and Probation Dept and it had taken 91.85 points and graded as “A” Class Child Development Centre in the Western Province 
               in 2012. In 2013 … </p>
            <button onClick={() => setShow5(!show5)}>{show5 ? "Show Less" : "Read More"}
            </button>
            {show5 && <p> it has won the  best children development center in Kaluthara District surpassing 16 Children Development centers.
              In addition Tudawe Children home has capable to won quality awards in year year 2010 ,2011 and 2012 conservatively within the Western Province.</p>}
          </div>
          </div>

          
          

          
          
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Background
