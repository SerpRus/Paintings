<template>
    <div class="header">
        <Container>
            <div class="header__wrapper">
                <Navigation class="header__navigation" />

                <Search placeholder="Поиск по названию картины" name="search" />
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

    border-bottom: rem(1) solid #E1E1E1;

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__navigation {
        padding: 0  rem(96);
    }
}
</style>