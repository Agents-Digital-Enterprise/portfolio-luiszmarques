<template>
  <div>
    <button
      @click="open = !open"
      class="text-text-secondary hover:text-text-primary p-2 transition-colors focus-visible:outline-2 focus-visible:outline-accent-light focus-visible:outline-offset-2 rounded"
      :aria-label="open ? 'Close menu' : 'Open menu'"
    >
      <svg v-if="!open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <div v-if="open" class="fixed top-16 left-0 right-0 bg-bg-surface border-b border-border px-4 py-6 flex flex-col gap-4 md:hidden z-50">
      <a v-for="link in links" :key="link.href" :href="link.href" class="text-text-secondary hover:text-text-primary text-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent-light focus-visible:outline-offset-2 rounded" @click="open = false">
        {{ link.label }}
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const open = ref(false);
const links = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
</script>
