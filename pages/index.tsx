import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import logo from '../public/logo-01.jpg'
import Image from 'next/image'
import Nav_Button from '../Components/Button'
import NavBarText from '../Components/NavBarText'
import Hero from "../public/Hero.png"


const submitToDb = () => {
  console.log("I am running")
}



const Home: NextPage = () => {
  return (
    <>
      <div className={styles.NavBar}>
        <div className={styles.Logo}>
          <Image src={logo} alt="logo"/>
        </div>
        <div className={styles.buttonBar}>
          <Nav_Button
            innerText='Apply Now'
            width={100}

          />
          <Nav_Button
            innerText='NISP-RCAS'
            width={100}
            
          />
          <Nav_Button
            innerText='ARIIA 2021'
            width={120}
          />

        </div>
      </div>
      <div className={styles.NavBand}>
        <NavBarText 
          text="Home"
         />
         <NavBarText 
          text="Home"
         />
         <NavBarText 
          text="Home"
         />
         <NavBarText 
          text="Home"
         />
         <NavBarText 
          text="Home"
         />
      </div>

      <div className={styles.VideoCon}>
        <Image src={Hero} alt="logo" objectFit='cover' height={500}/>
      </div>

      <div className={styles.ParagraphDiv}> 
          <div style={{
            width: "80%",
            height: "100%",
            borderRadius:"20px",
            boxShadow: "0px 0px 10px 0px #000000",
            marginTop:"30px",
          }}>
            <div style={{
              width:"100%",
              height:"50px",
              display:'flex',
              justifyContent:"center",
              alignContent:"center"
            }}>
              <h3>
                Rathinam College of Arts & Science
              </h3>
            </div>
            <div style={{
              width:"100%",
              height:"50px",
              display:'flex',
              justifyContent:"center",
              alignContent:"center"
            }}>
              Rathinam College of Arts & Science (RCAS) is located in the midst of a scenic campus with excellent infrastructure and immense facilities amiable to students.  

              RCAS chaperones the way to a holistic education, which combines the qualitative aspects of academia and technical facets of the industry. 

              Education at RCAS is for someone who aspires to disseminate the status quo and promulgate a new path for themselves. Every student here is equipped with knowledge and experience, which can be applied in real-time and help to make a significant difference. 
            </div>
          </div>
      </div>
    </>
  )
}

export default Home
