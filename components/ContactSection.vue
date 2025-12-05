<script setup lang="ts">
import type { ContactInfo } from '~/types/portfolio'

defineProps<{
  contact: ContactInfo
}>()
</script>

<template>
  <section id="contact" class="section">
    <div class="contact-container">
      <div class="contact-card">
        <h2 class="section-title">Get In Touch</h2>
        <p class="text">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div class="links">
          <a :href="`mailto:${contact.email}`" class="btn-primary">
            Say Hello
          </a>
          <div class="socials">
            <a v-if="contact.github" :href="contact.github" target="_blank" rel="noopener" class="social-link">
              GitHub
            </a>
            <a v-if="contact.linkedin" :href="contact.linkedin" target="_blank" rel="noopener" class="social-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-container {
  width: 100%;
  max-width: 800px;
  padding: 0 1.5rem;
}

.contact-card {
  background: white;
  border: 1px solid var(--border-light);
  padding: 4rem 3rem;
  border-radius: var(--radius-2xl);
  text-align: center;
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
}

/* Subtle gradient background for card */
.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--primary-color), #60a5fa);
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-weight: 800;
  letter-spacing: -0.03em;
}

.text {
  margin-bottom: 3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: var(--primary-color);
  color: white;
  border-radius: 100px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
  background: var(--primary-dark);
}

.socials {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.social-link:hover {
  color: var(--primary-color);
  background: var(--bg-alt);
  border-color: var(--border-light);
}

@media (max-width: 640px) {
  .contact-card {
    padding: 3rem 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>

<style scoped>
.contact {
  padding: 8rem 0;
  display: flex;
  justify-content: center;
}

.contact-container {
  width: 100%;
  max-width: 800px;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(to right, var(--primary-color), #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(14, 165, 233, 0.1);
  padding: 3rem 2rem;
  border-radius: 24px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
  box-shadow: 0 25px 50px -12px rgba(14, 165, 233, 0.15);
}

.text {
  margin-bottom: 3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.btn.primary {
  position: relative;
  display: inline-block;
  padding: 1px; /* For border gradient */
  background: linear-gradient(45deg, var(--primary-color), #38bdf8);
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s;
}

.btn-content {
  display: block;
  padding: 1rem 2.5rem;
  background: #0f172a; /* Match dark theme bg */
  color: white;
  border-radius: 11px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background 0.2s;
}

.btn.primary:hover {
  transform: scale(1.05);
}

.btn.primary:hover .btn-content {
  background: transparent;
}

.socials {
  display: flex;
  gap: 2rem;
}

.social-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;
}

.social-link:hover {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}
</style>
