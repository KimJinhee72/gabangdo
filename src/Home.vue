<template>
  <div class="wrap">
    <!-- <Header /> -->
    <main>
      <Visual />
      <Content1 />
      <Content2 />
      <Content3 />
      <Modal />      
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Visual from "@/views/b_main/Visual.vue";
import Content1 from "@/views/b_main/Content1.vue";
import Content2 from "@/views/b_main/Content2.vue";
import Content3 from "@/views/b_main/Content3.vue";
import Modal from "@/views/b_main/Modal.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
</style>
