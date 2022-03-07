import React from 'react'
import Nav from '../components/Nav.jsx'

export default function Home() {
  return (
    <div class="bg-gradient-to-b from-stone-200 to--400">
      <Nav/>
      <div class="mt-10 flex flex-col items-center pb-20">
        
        <img class="w-50 h-60 rounded-2xl shadow-lg"
        src='head.jpeg' alt='head shot of Rod Raymond'/>
        <div class="flex flex-col h-200 bg-slate-100 items-center">
          <p class="font-mono ml-20 mr-20 mt-10 mb-10 text-center "> "  I am a Multilingual     Project Manager turned Full Stack Developer with a curiosity to learn
          and a drive for new experiences. My international background and my love for languages has
          provided me with the skills to communicate effectively in diverse environments and solve problems efficiently ".</p>
          <a class="mb-5 font-bold italic hover:not-italic underline decoration-red-500" href="https://docs.google.com/document/d/15U0gGEivgyqzkuVeNr9956PAqxViFcNGjgBwFUqVjAA/edit?usp=sharing" target="_blank">
            Resume
          </a>
        </div>

      </div>
      <hr class="mb-20 mr-40 ml-40 dark:border-black-900" />
    
      <div id ="about" class="mb-10 flex flex flex-col items-center">
        <h1 class="text-3xl font-serif">Skills</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center drop-shadow-2xl gap-5 mt-10 space-x-20 ">
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
            <img class="w-20 h-20" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="rails icon"/>
         </div>
       </div>

       <hr class="mb-20 mr-40 ml-40 dark:border-gray-800" />

       <div id="projects" class="mb-10 flex flex flex-col items-center">
          <h1 class="text-3xl font-serif">Projects</h1>
          <div class="mt-10 mr-40 ml-40 flex grid grid-cols-1 justify-items-center">
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
              <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-900 bg-gray-100 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>L.A.G.A</span>
            <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            </h2>
            <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
               <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                 <p class="mb-2 text-gray-500 dark:text-gray-400">Life After General Assembly is a website for finding full-stuck materials. This web application is a great ressource for bootcamp graduates and developers alikes who are looking to futher their knowledge. Users will be able to navigate thru a list of courses and see comments about specific courses from the existing users who have signed up. Evey course will be categorized accordingly. In order to leave comments or add a new course, one will need log in/sign up.</p>
                <p class="text-gray-500 dark:text-gray-400">Check out the website: <a href="https://silly-kowalevski-1591fc.netlify.app/" class="text-blue-600 dark:text-blue-500 hover:underline">L.A.G.A</a></p>
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
                   <p class="mb-2 text-gray-500 dark:text-gray-400">WePay is an online commerce application. Its a place where you post items for sale and other users will be able to place bids. In order to place bids or post an item you must sign up. The search bar will help users filter through the long list of items for sale. Once they find the items they are interest in, they click on it and it will navigate them to the details page where they eill see the item's description and the list of bidders. Users who are not sign in will still be able to navigate the website but they wont be able to place bids or post items for sale.</p>
                    <p class="text-gray-500 dark:text-gray-400">Check out the webiste: <a href="https://wepayrod.netlify.app" class="text-blue-600 dark:text-blue-500 hover:underline">WePay</a></p>
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
               <p class="mb-2 text-gray-500 dark:text-gray-400">A react application where you can apply to the Hogwarts School of Witchcraft and Wizardry and choose which house to inlist in. You will be given a student application form to submit to the school. Once you fill out the information required on the form, you submit it for request approval. If you dont feel confident about your application you can delete it (or edit it). You can also check a list of Alumni(You might get accepted or rejected)..</p>
               <p class="text-gray-500 dark:text-gray-400">Check out the webiste: <a href="https://school-for-wizards.netlify.app/" class="text-blue-600 dark:text-blue-500 hover:underline">Hogwarts School of Witchcraft and Wizardry</a></p>
    </div>
  </div>
</div>
          </div>

        <div>
          
        </div>
          </div>

          <hr class="mb-20 mr-40 ml-40 dark:border-gray-700" />

          <div id="contacts" class="mb-10 flex flex-col items-center">
          <h1 class="mb-10 text-3xl font-serif">Contact</h1>
          <div class="flex mb-20 grid grid-cols-1 justify-items-center">
            <h2>Email: rod.raymond67@gmail.com</h2>
            <h2>LinkedIn: <a href="https://www.linkedin.com/in/rod-raymond-281a0284/" target="_blank">Rod Raymond</a>
            </h2>
            <h2>GitHub: <a href="https://github.com/rraymond67" target="_blank">rraymond67</a></h2>
            
          </div>

          </div>
    </div>
  )
}
