import { motion } from 'motion/react';
import me from './assets/img/me.jpg';
import still from './assets/img/still3.JPG';
import me_info from './assets/img/me_info.png';
import tache from './assets/img/tache.png';
import statika from './assets/img/statika.png';

function App() {
  // ======================= ============ Etat ============= ========================
  
  
  
  // ======================= ============ Etat ============= ========================


  // ======================= ============ Comportement ============= ========================




  // ======================= ============ Comportement ============= ========================





  // ======================= ============ Affichage ============= ========================
  return (
    <section className='bg-gray-800'>
      {/* =========== =============== ==============page d'accueil =============== ================= =============== */}
      {/* ============ ======== menu déroulant ============= =========== */}
      {/* <div className='fixed z-10 right-2 md:hidden lg:hidden xl:hidden top-2'><i className='text-3xl cursor-pointer fas fa-bars-staggered'></i></div> */}
      {/* ============ ======== menu déroulant ============= =========== */}




      <div className="flex w-full h-full bg-gradient-to-r from-blue-300 to-purple-300">
        {/* ============== ============= = Navigation barre = ============== =============== */}
        <div className="fixed z-50 hidden cursor-pointer md:bg-opacity-50 md:rounded-b-lg md:flex md:flex-col md:justify-center md:w-full md:h-16 md:m-0 md:text-black md:shadow-lg md:bg-gradient-to-r from-blue-400 to-purple-400">
          <div className="container flex justify-around">
            <a href="#accueil" className='text-black no-underline'>
              <motion.li className="p-3 list-none transition-all rounded-lg hover:bg-violet-300 hover:border-b-2"
                initial={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 0.8, opacity: 0.7, rotate: 10 }}
              ><span className='mr-3'><i className='fas fa-house-user '></i></span> Accueil</motion.li>
            </a>
            <a href="#competences" className='text-black no-underline'>
              <motion.li className="p-3 list-none transition-all rounded-lg hover:bg-violet-300 hover:border-b-2"
                initial={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 0.8, opacity: 0.7, rotate: -10 }}
              ><span className='mr-3'><i className='fas fa-list-check'></i></span> Compétences</motion.li>
            </a>
            <a href="#experiences" className='text-black no-underline'>
              <motion.li className="p-3 list-none transition-all rounded-lg hover:bg-blue-300 hover:border-b-2"
                initial={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 0.8, opacity: 0.7, rotate: 10 }}
              ><span className='mr-3'><i className='fas fa-briefcase'></i></span> Expériences</motion.li>
            </a>
            <a href="#projets" className='text-black no-underline'>
              <motion.li className="p-3 list-none transition-all rounded-lg hover:bg-blue-300 hover:border-b-2"
                initial={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 0.8, opacity: 0.7, rotate: -10 }}
              ><span className='mr-3'><i className="fas fa-code"></i></span> Projets</motion.li>
            </a>
          </div>
        </div>

        {/* ============== ============= = Navigation barre = ============== =============== */}

        {/* ============== =============== ====== contenu accueil ========== ============== =============== */}
        <div className="grid items-center w-full h-auto grid-cols-1 gap-8 p-4 md:grid-cols-2" id='accueil'>

          <div className='flex h-auto col-span-1 my-10 overflow-hidden bg-opacity-50 rounded-lg place-content-center md:my-20'>
            <motion.img drag dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }} src={me} alt="me" className='w-2/3 h-auto border-3 rounded-t-[100%] rounded-b-[100%] border-white cursor-pointer' />
          </div>


          <div className="flex flex-col items-center justify-center px-2 py-10 -mt-16 rounded-lg h-2/3 md:-mt-0">
            <div className="flex flex-col items-center justify-center">
              <div className='text-center'>MAMINIRINA Niavo <ins>Kevin </ins></div>
              <hr />
              <div className='oldstyle-nums'>038 94 233 51</div>
              <div className=''>niavo.kevin9@gmail.com</div>
              <hr />
              <div className='text-center'>
                Je suis actuellement à la recherche d'un stage ou d'une opportunité
                d'embauche pour développer d’avantage mes compétences
                techniques, tout en apportant mon expertise dans un environnement
                dynamique.</div>
              <hr />
              <div className='flex justify-center w-full md:w-3/4'>
              
              <a href="mailto:niavo.kevin9@gmail.com" target='_blank' rel='noreferrer'><motion.button className='w-full p-2 mt-2 mr-2 text-black bg-blue-200 border-b-2 border-blue-400 rounded-md shadow-lg animate-bounce'
                initial={{ scale: 1, opacity: 1 }}
                whileHover={{backgroundColor:'#9f9eee'}}
                whileTap={{ opacity: 0.2,backgroundColor:'#3f3e93'}}>
                <span><i className="fas fa-envelope"></i></span> Contactez-moi</motion.button></a>


                <a href="/CV.pdf" download>
  <motion.button
    className="w-full p-2 mt-2 ml-2 text-black bg-blue-200 border-b-2 border-blue-400 rounded-md shadow-lg"
    initial={{ scale: 1, opacity: 1 }}
    whileHover={{ backgroundColor: '#9f9eee' }}
    whileTap={{ scale: 0.8, opacity: 0.7, y: -10, backgroundColor: '#3f3e93' }}
  >
    <span><i className="fas fa-download"></i></span> Télécharger mon CV
  </motion.button>
