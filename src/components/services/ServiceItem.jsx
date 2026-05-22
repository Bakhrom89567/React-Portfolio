
import { ImArrowUpRight2 } from 'react-icons/im';
import "./Services.css";
import ServiceModal from "./ServiceModal";
import {useState} from "react";
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';


const ServiceItem = ({services}) => {
  const [activeIndex, setActiveIndex] = useState(false);
 
  const openModal = (index) => {
    setActiveIndex(index);
  }
  const closeModal = () => {
    setActiveIndex(false);
  }

  return (
    <>
    {services.map((item,index) => (

       <motion.li
          className="services-container"
            key={index}
            custom={index}
          variants={slideInVariants("top", 0.7,50,true)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:false, amount:0.5}}>
          <div className="service-card">
              {/* <i className="fa-solid fa-pen-ruler"></i> */}
              <item.icon className="services-icon"/>
              <h3>{item.title}</h3>
              <div className="learn-more-btn" onClick={()=> openModal(index)}>
                  Learn More
                  <ImArrowUpRight2 className="learn-more-icon" />
              </div>
          </div>
        <ServiceModal item={item} isActive={activeIndex === index}  closeModal={closeModal} />
    </motion.li>  

    ))}
     
</>
  )
}

export default ServiceItem
