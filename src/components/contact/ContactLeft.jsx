import "./Contact.css";
import { contactData } from "../../data/contactData";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";

const ContactLeft = () => {

  return (
       <div className="contact-left">
                            <motion.h2
                             variants={slideInVariants("top", 0.7,-50,false)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:false, amount:0.5}}
                            
                            >Let's discuss your project</motion.h2>
                            <ul className="contact-list">
                                {contactData.map((item,index) => (
                                    <motion.li key={item.id}
                                     variants={slideInVariants("top", 0.7,-50,false)}
                                   custom={index}
                                     initial="hidden"
                                    whileInView="visible"
                                    viewport={{once:false, amount:0.5}}
                                    >
                                        <h3>
                                            <item.icon />{item.title}
                                        </h3>
                                        <span>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                {item.value}
                                            </a>
                                        </span>
                                    </motion.li>
                                    
                                ))
                                }
                                
                            </ul>
                        </div>
  )
}

export default ContactLeft
