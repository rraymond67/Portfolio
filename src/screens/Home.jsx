import React from 'react'
import Nav from '../components/Nav.jsx'
import Form from '../components/Form.jsx'
import Footer from '../components/Footer.jsx' 
import pdf from './Resume.pdf'

export default function Home() {
  return (
    <div class="scroll-smooth bg-gradient-to-b from-stone-200 to--400">
      <div class="drop-shadow-2xl">
        <Nav />
        <hr class="mb-10 mr-40 ml-40 border-b-2 border-red-200 " />
      </div>

      <div id ="about" class="flex flex-col items-center pb-10">
        <div class="flex flex-col lg:ml-40 lg:mr-40 xl:ml-60 xl:mr-60 h-200 bg-slate-100 items-center">
          <img class="mt-10 w-50 h-60 rounded-2xl shadow-lg"
            src='head.jpeg' alt='head shot of Rod Raymond' />
          <h1 class="mt-5 text-xl text-red-700 font-bold font-serif">Hi! My name is Rod Raymond</h1>
          <p class="font-mono ml-20 mr-20 mb-10 text-center "> I am a multilingual project manager, video director, producer turned full stack developer with a curiosity to learn
          and a drive for new experiences.</p>
          <a class="flex flex-row mb-5 hover:text-white pl-4 pr-4 bg-yellow-300 ps-4 py-2 rounded-lg font-bold italic hover:not-italic underline decoration-white" href={pdf} target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
            Resume
          </a>
        </div>

      </div>
      <hr class="mb-10 mr-40 ml-40 border-b-2 border-red-200 " />
    
      <div  class="mb-20 flex flex flex-col items-center">
        <h1 class="text-3xl underline font-serif">Skills</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center drop-shadow-2xl gap-20 mt-10">
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="javascript icon" />
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react icon" />
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express icon"/>
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongoDB icon"/>
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgreSQL icon"/>
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github icon"/>
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt="ruby icon"/>
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css icon"/>
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html icon"/>
            <img class="w-20 h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" alt="rails icon"/>
            <img class="w-20 h-20" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwindcss icon"/>
            <img class="w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg" alt="adobe icon"/>
         </div>
       </div>

       <hr class="mb-20 mr-40 ml-40 border-b-2 border-red-200 " />

       <div id="projects" class="mb-20 flex flex flex-col items-center">
          <h1 class="text-3xl underline font-serif">Projects</h1>
          <div class="mt-10 sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 flex grid grid-cols-1 justify-items-center">
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
              <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-900 bg-gray-100 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>L.A.G.A</span>
            <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            </h2>
            <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
               <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                 <p class="mb-2 text-gray-500 dark:text-gray-400">Life After General Assembly is a website for finding full-stuck materials. This web application is a great ressource for bootcamp graduates and developers alikes who are looking to futher their knowledge.</p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <span class="font-bold"> Technologies: </span>
                  Javascript, ReactJS, CSS, HTML, Tailwind CSS, Heroku
                 </p>
                <p class="text-gray-500 dark:text-gray-400">Check out the website: <a href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">L.A.G.A</a></p>
             </div>
           </div>
           
           <h2 id="accordion-collapse-heading-2">
             <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
              <span>WePay</span>
              <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
             </button>
            </h2>
             <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                   <p class="mb-2 text-gray-500 dark:text-gray-400">WePay is an online commerce application. Using authentication, one can post items for sale and other users will be able to place bids.</p>
                   <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <span class="font-bold"> Technologies: </span>
                  Javascript, Ruby-on-rails, TailwindCSS, HTML, Heroku, Netlify
                 </p>    
                <p class="text-gray-500 dark:text-gray-400">Check out the webiste: <a href="https://wepayrod.netlify.app" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">WePay</a></p>
                </div>
              </div>

            <h2 id="accordion-collapse-heading-3">
               <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
              <span>Hogwarts School of Witchcraft and Wizardry</span>
              <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
           <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
            <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
               <p class="mb-2 text-gray-500 dark:text-gray-400">A react application where you can apply to the Hogwarts School of Witchcraft and Wizardry and choose which house to inlist in.</p>
               <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <span class="font-bold"> Technologies: </span>
                  Javascript, ReactJS, CSS, HTML, Netlify
                 </p>
                <p class="text-gray-500 dark:text-gray-400">Check out the webiste: <a href="https://school-for-wizards.netlify.app/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline" >Hogwarts School of Witchcraft and Wizardry</a></p>
    </div>
  </div>
</div>
          </div>

        <div>
          
        </div>
          </div>

          <hr class="mb-20 mr-40 ml-40 border-b-2 border-red-200 " />

          <div id="contacts" class="mb-10 flex flex-col items-center">
        <h1 class="mb-10 text-3xl underline font-serif">Contacts</h1>
        <div class="block w-2/5">
          <Form/>
          </div>
      </div>
      <Footer />
    </div>
  )
}
