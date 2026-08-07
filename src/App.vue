<template>
    <div id="app" class="app">
        <Header class="app__header" @search="onSearch" />

        <main class="app__main">
            <RouterView />
        </main>

        <Footer class="app__footer" />
    </div>
</template>

<script>
import {computed} from 'vue';

import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import Container from './components/layout/Container.vue';
import BaseIcon from './components/common/icons/BaseIcon.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Container,
        BaseIcon,
    },
    provide() {
        return {
            searchQuery: computed(() => this.searchQuery)
        }
    },
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        onSearch(searchQuery) {
            this.searchQuery = searchQuery;
        }
    },
}
</script>

<style scoped lang="scss">
.app {
    display: flex;
    flex-direction: column;

    &__main {
        flex-grow: 1;
    }
}
</style>