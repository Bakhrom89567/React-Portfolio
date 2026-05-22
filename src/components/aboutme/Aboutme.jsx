

import { aboutImg } from '../../assets/images/index';
import { FaDownload } from 'react-icons/fa';
import SectionTitle from '../sectionTitle/SectionTitle';
import  './Aboutme.css';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';
import {profList} from "../../data/profList";

const Aboutme = () => {
  return (
    <section className="about section" id="about">
            <div className="container flex-center">
              <SectionTitle title="About me" subtitle="About me"  />
               
                <div className="about-wrapper">
                    <motion.div className="about-img"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:false, amount:0.5}}
                        variants={slideInVariants("left", 0.9,100,true)}
                    
                    ><img src={aboutImg} alt="about"/></motion.div>
                    <div className="about-info">
                        <div className="description">
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once:false, amount:0.5}}
                                custom={0}
                                variants={slideInVariants("right", 0.5,50,true)}
                            
                            >I'm Ilay</motion.h3>
                            <motion.h4
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once:false, amount:0.5}}
                                custom={0}
                                variants={slideInVariants("right", 0.5,50,true)}
                            
                            >A Lead <span>Front-End Developer</span> based in <span>California</span></motion.h4>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once:false, amount:0.5}}
                                custom={0}
                                variants={slideInVariants("right", 0.5,50,true)}
                            >
                                I design and develop services for customers specializing creating stylish, modern
                                websites,
                                web services and online stores. My passion is to design digital user experiences through
                                meaningful interactions. Check out my Portfolio
                            </motion.p>
                        </div>
                        <ul className="professional-list">
                            {profList.map((item,index)=>{
                                return(
                           <motion.li className="list-item" 
                           key={item.id}
                           custom={index}
                            variants={slideInVariants("right", 0.7,40,true)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:false, amount:0.5}}
                           
                           >
                                <span className="number">{item.number}</span>
                                <span className="text">{item.text}</span>
                            </motion.li>)
                            })}
                          
                        </ul>
                        <motion.a href="" className="inner-info-link"
                            variants={slideInVariants("bottom", 0.7,60,true)}
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:false, amount:0.5}}
                        >Download
                            <FaDownload />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Aboutme;
