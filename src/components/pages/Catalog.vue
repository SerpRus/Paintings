<template>
    <div class="catalog">
        <Container>
            <h1 class="catalog__title">
                Картины эпохи Возрождения
            </h1>

            <CardList />
        </Container>
    </div>
</template>

<script>
import Container from '@/components/layout/Container.vue';
import CardList from '@/components/views/CardList.vue';

export default {
    name: 'Catalog',
    components: {Container, CardList}
}
</script>

<style scoped lang="scss">
.catalog {
    padding: rem(45) 0;

    &__title {
        @include text-props(24, 36, 700);

        &:not(:last-child) {
            margin-bottom: rem(39);
        }
    }
}
</style>