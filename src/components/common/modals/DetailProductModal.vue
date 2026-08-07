<template>
    <BaseModal
        v-if="visible"
        class="detail-product-modal"
        :visible="visible"
        :title="productData.title"
        @close="close"
    >
        <div class="detail-product-modal__section">
            <div class="detail-product-modal__section-title">Описание:</div>

             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid aut beatae, cumque doloribus esse ex illo inventore minima nam nesciunt perferendis repellat repellendus saepe sunt suscipit ullam vel! Accusamus aspernatur assumenda beatae facere impedit itaque modi nemo placeat rerum sint. Architecto atque blanditiis eius eligendi error, eum eveniet ex exercitationem labore, nisi nostrum obcaecati suscipit ullam voluptatem voluptatibus! Aliquid consectetur cum cumque cupiditate, illum, modi molestiae molestias necessitatibus quaerat quisquam sapiente, sit sunt suscipit! Consequatur cum enim eos magnam porro ratione! Aliquam cum facilis porro? Fugiat, officia vitae!
        </div>

        <div class="detail-product-modal__section">
            <div class="detail-product-modal__section-title">Цена:</div>

            <div v-if="productData.oldPrice" class="detail-product-modal__price old">{{ formatPrice(productData.oldPrice) }}</div>
            <div class="detail-product-modal__price">{{ formatPrice(productData.price) }}</div>
        </div>
        <carousel :watch-items="productData.images">
            <CarouselItem v-for="(item, index) in productData.images" :key="index">
                <img class="detail-product-modal__img" :src="item" alt="" />
            </CarouselItem>
        </carousel>
    </BaseModal>
</template>

<script>
import { Carousel, CarouselItem } from 'vue-l-carousel';
import 'vue-l-carousel/dist/main.css';

import formatPrice from '@/utils/formatPrice';

import BaseModal from '@/components/common/modals/BaseModal.vue';

export default {
    name: 'DetailProductModal',
    components: {BaseModal, Carousel, CarouselItem},
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        productData: {
            type: Object,
        }
    },
    data() {
        return {
            formatPrice: formatPrice,
        }
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
            this.$emit('close');
        }
    },
}
</script>

<style scoped lang="scss">
.detail-product-modal {
    &__section {
        &:not(:last-child) {
            margin-bottom: rem(20);
        }

        &-title {
            @include text-props(18)
        }
    }

    &__price {
        @include text-props(16, 24, 700);

        &.old {
            @include text-props(14, 21, 300);

            text-decoration: line-through;

            color: #A0A0A0;
        }
    }
}


.v-carousel-item {
    display: flex;
    justify-content: center;
}
</style>