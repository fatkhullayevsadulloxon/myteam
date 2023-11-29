<template>
  <div>
    <SHeader />
    <SHero/>
    <SDirectors/>
    <SClients/>
    <StartedSStarted/>
    <SFooter/>
  </div>
</template>

<script>
import SHeader from "~/components/Layouts/SHeader.vue";
import SHero from "@/components/Hero/SHero.vue";
import SDirectors from "@/components/Directors/SDirectors.vue";
import SClients from "@/components/Clients/SClients.vue";
import SFooter from "@/components/Layouts/SFooter.vue";

export default {
  name: 'IndexPage',
  components: {SFooter, SClients, SDirectors, SHero, SHeader},
}
</script>
