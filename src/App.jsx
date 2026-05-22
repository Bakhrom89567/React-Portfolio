
import { Header, Home,Aboutme, SkillsInfo,Services,Portfolio,
  GetInTouch,OurClients,Contact,Footer, 
  ScrollToTop,ThemeToggle} from './components/index';


function App() {


  return (
    <>
    <Header /> 
    <main >
      <Home />  
       <Aboutme />
       <SkillsInfo />
       <Services />
       <Portfolio/>
       <GetInTouch />
       <OurClients />
       <Contact />
       <Footer />
       <ScrollToTop/>
       <ThemeToggle/>
    </main>
  
    </>
  )
}

export default App
