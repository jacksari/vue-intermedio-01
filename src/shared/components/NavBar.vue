<script setup lang="ts">
import type { RouterLink } from '../../router/link-router';

interface Props {
    title?: string,
    links: RouterLink[]
}

const props = defineProps<Props>();

</script>

<template>
    <div>
        <nav class="flex ">
            <p class="mr-4">{{ props.title || 'Titulo por defecto' }}</p>
            <RouterLink v-for="(link, index) in props.links" :active-class="'text-red-500'" class="text-xl mr-1"
                :to="{ name: link.name }" :key="link.path">{{ link.title }}</RouterLink>
            <!-- <RouterLink :active-class="'text-red-500'" class="text-xl mr-1" to="/about">About</RouterLink> -->
        </nav>

    </div>
</template>

<style scoped>

</style>