import styles from "./Contact.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {

const [name, setname] = useState("")
const [email, setemail] = useState("")
const [text, settext] = useState("")

 const onSubmit = (event) =>{
    event.preventDefault();
    setname(event.target[0].value)
    setemail(event.target[1].value)
    settext(event.target[2].value)
 }

  return (
    <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
          <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px"/>}/>
          <Button
           text="VIA CALL" icons={<IoIosCall fontSize="24px"/>}/>
          </div>
          <Button isOutline={true} text="VIA MAIL" icons={<HiMail fontSize="24px"/>}/>

          <form action="post" onSubmit={onSubmit}>
            <div className={styles.form_controller}>
            <label htmlFor="NAME">Name</label>
            <input type="text" placeholder="" required/></div>
            <div className={styles.form_controller}>
            <label htmlFor="email">E-MAIL</label>
            <input type="email" required/></div>
            <div className={styles.form_controller}>
            <label htmlFor="text">TEXT</label>
            <textarea type="text" rows={8}/>
            </div>
            <div style={{
              display:"flex",
              justifyContent:"end"
            }}>
            <Button text="SEND MESSAGE"/>
            </div>
            <div>
              { name +" "+ email +" "+text}
            </div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="images/Service 24_7-pana 1.svg" alt="Contact Image" />
        </div>
    </section>
  )
}
export default ContactForm