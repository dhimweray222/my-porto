<template>
  <div class="app-layout">
    <div class="background-animation"></div>
    <div class="floating-shapes">
      <span class="shape shape-1"></span>
      <span class="shape shape-2"></span>
      <span class="shape shape-3"></span>
    </div>
    <div class="noise-overlay"></div>
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Brand Colors - Premium Blue Accent */
  --primary-color: #2563eb; /* Blue 600 */
  --primary-light: #60a5fa; /* Blue 400 */
  --primary-dark: #1d4ed8; /* Blue 700 */
  
  /* Backgrounds */
  --bg-color: #fafafa; /* Main background - not pure white */
  --bg-alt: #f4f4f5; /* Alternating section background */
  --card-bg: rgba(255, 255, 255, 0.7);
  --card-border: rgba(255, 255, 255, 0.5);
  
  /* Text */
  --text-primary: #18181b; /* Zinc 900 */
  --text-secondary: #71717a; /* Zinc 500 */
  --text-tertiary: #a1a1aa; /* Zinc 400 */
  
  /* UI Elements */
  --border-light: rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Layout */
  --container-width: 1024px;
  --container-padding: 2rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-primary);
  font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  line-height: 1.6;
}

.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.03; /* Very subtle */
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.background-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background-color: var(--bg-color);
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
}

.floating-shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.08; /* Extremely low opacity */
  animation: float 25s infinite linear;
}

.shape-1 {
  top: -20%;
  left: -10%;
  width: 60vw;
  height: 60vw;
  background: var(--primary-color);
  animation-duration: 40s;
}

.shape-2 {
  bottom: -20%;
  right: -10%;
  width: 50vw;
  height: 50vw;
  background: #a855f7; /* Purple accent */
  animation-duration: 45s;
  animation-direction: reverse;
}

.shape-3 {
  top: 40%;
  left: 30%;
  width: 40vw;
  height: 40vw;
  background: #10b981; /* Emerald accent */
  animation-duration: 50s;
  opacity: 0.05;
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(50px, 80px) rotate(10deg); }
  66% { transform: translate(-30px, 40px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

* {
  box-sizing: border-box;
}

.section {
  padding: 6rem 0;
  position: relative;
}

.section-alt {
  background-color: var(--bg-alt);
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 0;
}

p {
  color: var(--text-secondary);
}

</style>
