<template>
  <div
    class="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 m-4"
  >
    <div class="flex flex-col md:flex-row md:items-center justify-between">
      <!-- Title and Content -->
      <div class="flex-1">
        <h2
          class="text-xl font-bold text-gray-800 dark:text-white mb-2 mt-0 line-clamp-2 md:max-w-5xl max-w-3xl"
          @click="$router.push(`/ViewPost/${props.id}`)"
        >
          {{ title }}
        </h2>

        <p
          v-if="!hideContent"
          class="text-gray-600 dark:text-gray-300 line-clamp-3 mb-1"
        >
          {{ content }}
        </p>
        <div class="flex flex-wrap items-center space-x-2 mb-1">
          <UBadge color="primary">{{ category }}</UBadge>
          <UBadge
            color="primary"
            variant="outline"
            v-for="tag in tags.slice(0, 3)"
            :key="tag"
            >{{ tag }}</UBadge
          >
        </div>
      </div>

      <!-- Participants -->
      <div class="flex items-center space-x-2 md:ml-4 mr-4">
        <UAvatarGroup :size="isMobile ? 'xs' : 'sm'" :max="isMobile ? 3 : 5">
          <UAvatar v-if="authorAvatar" :src="authorAvatar" :alt="author" />
          <UAvatar v-else :alt="author" />
          <UAvatar
            v-for="participant in participants"
            :key="participant.id"
            :src="participant.avatar || ''"
            :alt="participant.name"
          />
        </UAvatarGroup>
      </div>

      <!-- Stats -->
      <div class="flex items-center md:ml-4 space-x-4">
        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-1" />
          <span>{{ lastActivity }}</span>
        </div>
        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <UIcon
            name="i-heroicons-chat-bubble-left-right"
            class="w-4 h-4 mr-1"
          />
          <span>{{ replies }} {{ $t("postInfo.replies") }}</span>
        </div>
        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <UIcon name="i-heroicons-eye" class="w-4 h-4 mr-1" />
          <span>{{ views }} {{ $t("postInfo.views") }}</span>
        </div>
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
  id: {
    type: Number,
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
  console.log(props);
});

// Remove event listener on unmount
onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
