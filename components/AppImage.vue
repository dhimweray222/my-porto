<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
  alt: string
}>()

const isLoaded = ref(false)

const onLoad = () => {
  isLoaded.value = true
}
</script>

<template>
  <div class="image-wrapper">
    <img 
      :src="src" 
      :alt="alt" 
      loading="lazy"
      :class="{ 'img-loaded': isLoaded }"
      @load="onLoad"
    />
    <div v-if="!isLoaded" class="skeleton"></div>
  </div>
</template>

<style scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: block;
}

.img-loaded {
  opacity: 1;
}

.skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
