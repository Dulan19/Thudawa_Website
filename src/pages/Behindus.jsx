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
            <h2>Message From Fomer Chief Matron</h2>
            <p>Message From Fomer Chief Matron   Before nineteen years ,When I came to Tudawe Children Home ,I  
              saw children home managing with lot of difficulties  with twenty seven  children by Chief Matron ,
              supportive matron and guard. Difficulties are common in a newly created Children Home since lack of 
              funding and support due to low consideration from the society.However with the support of villagers and 
              the board of trustees ,Children home developed from the facilities as well as the capabilities and skills …</p>
            <button className="read-btn"
            onClick={() => setShow1(!show1)}>{show1 ? "Show Less" : "Read More"}
            </button>
            {show1 && <p>of children.At that time all the children attended to one school .However today they have opportunity 
              to attend four different schools based on there capabilities.It improved the quality of the education of the children
               while showing better results in the exams.
              The guidance given by former vise president Mr . M.K. Perera to me helped me a lot to improve the Children Development Center .
              I remember him with great gratitude as a father who instruct to daughter. The children studies at that age are now having good positions
              in the recognized institutions in the country.I’m really happy when I saw them spending there life as a good citizen.As a mother
              it’s grate pleasure to that they came back to Children Home considering it as there Parental House in holidays.
              Step by step I able to create this as a real home to children without make them fell it as a separate home allocated to orphan children.I
              will remember the Board of trustees and the donors who behind me and support me to bring the Children home to this condition.
              The former Secretory Mr Sumanasiri Perera provide a great contribution towards  the  development of the children home .He create the open
              environment in the children home to discuss the problems of the children and organize the surrounding in a way developing the skills and 
              capabilities of the children.Finally the contribution of the Current Board of trustees has to be remember to maintain the pleasant condition 
              of the children home.The ability to organize the talent show and excellence awards won are  the great examples for that.
              May the Triple Gems Bless You !</p>}
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
            <h2>All Ceylon Buddhist Congress</h2>
            <p>All Ceylon Buddhist Congress The All Ceylon Buddhist Congress was setup with the instinctive cooperation of devoted Buddhist leaders in the year 
              1919 specified as a special organization linkup with all other Buddhist Associations in Sri Lanka to ensure the stability of Buddhism, specially 
              dedicated to protecting and promoting Buddhism not only in Sri Lanka but also in another county as well. All Ceylon Buddhist Congress plays a vital 
              role to promote, foster and protect the interest of Buddhism and …</p>
            <button onClick={() => setShow3(!show3)}>{show3 ? "Show Less" : "Read More"}
            </button>
            {show3 && <p> of the Buddhist Community to safeguard the rights and privileges of Buddhists and also promote cooperation among Buddhists and Buddhist associations.
              The  Tudawe  Parental house and property at  Central  Road  Thalpitiya were handed over to the  Samastha  Lanka  Baudha  Mahasangamaya  (All  Ceylon  Buddhists Congress)  
              on the  9th of  June  1988  at a  discussion held at this house and the Samastha  Lanka  Baudha  Maha  Sammelanaya established a  Lama  Nivasaya admitting  11  Poor  Children
              on  June  19 th 1988.
              All Ceylon Buddhist Congress conducts different activities to show talent and improve the confidence of the children. A grand variety show of dance, music song, and drama named
              as “Taru Mutu Daru” was presented by the children of child care centers managed by the National Child Protection Council of the All Ceylon Buddhist Congress at the Kularatne Hall
                of Ananda College, Colombo under the patronage of the First Lady Madam Shiranthi Rajapaksa, attended by Parliamentarian J. R. P. Suriyapperuma, Thilanga Sumathipala, Sarath 
                Weerasekara, and ACBC  President Jagath Sumathipala on 1st October 2012 to commemorate the World Children’s Day. It was a display of the Art capabilities of these handicapped 
                children, who had lost their parental care and protection.  Some of them were blind, dumb, short of hearing, and mentally abnormal, which brought tears rolling down the chicks
                of the spectators.
              The skills of these children, who had never performed on stage, were a tribute to Ms. Puthula Sumatipala’s untiring efforts and dedication in training them, with the assistance 
              of the teachers attached to the child Development Centres spread island-wide. All this achievement was the result of the informing efforts of Samantha Sumathipala as a Vice 
              President of the National Child Care Council of the ACBC.

              All Ceylon Buddhist Congress

              Website: http://www.acbc.lk/</p>}
          </div>
          </div>

          <div className="section-container">
          <div className="intro-section">
            <h2>Department of Probation and Child Care Services</h2>
            <p>Department of Probation and Child Care Services   The ‘Probation System’ in Sri Lanka commenced on 12th March 1945,
              under the Department of Prisons. It was inaugurated with 10 Probation Officers who were paid salaries by the Government.
               However even before that the Probation system was tried in courts in Sri Lanka from time to time through voluntary Probation
                officers after 1919. In 1944 the Probation Ordinance was enacted to keep offenders under Probation. Accordingly by 1960 the Probation system …</p>
            <button onClick={() => setShow4(!show4)}>{show4 ? "Show Less" : "Read More"}
            </button>
            {show4 && <p> had been extended throughout the Island by appointing Probation Officers to all Judicial Districts in the Island. Since the Probation 
              System was functioning under the Department of Prisons, it was known as the Department of Prisons and Probation with the extension of the probation 
              systems. The Children and Young Persons Ordinance No 48 of 1952 was enacted and enforced in Sri Lanka.A separate Department, titled the Department of 
              Probation and Child Care Services, was established on 1st October 1956, bringing the probation functions too under its purview.The objectives of the 
              Department as envisaged by the Government are as follows.
            <table>
              <tr>
                <td>alt</td>
                <td>Limiting the imprisonment of offenders by rehabilitating them using probation strategies with a view to re-integrate them to the society as good citizens.</td>
              </tr>
              <tr>
                <td>alt</td>
                <td>Taking very lenient and Mitigated judicial actions in respect of children and young persons</td></tr>
              <tr>
                <td>alt</td>
                <td>Provision of requisite service to needy children and young persons</td></tr>
              <tr>
                <td>alt</td>
                <td>Offering such children, as far as possible the opportunity to live with their parents and provision of due protection</td>
              </tr>
    
            </table>

              With the establishment of Provincial Council system in Sri Lanka, some administrative powers were vested with the Provincial Councils. 
              Hence some of the functions of the Department have been assigned to Provincial Commissioners of Probation.
              Tudawe Children Development Center has registered under Department of Probation and Child Care Services from 1st of June  1989.
              It carryout  to improve infrastructure of the  Children Development Center based on the government funds.Futher  it organize different 
              activates and events like concerts , sport meets to improve the skills of the children.Department of Probation and Child Care Services 
              responsible for administration,quality reviews of the Children and ensure the protection of all the children including the children in Development Centers.

              Department of Probation and Child Care Services Website : http://www.probation.gov.lk/web/</p>}
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
