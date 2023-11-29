<script>
export default {
  props: {
  img:{
    type: String
  }
  }
}
</script>

<template>
  <div class="grid grid-cols-1 gap-10 lg:gap-5 pt-[69px] sm:grid-cols-2 lg:grid-cols-3">
    <div class="bg-green-200">
      <div class="px-6 py-8 mx-auto pb-[56px]">
       <div class="flex justify-center">
         <img class="flex" src="../../static/team1.png" alt="">
       </div>
        <h3 class="text-center text-green-500 text-lg font-livvic font-bold pt-6">Nikita Marks</h3>
        <p class="text-white text-center font-livvic italic text-[15px]">Founder & CEO</p>
      </div>
      <div class="flex justify-center">
        <img src="../../static/plus.svg" class="absolute mt-[-30px]" alt="">
      </div>
    </div>
    <div class="bg-green-200">
      <div class="px-6 py-8 mx-auto pb-[56px]">
        <div class="flex justify-center">
          <img class="flex" src="../../static/team32.png" alt="">
        </div>
        <h3 class="text-center text-green-500 text-lg font-livvic font-bold pt-6">Cristian Duncan</h3>
        <p class="text-white text-center font-livvic italic text-[15px]">Co-founder & COO</p>
      </div>
      <div class="flex justify-center">
        <img src="../../static/plus.svg" class="absolute mt-[-30px]" alt="">
      </div>
    </div>
    <div class="bg-green-200">
      <div class="px-6 py-8 mx-auto pb-[56px]">
        <div class="flex justify-center">
          <img class="flex" src="../../static/team3.png" alt="">
        </div>
        <h3 class="text-center text-green-500 text-lg font-livvic font-bold pt-6">Cruz Hamer</h3>
        <p class="text-white text-center font-livvic italic text-[15px]">Co-founder & CTO</p>
      </div>
      <div class="flex justify-center">
        <img src="../../static/plus.svg" class="absolute mt-[-30px]" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
