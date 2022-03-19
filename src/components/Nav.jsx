import React from 'react'

export default function Nav() {
  return (
    <div class="py-20 grid grid-cols-2 items-center" >
      <div class="w-full h-full">
      <img class="ml-10 w-full h-full" src='rod.svg' alt='Rod on a rocket'/>
      </div>
      <ul class="flex flex-col gap-5 items-center" >
          <li>
            <a href="#about" class="text-3xl hover:text-4xl font-bold hover:text-white underline decoration-white font-serif underline">About Me</a>
            </li>
          <li>
            <a href="#projects" class="text-2xl hover:text-3xl font-bold hover:text-white underline decoration-white font-serif underline">Projects</a>
          </li>
          <li>
            <a href="#contacts" class="text-xl hover:text-2xl font-bold hover:text-white underline decoration-white font-serif underline">Contacts</a>
          </li>
        </ul>
    </div>
  )
}
