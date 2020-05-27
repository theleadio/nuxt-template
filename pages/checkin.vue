<template>
  <div>
    <div class='mt-64 text-center'>
      <h1 class='text-3xl'>TickTick</h1>
      <h2 class='text-xl'>Contactless Check-in System</h2>
    </div>
    <form class="w-full">
      <div class='flex items-center border-b border-b-2 mx-auto w-64 mt-8'>
        <input v-model="mobile" class='focus:outline-none' type="text" placeholder="Enter your name" aria-label="Full name">
      </div>
      
      <div class='text-center flex items-center border-b border-b-2 mx-auto w-64 mt-5'>
        <input v-model="name" class='focus:outline-none' type="tel" placeholder="Enter your mobile" aria-label="Full name">
      </div>

      <div class="text-center mt-8">
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" @click="checkin">
      Check in
    </button>
      </div>


    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      mobile:""
    }
  },
 methods: {
   checkin() {
     console.log(this.$fireStore);
     var doc = this.$fireStore.collection("checkins").add({
       name: this.name,
       mobile: this.mobile
     })
     .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    alert("Check in successfully");
    this.name = "";
    this.mobile = "";
   }
 } 
}
</script>