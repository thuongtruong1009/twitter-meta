<template>
  <div class="q-pa-lg text-grey-6">
    <p>Likes</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eos reiciendis impedit amet quibusdam, atque repellat minus ab libero fugit porro maiores ex quasi molestiae quam soluta dolorum veritatis. Officia.</p>
    <p>Test pinia counter: {{ store.counter }}</p>
  </div>
</template>

<script setup>
import { useStore } from "/src/pinia/index.js";

const store = useStore();
</script>

