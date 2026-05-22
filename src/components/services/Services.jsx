import "./Services.css";
import { services } from "../../data/services";
// import ServiceModal from "./ServiceModal";
import ServiceItem from "./ServiceItem"
import SectionTitle from "../sectionTitle/SectionTitle";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";


const Services = () => {
    return (
        <section className="services section" id="services">
            <div className="container flex-center">
                <SectionTitle title="Services" subtitle="Services" />
              
                <motion.div className="services-wrapper"
                 custom={1}
                variants={slideInVariants("top", 0.7,50,true)}
                initial="hidden"
                whileInView="visible"
                viewport={{once:false, amount:0.5}}
                >
                    <h3 className="services-description">What I provide</h3>
                    <ul className="services-list">
                      <ServiceItem services={services} /> 
                    </ul>
                </motion.div>
            </div>
        </section>


    )
}
export default Services;