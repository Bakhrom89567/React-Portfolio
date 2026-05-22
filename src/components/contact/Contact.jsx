import "./Contact.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
            <div className="container flex-center">
                <SectionTitle title="Contact Me" subtitle="Contact Me" />
                   
                    <div className="contact-wrapper">
                     <ContactLeft  />
                       
                     <ContactRight />
                    </div>
            </div>
    </section>

  )
}

export default Contact
