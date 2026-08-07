<template>
    <div class="base-card" :class="status">
        <div class="base-card__img-wrapper">
            <img class="base-card__img" :src="imageSrc" :alt="imageAlt" />
        </div>

        <div class="base-card__content">
            <div class="base-card__title">
                {{ title }}
            </div>

            <div class="base-card__footer">
                <div v-if="status === 'sold'" class="base-card__text">
                    Продана на аукционе
                </div>

                <div v-else class="base-card__wrapper">
                    <div class="base-card__col">
                        <div v-if="oldPrice" class="base-card__price old">{{ formatPrice(oldPrice) }}</div>

                        <div class="base-card__price">{{ formatPrice(price) }}</div>
                    </div>

                    <BaseButton :text="buttonText" :icon-name="buttonIcon" :theme="buttonTheme" @click="onClick" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/common/buttons/BaseButton.vue';

import formatPrice from '@/utils/formatPrice';

export default {
    name: 'BaseCard',
    components: {BaseButton},
    props: {
        imageSrc: {
            type: String,
        },
        imageAlt: {
            type: String,
        },
        title: {
            type: String,
        },
        oldPrice: {
            type: Number,
        },
        price: {
            type: Number,
        },
        status: {
            type: String,
            default: 'available',
            validator: function (value) {
                return ['available', 'processing', 'reserved', 'sold',].includes(value)
            }
        },
    },
    data() {
      return{
          formatPrice,
      }
    },
    computed: {
        isReserved() {
            return this.status === 'reserved'
        },
        buttonText() {
            if (this.isReserved) {
                return 'В корзине'
            }

            if (this.status === 'processing') {
                return 'В обработке'
            }

            return 'Купить';
        },
        buttonIcon() {
            return this.isReserved ? 'check' : '';
        },
        buttonTheme() {
            return this.isReserved ? 'brand' : 'default';
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>

<style lang="scss">
.base-card {
    position: relative;

    display: flex;
    flex-direction: column;
    
    border: rem(1) solid #E1E1E1;

    &.sold {
        &::after {
            content: '';

            position: absolute;
            top: 0;
            left: 0;
            
            display: block;

            width: 100%;
            height: 100%;

            opacity: 0.5;

            background-color: #fff;

            pointer-events: none;
        }
    }

    &__img {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        &-wrapper {
            position: relative;

            height: 0;
            padding-bottom: percentage(160 / 280);
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        padding: rem(20) rem(22) rem(22);
    }

    &__title {
        @include text-props(18);

        &:not(:last-child) {
            margin-bottom: rem(22);
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

    &__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
    }

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
    }
}
</style>