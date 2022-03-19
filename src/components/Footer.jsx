import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-gray-900 flex flex-col items-center md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://www.linkedin.com/in/rod-raymond-281a0284/" target="_blank" rel="noreferrer"
            class="mr-4 md:mr-6 ">
            <img class='h-7 mr-10' src='Link.png' alt='LinkedIn logo'/>
          </a>
        </li>
        <li>
          <a href="https://github.com/rraymond67" target="_blank" rel="noreferrer" class="mr-4 md:mr-6"> 
            <img src='GitHub.png' alt='git hub logo'/>
          </a>
        </li>
    </ul>
    <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2022 Rod Raymond. All Rights Reserved.
      </span>
      <a class="text-xs text-white sm:text-center dark:text-gray-400" href="https://storyset.com/business" target="_blank" rel="noreferrer">Business illustrations by Storyset</a>
</footer>

  )
}