</a>

              </div>
            </div>
          </div>

        </div>

        {/* ============== =============== ====== contenu accueil ========== ============== =============== */}
      </div>
      {/* =========== =============== ==============page d'accueil =============== ================= =============== */}

      {/* ============== =============== ====== competence ========== ============== =============== */}

      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-blue-300 to-purple-300" id='competences'>
        <div className="w-[90%] md:h-[80%] h-full mt-10">
          <div className="grid w-full h-full grid-cols-1 gap-2 md:grid-cols-2">
            <div className='flex items-center justify-center w-full h-full col-span-2 overflow-hidden shadow-lg bg-violet-300 md:col-span-1'>
              <motion.img src={still} alt="still" className='w-2/3 cursor-pointer h-2/3' drag dragConstraints={{top:0,bottom:0,right:0,left:0}}/>
            </div>



            <div className='flex flex-col w-full h-full col-span-2 p-3 bg-blue-300 shadow-lg md:col-span-1'>
              <div className="text-2xl text-center text-bold">Compétences</div>
              <hr />

              <div className='grid w-full grid-cols-2 gap-2.5 text-xs rounded-lg md:text-base h-1/4'>
                <div className='w-full h-[87%] col-span-1 p-1 bg-blue-200 rounded-lg'>
                  <div className='text-xs'><center className='p-1 underline underline-offset-2'>Developpement front-end</center></div>
                  <div>
                    <div>Javascript/React</div>
                    <div>HTML/CSS</div>
                    <div>Jquery</div>
                  </div>
                </div>
                <div className='w-full h-[87%] col-span-1 p-1 bg-blue-200 rounded-lg'>
                  <div className='text-xs'><center className='p-1 underline underline-offset-2'>Developpement back-end</center></div>
                  <div>
                    <div>Python/Django</div>
                    <div>PHP/Laravel(base)</div>
                  </div>
                </div>
              </div>
              <div className='grid w-full grid-cols-2 gap-2.5 text-xs rounded-lg md:text-base h-1/4'>
                <div className='w-full h-[87%] col-span-1 p-1 bg-blue-200 rounded-lg'>
                  <div className='text-xs'><center className='p-1 underline underline-offset-2'>Style et design</center></div>
                  <div>
                    <div>Tailwindcss</div>
                    <div>Bootstrap</div>
                  </div>
                </div>
                <div className='w-full h-[87%] col-span-1 p-1 bg-blue-200 rounded-lg'>
                  <div className='text-xs'><center className='p-1 underline underline-offset-2'>Autres</center></div>
                  <div>
                    <div>Git/GitHub</div>
                    <div>MySql</div>
                    <div>VS Code</div>
                  </div>
                </div>
              </div>
              <div className='w-full p-2 mt-3 bg-blue-200 rounded-lg h-1/4'>
                <div className='text-xs'><center className='p-1 underline underline-offset-2'>Soft skill</center></div>
                <div> Positif, rigoureux,
                  curieux, esprit d'équipe,
                  capacité d'adaptation.</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ============== =============== ======  competence ========== ============== =============== */}

      {/* ============== =============== ====== expérience ========== ============== =============== */}

      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-blue-300 to-purple-300" id='experiences'>
        <div className="xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] h-[80%] xl:h-[85%] lg:mt-10 text-xs lg:text-base bg-slate-300 bg-opacity-30">

          <div className="p-1 mb-2 bg-blue-300 shadow-md md:p-3 h-1/3">
            <div className='text-center'>Développeur web - Trilogy distribution en django <div><i className='fas fa-hourglass'></i> En cours</div></div>
            <div>
              <li>
                Conception et développement d'un site catalogue interactif pour
                Trilogy, avec une interface utilisateur intuitive.
              </li>
              <li>
                Intégration de fonctionnalités de recherche et de filtrage
                avancées pour une navigation optimale.
              </li>
              <li>
                Utilisation de technologies modernes pour garantir la
                performance du site.
              </li>
            </div>
          </div>

          
          <div className="p-1 mb-2 shadow-md bg-violet-300 md:p-3 h-1/3">
            <div className='text-center'>Stagiare  - MEN EN PHP  <div><i className='fas fa-hourglass-end'></i> Mai - Août 2024</div></div>
            <div>
              <li>
                Conception et développement d'une plateforme de gestion des
                intrants scolaires pour le Ministère de l'Éducation Nationale
                (MEN).
              </li>
              <li>
                Intégration de fonctionnalités de recherche et de filtrage
                avancées pour une navigation optimale.
              </li>
              <li>
                Optimisation de l'interface utilisateur pour une utilisation
                simplifiée par les agents du MEN
              </li>
            </div>
          </div>


          <div className="p-1 bg-blue-300 shadow-md md:p-3 h-1/3">
            <div className='text-center'>Stage SUNRISE <br /> <div><i className='fas fa-hourglass-end'></i> Novembre 2023</div></div>
            <div>
              <li>
                Découverte du fonctionnement interne de l'entreprise et des
                processus opérationnels.
              </li>
              <li>
                Observation des pratiques professionnelles en développement
                et gestion de projets.
              </li>
              <li>
                Participation à des réunions d'équipe et analyse des méthodes
                de travail3
              </li>
              


            </div>
          </div>


        </div>
      </div>

      {/* ============== =============== ======  expérience ========== ============== =============== */}



      {/* ============== =============== ====== Projets ========== ============== =============== */}

      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-blue-300 to-purple-300" id='projets'>
        <div className="grid grid-cols-3 gap-2 w-[90%] h-[80%]">

        <a onClick={() => window.open('https://gestion-de-tache.netlify.app', '_blank')}
          className="no-underline text-black w-full col-span-3 overflow-hidden border-b-2 border-black shadow-md md:col-span-1 lg:h-1/2 md:h-1/3 h-[83%]">
          <div>
            <img src={tache} alt="tache" className="" />
            <div className="text-center lg:mt-3">Gestion des tâches en react</div>
          </div>
        </a>

          
        <a onClick={() => window.open('https://niavo.netlify.app', '_blank')}
   className="text-black w-full col-span-3 overflow-hidden border-b-2 border-black shadow-md md:col-span-1 lg:h-1/2 md:h-1/3 h-[83%] no-underline">
  <div>
    <img src={statika} alt="static" className="" />
    <div className="text-center lg:mt-3">CV Simple</div>
  </div>
