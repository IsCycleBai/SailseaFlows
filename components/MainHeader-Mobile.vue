<template>
  <div class="flex flex-wrap m-4 rounded-lg border border-gray-700">
    <section class="relative mx-auto w-full">
      <!-- navbar -->
      <nav
        class="flex justify-between bg-inherit text-white rounded-lg w-full"
        style="height: 50px"
      >
        <div
          class="px-5 xl:px-12 py-2 flex w-full items-center justify-between"
        >
          <a class="text-2xl font-bold font-heading" href="#">
            {{ AppConfig.title }}
          </a>
          <!-- Nav Links -->
          <ul
            class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-8"
          >
            <li>
              <a class="hover:text-gray-200" href="#">{{
                $t("header.home")
              }}</a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">{{
                $t("header.discover")
              }}</a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">{{
                $t("header.category")
              }}</a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">{{
                $t("header.user")
              }}</a>
            </li>
          </ul>
          <!-- Search Box -->
          <div class="relative">
            <UButton @click="isOpen = true">Search</UButton>
          </div>
        </div>
      </nav>
    </section>
  </div>

  <UModal v-model="isOpen">
    <UCommandPalette
      ref="commandPaletteRef"
      :groups="groups"
      :autoselect="false"
      @update:model-value="onSelect"
    />
  </UModal>
</template>

<script setup lang="ts">
import { computed } from "vue";

const isOpen = ref(false);
const commandPaletteRef = ref();
const AppConfig = useAppConfig();
const toast = useToast()

const data = [
  {
    id: "benjamincanac",
    label: "benjamincanac",
    href: "https://github.com/benjamincanac",
    target: "_blank",
    avatar: {
      src: "https://ipx.nuxt.com/s_16x16/gh_avatar/benjamincanac",
      srcset: "https://ipx.nuxt.com/s_32x32/gh_avatar/benjamincanac 2x",
      loading: "lazy",
    },
  },
  {
    id: "Atinux",
    label: "Atinux",
    href: "https://github.com/Atinux",
    target: "_blank",
    avatar: {
      src: "https://ipx.nuxt.com/s_16x16/gh_avatar/Atinux",
      srcset: "https://ipx.nuxt.com/s_32x32/gh_avatar/Atinux 2x",
      loading: "lazy",
    },
  },
  {
    id: "smarroufin",
    label: "smarroufin",
    href: "https://github.com/smarroufin",
    target: "_blank",
    avatar: {
      src: "https://ipx.nuxt.com/s_16x16/gh_avatar/smarroufin",
      srcset: "https://ipx.nuxt.com/s_32x32/gh_avatar/smarroufin 2x",
      loading: "lazy",
    },
  },
];

const actions = [
  {
    id: "a0",
    label: "Start a Thread",
    icon: "i-heroicons-document-plus",
    click: () => toast.add({ title: "New file added!" }),
  },
];

const groups = computed(() =>
  [
    commandPaletteRef.value?.query
      ? {
          key: "data",
          commands: data,
        }
      : {
          key: "actions",
          commands: actions,
        },
  ].filter(Boolean)
);

function onSelect(option) {
  if (option.click) {
    option.click();
  } else if (option.to) {
    router.push(option.to);
  } else if (option.href) {
    window.open(option.href, "_blank");
  }
}
</script>
