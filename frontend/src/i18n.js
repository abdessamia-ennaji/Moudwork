import  i18n  from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';



i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng: "en",
    resources:{
        en:{
            translation :{
                Navbar :{
                    CallUs:"Call Us",
                    EmailUs: "Email Us",
                    GlobalCertificate :"Global Certificate",
                    GetQuote :"Get A Quote",
                    Home:"Home",
                    Company:"COMPANY",
                    AboutUs : "About Us",
                    OurPeople : "OUR PEOPLE",
                },

                Contact:{
                    Test :"Test ENG",
                },
                Home:{
                    SlideTitle1 :"Excellence in Construction",
                    SlideSubTitle1 :"Building Trust, One Project at a Time",
                    slideInLeft1 :"Our Services",
                    ContactUs : "Contact Us",
                    SlideTitle2 :"Dedicated to Quality",
                    SlideSubTitle2 :"Your Vision, Our Expertise",
                    slideInLeft2 :"Moudwork Delivers",
                    SlideTitle3 :"Meet Our Experts",
                    SlideSubTitle3 :"Building a Sustainable Future",
                    slideInLeft3 :"At Moudwork, we transform challenges into opportunities for growth.",

                    ActionTitle1 : "At Moudwork, We Build What Matters Most",
                }
                

            }
        },
        fr:{
            translation :{
                Navbar :{
                    CallUs:"Appelez-nous",
                    EmailUs: "Envoyez-nous un email",
                    GlobalCertificate :"Certificat Global",
                    GetQuote :"Obtenez un devis",
                    Home:"ACCUEIL",
                    Company:"ENTREPRISE",
                    AboutUs : "À PROPOS DE NOUS",
                    OurPeople : "NOTRE EQUIPE",
                }
                ,

                Contact:{
                    Test :"Test Fr",
                },
                Home:{
                    SlideTitle1 :"Excellence dans la construction",
                    SlideSubTitle1 :"Construire la confiance, un projet à la fois",
                    slideInLeft1 :"Notre Services",
                    ContactUs :"Contactez Nous",
                    SlideTitle2 :"Dédié à la qualité",
                    SlideSubTitle2 :"Votre vision, notre expertise",
                    slideInLeft2 :"Moudwork tient ses promesses",
                    SlideTitle3 :"Rencontrez nos experts",
                    SlideSubTitle3 :"Construire un avenir durable",
                    slideInLeft3 :"Chez Moudwork, nous transformons les défis en opportunités de croissance.",


                    ActionTitle1 : "Chez Moudwork, nous construisons ce qui compte le plus.",
                }
                
            } 
        },
        
    }
})