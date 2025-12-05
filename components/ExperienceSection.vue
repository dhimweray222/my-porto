<script setup lang="ts">
import { ref } from 'vue'
import type { ExperienceItem } from '~/types/portfolio'

defineProps<{
  experience: ExperienceItem[]
}>()

const selectedItem = ref<ExperienceItem | null>(null)
const isModalOpen = ref(false)

const openModal = (item: ExperienceItem) => {
  selectedItem.value = item
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedItem.value = null
  }, 300)
  document.body.style.overflow = ''
}
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">Work Experience</h2>
      <div class="timeline">
        <div 
          v-for="(item, index) in experience" 
          :key="item.id" 
          class="timeline-item"
          :class="{ 'reverse': index % 2 !== 0 }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="timeline-date desktop-only">
            <div class="date-wrapper">
              <span class="date-text">{{ item.period }}</span>
            </div>
            <div class="tech-stack-preview" v-if="item.techStack">
              <span class="tech-label">Technologies</span>
              <div class="tags-wrapper">
                <span v-for="tech in item.techStack.slice(0, 5)" :key="tech" class="mini-tag">{{ tech }}</span>
                <span v-if="item.techStack.length > 5" class="mini-tag-more">+{{ item.techStack.length - 5 }}</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-content-wrapper">
            <div v-if="item.logo" class="company-logo">
              <NuxtImg :src="item.logo" :alt="item.company" />
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="company">{{ item.company }}</h3>
                <span class="period mobile-only">{{ item.period }}</span>
              </div>
              <h4 class="role">{{ item.role }}</h4>
              <ul class="description">
                <li v-for="(desc, i) in item.description" :key="i">{{ desc }}</li>
              </ul>
              
              <button class="btn-detail" @click="openModal(item)">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Transition name="modal">
      <div v-if="isModalOpen && selectedItem" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal">&times;</button>
          
          <div class="modal-header">
            <div v-if="selectedItem.logo" class="modal-logo">
              <NuxtImg :src="selectedItem.logo" :alt="selectedItem.company" />
            </div>
            <div>
              <h3 class="modal-company">{{ selectedItem.company }}</h3>
              <p class="modal-role">{{ selectedItem.role }}</p>
              <span class="modal-period">{{ selectedItem.period }}</span>
            </div>
          </div>

          <div class="modal-body">
            <div v-if="selectedItem.projectImage" class="project-image">
              <NuxtImg :src="selectedItem.projectImage" :alt="selectedItem.company + ' Project'" />
            </div>

            <div class="modal-section">
              <h4>Description</h4>
              <p>{{ selectedItem.fullDescription || 'No detailed description available.' }}</p>
            </div>

            <div v-if="selectedItem.techStack" class="modal-section">
              <h4>Tech Stack</h4>
              <div class="tech-tags">
                <span v-for="tech in selectedItem.techStack" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 2.5rem;
  margin-bottom: 5rem;
  text-align: center;
  color: var(--text-primary);
}

.timeline {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
}

/* Vertical Line */
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, var(--border-light) 10%, var(--border-light) 90%, transparent);
  z-index: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-item {
  width: 50%;
  position: relative;
  z-index: 1;
  padding-right: 3rem;
  
  /* Animation */
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.timeline-item.reverse {
  align-self: flex-end;
  padding-right: 0;
  padding-left: 3rem;
}

/* Dot on the line */
.timeline-item::after {
  content: '';
  position: absolute;
  top: 2.5rem;
  right: -6px;
  width: 12px;
  height: 12px;
  background: white;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--bg-alt);
  z-index: 2;
}

.timeline-item.reverse::after {
  right: auto;
  left: -6px;
}

.timeline-content-wrapper {
  background: white;
  border: 1px solid var(--border-light);
  padding: 2rem;
  border-radius: var(--radius-xl);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  box-shadow: var(--shadow-sm);
}

.timeline-item:hover .timeline-content-wrapper {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(37, 99, 235, 0.2);
}

.company-logo {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timeline-content {
  flex: 1;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.company {
  font-size: 1.25rem;
  color: var(--text-primary);
  font-weight: 700;
}

.period {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
  background: var(--bg-color);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  border: 1px solid var(--border-light);
}

.role {
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--primary-color);
}

.description {
  list-style-type: none;
  padding: 0;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
}

.description li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.25rem;
}

.description li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-light);
  font-weight: bold;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 24px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 4rem;
    padding-right: 0;
  }
  
  .timeline-item.reverse {
    padding-left: 4rem;
    padding-right: 0;
  }
  
  .timeline-item::after {
    left: 18px;
    right: auto;
  }
  
  .timeline-item.reverse::after {
    left: 18px;
  }

  .timeline-content-wrapper {
    flex-direction: column;
  }
  
  .company-logo {
    width: 48px;
    height: 48px;
    margin-bottom: 0.5rem;
  }

  .timeline-date.desktop-only {
    display: none;
  }
}

