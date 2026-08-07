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
                @click="onClick(item)"
            />
        </div>
    </div>
</template>

<script>
import Container from '@/components/layout/Container.vue';
import BaseCard from '@/components/common/cards/BaseCard.vue';

const baseCatalogItems = [{
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
    status: 'available',
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
    id: 'painting-5',
    imageSrc: '/images/painting-1.jpg',
    title: '«Рождение Венеры» Сандро Боттичелли',
    status: 'available',
    oldPrice: 2000000,
    price: 2000000,
}, {
    id: 'painting-6',
    imageSrc: '/images/painting-2.jpg',
    title: '«Тайная вечеря»  Леонардо да Винчи',
    status: 'available',
    price: 3000000,
}, {
    id: 'painting-7',
    imageSrc: '/images/painting-3.jpg',
    title: '«Сотворение Адама» Микеланджело',
    status: 'available',
    oldPrice: 6000000,
    price: 5000000,
}, {
    id: 'painting-8',
    imageSrc: '/images/painting-4.jpg',
    title: '«Урок анатомии»  Рембрандт',
    status: 'sold',
    oldPrice: 2000000,
    price: 2000000,
}, {
    id: 'painting-9',
    imageSrc: '/images/painting-1.jpg',
    title: '«Рождение Венеры» Сандро Боттичелли',
    status: 'available',
    oldPrice: 2000000,
    price: 2000000,
}, {
    id: 'painting-10',
    imageSrc: '/images/painting-2.jpg',
    title: '«Тайная вечеря»  Леонардо да Винчи',
    status: 'available',
    price: 3000000,
}, {
    id: 'painting-11',
    imageSrc: '/images/painting-3.jpg',
    title: '«Сотворение Адама» Микеланджело',
    status: 'available',
    oldPrice: 6000000,
    price: 5000000,
}, {
    id: 'painting-12',
    imageSrc: '/images/painting-4.jpg',
    title: '«Урок анатомии»  Рембрандт',
    status: 'sold',
    oldPrice: 2000000,
    price: 2000000,
}, {
    id: 'painting-13',
    imageSrc: '/images/painting-1.jpg',
    title: '«Рождение Венеры» Сандро Боттичелли',
    status: 'available',
    oldPrice: 2000000,
    price: 2000000,
}, {
    id: 'painting-14',
    imageSrc: '/images/painting-2.jpg',
    title: '«Тайная вечеря»  Леонардо да Винчи',
    status: 'available',
    price: 3000000,
}, {
    id: 'painting-15',
    imageSrc: '/images/painting-3.jpg',
    title: '«Сотворение Адама» Микеланджело',
    status: 'available',
    oldPrice: 6000000,
    price: 5000000,
}, {
    id: 'painting-16',
    imageSrc: '/images/painting-4.jpg',
    title: '«Урок анатомии»  Рембрандт',
    status: 'sold',
    oldPrice: 2000000,
    price: 2000000,
},]

export default {
    name: 'CardList',
    components: {Container, BaseCard},
    inject: ['searchQuery'],
    data() {
        return {
            catalogItems: baseCatalogItems,
            reservedIds: [],
        }
    },
    mounted() {
        this.getLocalReservedProducts();
    },
    watch: {
        searchQuery() {
            this.catalogItems = this.filterProducts(this.searchQuery);
        }
    },
    methods: {
        filterProducts(query) {
            if (!query.trim()) {
                return baseCatalogItems;
            }

            const searchTerm = query.toLowerCase().trim();

            return baseCatalogItems.filter(product =>
                product.title.toLowerCase().includes(searchTerm)
            );
        },
        fakeRequest(productData) {
            return new Promise((resolve) => {
                productData.status = 'processing';

                setTimeout(() => {
                    productData.status = 'reserved';

                    this.reservedIds.push(productData.id)
                    localStorage.setItem('reservedIds', JSON.stringify(this.reservedIds));

                    resolve();
                }, 2000)
            })
        },
        async onClick(productData) {
            if (productData.status === 'available') {
                await this.fakeRequest(productData);
            }
        },
        getLocalReservedProducts() {
            const localReservedIds = localStorage.getItem('reservedIds');
            if (localReservedIds) {
                this.reservedIds = JSON.parse(localReservedIds);
            }

            this.catalogItems.map((product) => {
                if (this.reservedIds.includes(product.id)) {
                    product.status = 'reserved';
                }
            });
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