<template>
  <NuxtLayout>
    <PostPreview
        :id="1"
      title="Welcome to Sailsea Flows!"
      category="前端开发"
      :tags="['Vue', 'Tailwind CSS', 'JavaScript']"
      author="小明"
      authorAvatar="https://example.com/avatar.jpg"
      :participants="[
        {
          id: 1,
          name: '李四',
          avatar: 'https://avatars.githubusercontent.com/u/23456789?v=4',
        },
        {
          id: 2,
          name: '王五',
          avatar: 'https://avatars.githubusercontent.com/u/34567890?v=4',
        },
      ]"
      lastActivity="2024-10-10 12:00"
      :replies="5"
      :views="120"
    />
  </NuxtLayout>
</template>
