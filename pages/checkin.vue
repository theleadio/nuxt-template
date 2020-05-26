<template>
  <div>
    <div class='mt-64 text-center'>
      <h1 class='text-3xl'>TickTick</h1>
      <h2 class='text-xl'>Contactless attendance solution</h2>
    </div>
    <form class="w-full">
      <div class='flex items-center border-b border-b-2 mx-auto w-64 mt-5'>
        <input class='focus:outline-none' type="text" placeholder="Enter your name" aria-label="Full name">
      </div>
      
      <div class='text-center flex items-center border-b border-b-2 mx-auto w-64 mt-5'>
        <input class='focus:outline-none' type="tel" placeholder="Enter your mobile" aria-label="Full name">
      </div>

      <div class="text-center mt-5">
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Check in
    </button>
      </div>


    </form>
  </div>
</template>