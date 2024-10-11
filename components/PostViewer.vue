<template>
  <div
      class="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 m-4"
  >
    <div class="flex flex-col md:flex-row md:items-center justify-between">
      <!-- Title and Content -->
      <div class="flex-1">
        <h1
            class="text-2xl font-bold text-gray-800 dark:text-white mb-2 mt-0 line-clamp-2 md:max-w-5xl max-w-3xl"
        >
          {{ title }}
        </h1>

        <div class="mr-4 text-sm text-gray-500 dark:text-gray-400">
          <div>
            <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-1"/>
            <span class="mr-3">{{ formattedDate }}</span>

            <UIcon
                name="i-heroicons-chat-bubble-left-right"
                class="w-4 h-4 mr-1"
            />
            <span class="mr-3">{{ replies }} {{ $t("postInfo.replies") }}</span>

            <UIcon name="i-heroicons-eye" class="w-4 h-4 mr-1"/>
            <span class="mr-3">{{ views }} {{ $t("postInfo.views") }}</span>

            <UIcon name="i-heroicons-user" class="w-4 h-4 mr-1"/>
            <span class="mr-3"> By {{ author }}</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center space-x-2 mb-4 mt-4">
          <UBadge color="primary">{{ category }}</UBadge>
          <UBadge
              color="primary"
              variant="outline"
              v-for="tag in tags.slice(0, 3)"
              :key="tag"
          >{{ tag }}
          </UBadge
          >
        </div>

        <p
            class="text-gray-600 dark:text-gray-300 mb-1"
        >
          <slot/>
        </p>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
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
  lastActivity: {
    type: String,
    required: true,
  },
  replies: {
    type: Number,
    required: true,
  },
  repliesList: {
    type: [String],
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  formattedDate: {
    type: String,
    required: true,
  }
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
