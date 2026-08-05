<template>
    <div class="header">
        <Container>
            <div class="header__wrapper">
                <Navigation />

                <Search />
            </div>
        </Container>
    </div>
</template>

<script>
import Container from '@/components/layout/Container.vue';
import Navigation from '@/components/features/Navigation.vue';
import Search from '@/components/common/inputs/Search.vue';

export default {
    name: 'Header',
    components: {Container, Navigation, Search}
}
</script>

<style lang="scss">
.header {
    padding: rem(24) 0;
}
</style>