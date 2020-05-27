<template>
  <div>
    <div class='mt-64 text-center'>
      <h1 class='text-3xl'>TickTick</h1>
      <h2 class='text-xl'>Browse Check-ins</h2>
    </div>

    <table class="table-fixed w-1/3 mx-auto mt-5">
      <thead>
        <tr>
          <th class="w-1/2 px-4 py-2">Name</th>
          <th class="w-1/3 sm:w-1/2 px-4 py-2">Mobile</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="checkin in checkins" :key="checkin.id">
          <td class="border px-4 py-2">{{checkin.name}}</td>
          <td class="border px-4 text-center">{{checkin.mobile}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>


<script>
export default {
  data() {
    return {
      checkins: [{id:"abxcdfef", "name":"lau", "mobile":"0197528388"}]
    }
  },
  mounted() {
    var checkins = [];
    this.$fireStore.collection("checkins").get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        checkins.push({id:doc.id, ...doc.data()})
      });
    })
    this.checkins = checkins;
  } 
}
</script>