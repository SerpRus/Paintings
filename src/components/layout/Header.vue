<template>
    <div class="header">
        <Container>
            <div class="header__wrapper">
                <Navigation class="header__navigation" />

                <Search class="header__search" placeholder="Поиск по названию картины" name="search" @search="(searchQuery) => $emit('search', searchQuery)" />
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

<style scoped lang="scss">
.header {
    padding: rem(24) 0;

    border-bottom: rem(1) solid #E1E1E1;

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: rem(16);

        @media ($screen-desktop-small) {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    &__navigation {
        @media ($screen-desktop-small) {
            padding: 0  rem(80);
        }
    }

    &__search {
        @media ($screen-tablet) {
            align-self: flex-end;
        }
    }
}
</style>