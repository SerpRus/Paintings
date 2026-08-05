<template>
    <div id="app" class="app">
        <Header class="app__header"/>

        <main class="app__main">
            <RouterView />
        </main>

        <Footer class="app__footer" />
    </div>
</template>

<script>
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
}
</script>

<style lang="scss">
.app {
    display: flex;
    flex-direction: column;

    &__main {
        flex-grow: 1;
    }
}
</style>