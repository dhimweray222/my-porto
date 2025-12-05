<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Profile } from '~/types/portfolio'

const props = defineProps<{
  profile: Profile
}>()

const displayedRole = ref('')
const fullRole = props.profile.role
let typeIndex = 0

const typeRole = () => {
  if (typeIndex < fullRole.length) {
    displayedRole.value += fullRole.charAt(typeIndex)
    typeIndex++
    setTimeout(typeRole, 100)
  }
}

onMounted(() => {
  setTimeout(typeRole, 500)
})
</script>

<template>
  <section id="intro" class="section intro">
    <div class="container intro-container">
      <div class="intro-text">
        <h1 class="name">Hi, I'm {{ profile.name }}</h1>
        <h2 class="role">
          {{ displayedRole }}<span class="cursor">|</span>
        </h2>
        <p class="bio">{{ profile.bio }}</p>
        
      </div>

      <div class="intro-visual">
        <div class="visual-circle"></div>
        <div class="visual-content">
          <!-- Placeholder for profile image or 3D element -->
          <div class="profile-placeholder">
            <nuxt-img :src="profile.image" alt="Profile Image" width="320" height="320" class="profile-image" />
          </div>
        </div>
      </div>
    </div>

    <a href="#experience" class="scroll-down" aria-label="Scroll down">
      <span class="arrow">↓</span>
    </a>
  </section>
</template>

<style scoped>
.intro {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.intro-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
}

.intro-text {
  text-align: left;
  z-index: 2;
}

.intro-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(0.95); opacity: 0.5; }
}

.profile-placeholder {
  width: 320px;
  height: 320px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  backdrop-filter: blur(20px);
  position: relative;
  z-index: 1;
  box-shadow: 
    0 20px 40px -10px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  transform: rotate(-3deg);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.profile-placeholder:hover {
  transform: rotate(0deg) scale(1.02) translateY(-5px);
  box-shadow: 
    0 30px 60px -12px rgba(37, 99, 235, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.8);
}

.name {
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary) 30%, var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.role {
  font-size: 1.75rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 500;
  min-height: 1.5em;
}

.cursor {
  display: inline-block;
  width: 3px;
  background-color: var(--primary-color);
  animation: blink 1s step-end infinite;
  margin-left: 6px;
  height: 1.2em;
  vertical-align: middle;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.bio {
  margin-bottom: 3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  font-size: 1.125rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.5s forwards;
  max-width: 540px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  padding: 0.6rem 1.2rem;
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  cursor: default;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;
  box-shadow: var(--shadow-sm);
}

.skill-tag:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-down {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-tertiary);
  text-decoration: none;
  font-size: 1.5rem;
  animation: bounce 2s infinite;
  opacity: 0.7;
  transition: color 0.3s;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.scroll-down:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

@media (max-width: 960px) {
  .intro-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
  }

  .intro-text {
    text-align: center;
    order: 2;
  }

  .intro-visual {
    order: 1;
  }

  .bio {
    margin-left: auto;
    margin-right: auto;
  }

  .skills-container {
    justify-content: center;
  }
  
  .name {
    font-size: 3rem;
  }
}
</style>

<style scoped>
.intro {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.intro-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.intro-text {
  text-align: left;
  z-index: 2;
}

.intro-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-circle {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0% { transform: scale(0.8); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(0.8); opacity: 0.5; }
}

.profile-placeholder {
  width: 280px;
  height: 280px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(14, 165, 233, 0.1);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  backdrop-filter: blur(10px);
  animation: morph 8s ease-in-out infinite;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px rgba(14, 165, 233, 0.1);
}

@keyframes morph {
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

.name {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, var(--primary-color), #38bdf8, #0284c7);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-flow 5s ease infinite;
  line-height: 1.2;
}

@keyframes gradient-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.role {
  font-size: 1.75rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-weight: 400;
  min-height: 1.5em;
}

.cursor {
  display: inline-block;
  width: 2px;
  background-color: var(--primary-color);
  animation: blink 1s step-end infinite;
  margin-left: 4px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.bio {
  margin-bottom: 2.5rem;
  line-height: 1.8;
  color: var(--text-primary);
  font-size: 1.125rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1s forwards;
  max-width: 500px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(14, 165, 233, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-primary);
  transition: all 0.3s ease;
  cursor: default;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.skill-tag:hover {
  background: rgba(14, 165, 233, 0.1);
  transform: translateY(-5px) scale(1.05);
  border-color: var(--primary-color);
  box-shadow: 0 5px 15px rgba(14, 165, 233, 0.15);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-down {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 2rem;
  animation: bounce 2s infinite;
  opacity: 0.7;
  transition: opacity 0.3s;
  z-index: 10;
}

.scroll-down:hover {
  opacity: 1;
  color: var(--primary-color);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

@media (max-width: 960px) {
  .intro-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .intro-text {
    text-align: center;
    order: 2;
  }

  .intro-visual {
    order: 1;
  }

  .bio {
    margin-left: auto;
    margin-right: auto;
  }

  .skills-container {
    justify-content: center;
  }
  
  .name {
    font-size: 2.5rem;
  }
}
</style>
