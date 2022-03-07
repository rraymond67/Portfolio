import React from 'react'
import Nav from '../components/Nav.jsx'

export default function Home() {
  return (
    <div class="bg-stone-200">
      <Nav/>
      <div class="mt-10 flex flex-col items-center pb-20">
        <img class="w-50 h-60 rounded-2xl shadow-lg"
        src='head.jpeg' alt='head shot of Rod Raymond'/>
        <hr class="my-6 border-black-900 dark:border-black-700 lg:my-8" />
        <div class="flex h-200 bg-slate-100 items-center">
        <p class="font-mono ml-20 mr-20 mt-10 mb-10 text-center "> "  I am a Multilingual Project Manager turned Full Stack Developer with a curiosity to learn
          and a drive for new experiences. My international background and my love for languages has
          provided me with the skills to communicate effectively in diverse environments and solve problems efficiently  ".</p>
        </div>
      </div>
    
      <div id ="about" class="flex justify-center">
        <h1 class="text-3xl font-serif">Skills</h1>
        <div class="mr-20 mb-20 grid grid-cols-4 gap-4 mt-20 space-x-20 ">
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

       <div id="projects" class="flex justify-center">
          <h1 class="text-3xl font-serif">Projects</h1>
        <div>
          
        </div>

          </div>

          <div id="contacts" class="flex justify-center">
          <h1 class="text-3xl font-serif">Contact</h1>
          </div>
    </div>
  )
}
