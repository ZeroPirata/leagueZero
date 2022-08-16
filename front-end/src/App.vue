<template>
  <div class="App">
    <EloList />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import EloList from "@/components/EloList.vue";
export default defineComponent({
  name: "App",
  components: { EloList },
});
</script>
