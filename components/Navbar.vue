<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { name: 'About', href: '#intro' }, // Mapping to Intro for now
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const isMenuOpen = ref(false)
const activeSection = ref('')
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Scroll & Active State Logic
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Simple active section detection
  const sections = links.map(link => link.href.substring(1))
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <div class="logo" @click="scrollToTop">
        <span class="logo-symbol">D</span>
        <span class="logo-text">Dhimas<span class="dot">.</span></span>
      </div>
      
      <div class="nav-right">
        <ul class="nav-links desktop-only">
          <li v-for="link in links" :key="link.name">
            <a 
              :href="link.href" 
              :class="{ 'active': activeSection === link.href.substring(1) }"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <a href="https://drive.google.com/file/d/1HdCiCLG5p1rsdV6grz5eVmRcLekpcNUp/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn-cv desktop-only">Lihat CV</a>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="hamburger" :class="{ 'is-active': isMenuOpen }"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
        <ul class="mobile-links">
          <li v-for="link in links" :key="link.name">
            <a 
              :href="link.href" 
              @click="closeMenu"
              :class="{ 'active': activeSection === link.href.substring(1) }"
            >
              {{ link.name }}
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1HdCiCLG5p1rsdV6grz5eVmRcLekpcNUp/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn-cv mobile" @click="closeMenu">Lihat CV</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.is-scrolled {
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-primary);
}

.logo-symbol {
  width: 32px;
  height: 32px;
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}

.dot {
  color: var(--primary-color);
}

/* Desktop Nav */
.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

/* CTA Button */
.btn-cv {
  padding: 0.6rem 1.2rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid transparent;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
}

.btn-cv:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 102;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-primary);
  position: relative;
  transition: all 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: var(--text-primary);
  transition: all 0.3s ease;
}

.hamburger::before { top: -8px; }
.hamburger::after { bottom: -8px; }

.hamburger.is-active {
  background-color: transparent;
}

.hamburger.is-active::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburger.is-active::after {
  transform: rotate(-45deg);
  bottom: 0;
}

/* Mobile Menu Overlay */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.mobile-menu.is-open {
  opacity: 1;
  pointer-events: all;
}

.mobile-links {
  list-style: none;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-links a {
  text-decoration: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  transition: color 0.2s;
}

.mobile-links a.active {
  color: var(--primary-color);
}

.btn-cv.mobile {
  display: inline-block;
  margin-top: 1rem;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  
  .menu-toggle {
    display: block;
  }
}
</style>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 1rem 0;
  
  /* Liquid Glass Effect */
  background: rgba(255, 255, 255, 0.7); /* Light glass */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(45deg, var(--primary-color), #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-primary);
  position: relative;
  transition: all 0.3s ease-in-out;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: var(--text-primary);
  transition: all 0.3s ease-in-out;
}

.hamburger::before {
  transform: translateY(-8px);
}

.hamburger::after {
  transform: translateY(8px);
}

.hamburger.is-active {
  background-color: transparent;
}

.hamburger.is-active::before {
  transform: rotate(45deg);
}

.hamburger.is-active::after {
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  }

  .nav-links.is-open {
    transform: translateX(0);
  }

  .nav-links a {
    font-size: 1.25rem;
  }
}
</style>
