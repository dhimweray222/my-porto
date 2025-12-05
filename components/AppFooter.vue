<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} MyPorto. Built with Nuxt 3 & TypeScript.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid var(--border-light);
  margin-top: 0;
  background: white;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
