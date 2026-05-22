import "./Contact.css";
import ContactForm from "./ContactForm"
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";

const ContactRight = () => {
  return (
    <div className="contact-right">
        <motion.p
          variants={slideInVariants("top", 0.7,-50,false)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:false, amount:0.5}}
        >I'm always open to discussing product <span>design work or partnerships.</span></motion.p>
        <ContactForm/>
    </div>
  )
}

export default ContactRight