@media (min-width: 769px) {
  .period.mobile-only {
    display: none;
  }
}

.timeline-date {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1rem 3rem;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.date-text {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(90deg, var(--text-secondary), var(--text-tertiary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.tech-stack-preview {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tech-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  font-weight: 700;
}

.tags-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 280px;
}

.mini-tag {
  font-size: 0.8rem;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  color: var(--text-secondary);
  white-space: nowrap;
  box-shadow: var(--shadow-sm);
}

.mini-tag-more {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  padding: 0.25rem;
  align-self: center;
}

.timeline-item .timeline-date {
  left: 100%;
  align-items: flex-start;
}

.timeline-item.reverse .timeline-date {
  right: 100%;
  left: auto;
  align-items: flex-end;
  text-align: right;
}

.timeline-item.reverse .tags-wrapper {
  justify-content: flex-end;
}

.btn-detail {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.btn-detail::after {
  content: '→';
  transition: transform 0.2s;
}

.btn-detail:hover {
  color: var(--primary-dark);
}

.btn-detail:hover::after {
  transform: translateX(4px);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-2xl);
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2.5rem;
  box-shadow: var(--shadow-xl);
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--bg-alt);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.close-btn:hover {
  background: var(--text-primary);
  color: white;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-light);
}

.modal-logo {
  width: 72px;
  height: 72px;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
}

.modal-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-company {
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.modal-role {
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.modal-period {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-family: monospace;
}

.project-image {
  width: 100%;
  height: 350px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: 2.5rem;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-md);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-section {
  margin-bottom: 2.5rem;
}

.modal-section h4 {
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.modal-section p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.05rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-tag {
  padding: 0.5rem 1rem;
  background: var(--bg-alt);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 500;
}

/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(10px);
}
</style>

<style scoped>
.section-title {
  font-size: 2rem;
  margin-bottom: 4rem;
  text-align: center;
}

.timeline {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
}

/* Vertical Line */
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: rgba(14, 165, 233, 0.2);
  z-index: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-item {
  width: 50%;
  position: relative;
  z-index: 1;
  padding-right: 2rem;
  
  /* Animation */
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.timeline-item.reverse {
  align-self: flex-end;
  padding-right: 0;
  padding-left: 2rem;
}

/* Dot on the line */
.timeline-item::after {
  content: '';
  position: absolute;
  top: 2rem;
  right: -6px;
  width: 12px;
  height: 12px;
  background: var(--primary-color);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.2);
}

.timeline-item.reverse::after {
  right: auto;
  left: -6px;
}

.timeline-content-wrapper {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(14, 165, 233, 0.1);
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.timeline-item:hover .timeline-content-wrapper {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.95);
  border-color: var(--primary-color);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
}

.company-logo {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  border: 1px solid rgba(14, 165, 233, 0.1);
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timeline-content {
  flex: 1;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.company {
  font-size: 1.25rem;
  color: var(--primary-color);
  font-weight: 600;
}

.period {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-family: monospace;
  background: rgba(14, 165, 233, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.role {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: var(--text-primary);
}

.description {
  list-style-type: none;
  padding: 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

.description li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.25rem;
}

.description li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 3rem;
    padding-right: 0;
  }
  
  .timeline-item.reverse {
    padding-left: 3rem;
    padding-right: 0;
  }
  
  .timeline-item::after {
    left: 14px;
    right: auto;
  }
  
  .timeline-item.reverse::after {
    left: 14px;
  }

  .timeline-content-wrapper {
    flex-direction: column;
  }
  
  .company-logo {
    width: 48px;
    height: 48px;
    margin-bottom: 0.5rem;
  }
}

.btn-detail {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background: white;
  border: 1px solid rgba(14, 165, 233, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.btn-detail:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
  box-shadow: 0 4px 6px rgba(14, 165, 233, 0.2);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border: 1px solid rgba(14, 165, 233, 0.1);
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
  z-index: 10;
}

.close-btn:hover {
  color: var(--primary-color);
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(14, 165, 233, 0.1);
}

.modal-logo {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  border: 1px solid rgba(14, 165, 233, 0.1);
}

.modal-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-company {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.modal-role {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.modal-period {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-family: monospace;
}

.project-image {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 1px solid rgba(14, 165, 233, 0.1);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-section {
  margin-bottom: 2rem;
}

.modal-section h4 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.modal-section p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.4rem 0.8rem;
  background: rgba(14, 165, 233, 0.05);
  border: 1px solid rgba(14, 165, 233, 0.1);
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--text-primary);
}

/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.95);
}
</style>
