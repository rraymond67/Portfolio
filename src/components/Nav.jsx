import React from 'react'

export default function Nav() {
  return (
    <div class="py-5 flex flex-col items-center" >
      <ul class="flex row space-x-10" >
          <li>
            <a href="#about" class="font-serif underline">About Me</a>
            </li>
          <li>
            <a href="#projects" class="font-serif underline">Projects</a>
          </li>
          <li>
            <a href="#contacts" class="font-serif underline">Contacts</a>
          </li>
        </ul>
    </div>
  )
}
