<template>
    <div class="card-list">
        <div class="card-list__list">
            <BaseCard
                v-for="item in catalogItems"
                :key="item.id"
                class="card-list__list-item"
                :image-src="item.imageSrc"
                :title="item.title"
                :status="item.status"
                :old-price="item.oldPrice"
                :price="item.price"
            />
        </div>
    </div>
</template>

<script>
import Container from '@/components/layout/Container.vue';
import BaseCard from '@/components/common/cards/BaseCard.vue';

export default {
    name: 'CardList',
    components: {Container, BaseCard},
    data() {
        return {
            catalogItems: [{
                id: 'painting-1',
                imageSrc: '/images/painting-1.jpg',
                title: '«Рождение Венеры» Сандро Боттичелли',
                status: 'available',
                oldPrice: 2000000,
                price: 2000000,
            }, {
                id: 'painting-2',
                imageSrc: '/images/painting-2.jpg',
                title: '«Тайная вечеря»  Леонардо да Винчи',
                status: 'available',
                price: 3000000,
            }, {
                id: 'painting-3',
                imageSrc: '/images/painting-3.jpg',
                title: '«Сотворение Адама» Микеланджело',
                status: 'reserved',
                oldPrice: 6000000,
                price: 5000000,
            }, {
                id: 'painting-4',
                imageSrc: '/images/painting-4.jpg',
                title: '«Урок анатомии»  Рембрандт',
                status: 'sold',
                oldPrice: 2000000,
                price: 2000000,
            }, {
                id: 'painting-1',
                imageSrc: '/images/painting-1.jpg',
                title: '«Рождение Венеры» Сандро Боттичелли',
                status: 'available',
                oldPrice: 2000000,
                price: 2000000,
            }, {
                id: 'painting-2',
                imageSrc: '/images/painting-2.jpg',
                title: '«Тайная вечеря»  Леонардо да Винчи',
                status: 'available',
                price: 3000000,
            }, {
                id: 'painting-3',
                imageSrc: '/images/painting-3.jpg',
                title: '«Сотворение Адама» Микеланджело',
                status: 'reserved',
                oldPrice: 6000000,
                price: 5000000,
            }, {
                id: 'painting-4',
                imageSrc: '/images/painting-4.jpg',
                title: '«Урок анатомии»  Рембрандт',
                status: 'sold',
                oldPrice: 2000000,
                price: 2000000,
            }, {
                id: 'painting-1',
                imageSrc: '/images/painting-1.jpg',
                title: '«Рождение Венеры» Сандро Боттичелли',
                status: 'available',
                oldPrice: 2000000,
                price: 2000000,
            }, {
                id: 'painting-2',
                imageSrc: '/images/painting-2.jpg',
                title: '«Тайная вечеря»  Леонардо да Винчи',
                status: 'available',
                price: 3000000,
            }, {
                id: 'painting-3',
                imageSrc: '/images/painting-3.jpg',
                title: '«Сотворение Адама» Микеланджело',
                status: 'reserved',
                oldPrice: 6000000,
                price: 5000000,
            }, {
                id: 'painting-4',
                imageSrc: '/images/painting-4.jpg',
                title: '«Урок анатомии»  Рембрандт',
                status: 'sold',
                oldPrice: 2000000,
                price: 2000000,
            }, {
                id: 'painting-1',
                imageSrc: '/images/painting-1.jpg',
                title: '«Рождение Венеры» Сандро Боттичелли',
                status: 'available',
                oldPrice: 2000000,
                price: 2000000,
            }, {
                id: 'painting-2',
                imageSrc: '/images/painting-2.jpg',
                title: '«Тайная вечеря»  Леонардо да Винчи',
                status: 'available',
                price: 3000000,
            }, {
                id: 'painting-3',
                imageSrc: '/images/painting-3.jpg',
                title: '«Сотворение Адама» Микеланджело',
                status: 'reserved',
                oldPrice: 6000000,
                price: 5000000,
            }, {
                id: 'painting-4',
                imageSrc: '/images/painting-4.jpg',
                title: '«Урок анатомии»  Рембрандт',
                status: 'sold',
                oldPrice: 2000000,
                price: 2000000,
            },],
        }
    }
}
</script>

<style lang="scss">
.card-list {
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: rem(32);

        &-item {
            @include flex-item-width(1, rem(32));

            @media ($screen-tablet) {
                @include flex-item-width(2, rem(32));
            }

            @media ($screen-desktop-small) {
                @include flex-item-width(4, rem(32));
            }
        }
    }
}
</style>