<template>
  <div>
    <div class='mt-20'>
      <logo style='width:120px;margin:auto' />
      <h1 class='text-center text-3xl mt-10'>
        NuxtJS KickStart Template
      </h1>
      <h2 class='text-center'>
        Create simple, beautiful, and elegant website.
      </h2>
      
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
