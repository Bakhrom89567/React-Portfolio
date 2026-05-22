import { workExperience } from "../../data/workExperience"
import { motion } from "motion/react"
import { slideInVariants } from "../../utils/animation"
const WorkExperience = () => {
  return (
     <div className="education work-exp">
                        <motion.h3 
                        className="work-exp-title"
                        custom={2}
                        variants={slideInVariants("top", 0.7,50,true)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:false, amount:0.5}}
                        
                        >Work & Experience</motion.h3>
                        <div className="skills-info">
                            {workExperience.map((item,index) => (
                                  <motion.div 
                                  className="experience-card"
                                   key={index}
                                     custom={index}
                                    variants={slideInVariants("top", 0.7,50,true)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once:false, amount:0.5}}
                                   >
                                <div className="upper">
                                    <h3>{item.title}</h3>
                                    <h5>{item.employmentType}</h5>
                                    <span>{item.period}</span>
                                </div>
                                <div className="hr"></div>
                                <h4 className="label">{item.company}</h4>
                                <p>{item.description}</p>
                            </motion.div>
                            ))}
                          
                           
                        </div>
                    </div>
  )
}

export default WorkExperience

// const WorkExperience = () => {
//   return (
//      <div className="education work-exp">
//                         <h3 className="work-exp-title">Work & Experience</h3>
//                         <div className="skills-info">
//                             {workExperience.map((item, index) => (
//                                 <div className="experience-card" key={index}>
//                                     <div className="upper">
//                                         <h3>{item.position}</h3>
//                                         <h5>{item.type} | {item.location}</h5>
//                                         <span>{item.duration}</span>
//                                     </div>
//                                     <div className="hr"></div>
//                                     <h4 className="label">{item.company}</h4>
//                                     <p>{item.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//     )
// }
