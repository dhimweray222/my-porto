<script setup lang="ts">
import { usePortfolio } from '~/composables/usePortfolio'

const { data } = usePortfolio()
</script>

<template>
  <div class="page-wrapper">
    <Navbar />
    <main>
      <IntroSection :profile="data.profile" />
      <ExperienceSection :experience="data.experience" />
      <ContactSection :contact="data.contact" />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
