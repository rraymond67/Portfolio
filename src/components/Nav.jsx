import React from 'react'

export default function Nav() {
  return (
    <div class="py-5 border-b-2 border-red-500 flex flex-col items-center" >
      <ul class="flex row space-x-10" >
          <li>
            <a href="#about" class="hover:text-white underline decoration-white font-serif underline">About Me</a>
            </li>
          <li>
            <a href="#projects" class="hover:text-white underline decoration-white font-serif underline">Projects</a>
          </li>
          <li>
            <a href="#contacts" class="hover:text-white underline decoration-white font-serif underline">Contacts</a>
          </li>
        </ul>
    </div>
  )
}
