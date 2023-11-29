<script lang="ts" setup>
import {ref, watch} from "vue";

  const openMenu = ref(false)

  const openCLick = () => {
    openMenu.value = !openMenu.value
  }

  watch(
    () => openMenu.value,
    (newValue) => {
      if (newValue) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  )
</script>

<template>
  <header class="bg-green py-[73px]">
    <div class="container flex items-center justify-between">
      <RouterLink to="/">
        <img src="/logo.svg" alt="logo" />
      </RouterLink>
      <ul class="hidden sm:flex items-center">
        <li class="ms-10">
          <RouterLink class="font-livvic !font-normal text-white text-lg hover:opacity-50 transition active:opacity-25" to="/">home</RouterLink>
        </li>
        <li class="ms-10">
          <RouterLink class="font-livvic !font-normal text-white text-lg hover:opacity-50 transition active:opacity-25" to="/">about</RouterLink>
        </li>
        <li class="ms-10">
            <RouterLink class="font-livvic !font-normal text-white text-lg border-2 leading-7	px-8 py-2.5 rounded-3xl	border-white hover:bg-white hover:text-green-300 transition" to="/">Contact us</RouterLink>
        </li>
      </ul>
<!--      Responsive header-->
    <div class="block sm:hidden">
      <button @click="openCLick">
        <img src="../../static/hamburger.svg" alt="">
      </button>
        <ul v-if="openMenu" class="bg-green-400 w-[60%] absolute pt-[73px] right-0 h-screen	top-0 z-[1]">
          <button @click="openMenu = false" class="float-right pe-5">
            <img src="../../static/close.svg" class="flex float-end" alt="">
          </button>
          <li class="mt-10 pt-[39px] flex justify-center ms-[-100px]">
            <RouterLink class="font-livvic !font-normal text-white text-lg" to="/">home</RouterLink>
          </li>
          <li class="mt-10 flex justify-center ms-[-100px]">
            <RouterLink class="font-livvic !font-normal text-white text-lg" to="/">about</RouterLink>
          </li>
          <li class="mt-10 flex justify-center">
            <RouterLink class="font-livvic !font-normal text-white text-lg border-2 leading-7	px-8 py-2.5 rounded-3xl	border-white hover:bg-white hover:text-green-300 transition" to="/">Contact us</RouterLink>
          </li>
        </ul>
      <div v-if="openMenu" class="bg-black absolute top-0 opacity-50 w-screen left-0 h-screen"></div>
    </div>
    </div>
  </header>
</template>

<style scoped>

.nested-enter-active, .nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

</style>
