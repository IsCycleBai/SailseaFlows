<template>
    <div
      class="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out p-4"
    >
      <div class="flex flex-col md:flex-row md:items-center justify-between">
        <!-- Participants and Title Section -->
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center">
            <UAvatar
              v-if="authorAvatar"
              :src="authorAvatar"
              :alt="author"
              class="mr-2"
            />
            <h3
              class="text-lg font-bold text-gray-800 dark:text-white mb-2 mt-0 line-clamp-2 md:max-w-5xl max-w-3xl"
            >
              {{ title }}
            </h3>
          </div>
          <div class="flex items-center text-lg font-bold text-gray-800 dark:text-white ml-4">
            <span>{{ replies }}</span>
          </div>
        </div>
  
        <!-- Content and Category Section -->
        <div class="flex-1 mt-2">
          <p
            v-if="!hideContent"
            class="text-gray-600 dark:text-gray-300 line-clamp-3 mb-1"
          >
            {{ content }}
          </p>
          <div class="mb-1">
            <UBadge color="primary">{{ category }}</UBadge>
          </div>
        </div>
  
        <!-- Last Activity Section -->
        <div class="flex flex-col items-end md:ml-4">
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {{ lastActivity }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    hideContent: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    author: {
      type: String,
      required: true,
    },
    authorAvatar: {
      type: String,
      default: "",
    },
    participants: {
      type: Array,
      default: () => [],
    },
    lastActivity: {
      type: String,
      required: true,
    },
    replies: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
  });
  
  const isMobile = ref(false);
  
  // Check if the screen is mobile
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };
  
  // Call on mount and add event listener
  onMounted(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
  });
  
  // Remove event listener on unmount
  onUnmounted(() => {
    window.removeEventListener("resize", checkMobile);
  });
  </script>
  