</a>


        </div>
      </div>

      {/* ============== =============== ======  Projets ========== ============== =============== */}

      <footer className='grid w-full h-auto grid-cols-3 gap-2 text-xs border-t-2 bg-gradient-to-r from-blue-300 to-purple-300'>
            <div className='flex items-center justify-center w-full h-full col-span-3 sm:col-span-1'>
              <div>Contactez si vous avez besoin de moi.</div>
            </div>
            <div className='flex items-center justify-center w-full h-full col-span-3 sm:col-span-1'>
              <ul>
                <a href="#accueil" className='text-black transition-all'><li className='p-1'><span className='mr-3'><i className='p-1 border border-black rounded-full fas fa-house-user'></i></span>Accueil</li></a>
                <a href="#competences" className='text-black transition-all'><li className='p-1'><span className='mr-3'><i className='p-1 border border-black rounded-full fas fa-list-check'></i></span>Compétences</li></a>
                <a href="#experiences" className='text-black transition-all'><li className='p-1'><span className='mr-3'><i className='p-1 border border-black rounded-full fas fa-briefcase'></i></span>Expériences</li></a>
                <a href="#projets" className='text-black transition-all'><li className='p-1'><span className='mr-3'><i className="p-1 border border-black rounded-full fas fa-code"></i></span>Projets</li></a>
                <a href="#accueil" className='text-black transition-all'><li className='p-1'><span className='mr-3'><i className="p-1 border border-black rounded-full fas fa-envelope"></i></span>Contactez-moi</li></a>
              </ul>
            </div>
            <div className='flex items-center justify-center w-full h-full col-span-3 sm:col-span-1'>
              <img src={me_info} alt="me_info" className='w-48 h-52 scale-[0.8]'/>
            </div>
      </footer>
            <footer className='flex items-center justify-center w-full h-auto gap-2 p-3 text-base border-t-2 bg-gradient-to-r from-blue-300 to-purple-300'>
            © 2025 Still Development. Tous droits réservés.
            </footer>
    </section>
  )


  // ======================= ============ Affichage ============= ========================



}

export default App;

// io avadika react de io ko ampiasaina
// $(function () {
   
//   $('.navbar_menu').css('top', '-100px');

//   $(window).scroll(function () {
//       var currentScrollTop = $(this).scrollTop();


//       if (currentScrollTop === 0) {
//           $('.navbar_menu').css('top', '-100px');
//       } else {

//           $('.navbar_menu').css('top', '0');
//       }

//       lastScrollTop = currentScrollTop;
//   });
// });