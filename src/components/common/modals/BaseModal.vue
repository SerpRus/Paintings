<template>
    <transition name="base-modal">
        <div v-if="visible" class="base-modal__overlay" @click.self="close">
            <div class="base-modal__container">
                <div class="base-modal__header">
                    <slot name="header">
                        <h3>{{ title }}</h3>
                    </slot>

                    <button class="base-modal__close" @click="close">&times;</button>
                </div>

                <div class="base-modal__body">
                    <slot></slot>
                </div>

                <div class="base-modal__footer">
                    <slot name="footer">
                        <BaseButton text="Закрыть" @click="close" />
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import BaseButton from '@/components/common/buttons/BaseButton.vue';

export default {
    name: 'BaseModal',
    components: {BaseButton},
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
        }
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
            this.$emit('close');
        }
    },
    watch: {
        visible(val) {
            if (val) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    },
    beforeDestroy() {
        document.body.style.overflow = '';
    }
}
</script>

<style scoped lang="scss">
.base-modal {
    &__overlay {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.5);
    }

    &__container {
        overflow: hidden;

        min-width: rem(400);
        max-width: 50%;
        max-height: 50%;

        background-color: #fff;
        border-radius: rem(8);
        box-shadow: 0 rem(4) rem(20) rgba(0, 0, 0, 0.3);
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: rem(16) rem(20);
    }

    &__close {
        @include text-props(24);

        padding: 0 rem(8);

        cursor: pointer;

        color: #999;
        background: none;
        border: none;

        &:hover {
            color: #333;
        }
    }

    &__body {
        overflow-y: auto;

        padding: rem(20);
        max-height: 70%;
    }

    &__footer {
        display: flex;
        justify-content: flex-end;
        gap: rem(10);

        padding: rem(16) rem(20);

        border-top: rem(1) solid #e5e5e5;
    }
}

.base-modal-enter-active {
    animation: fadeIn 0.3s;
}

.base-modal-leave-active {
    animation: fadeOut 0.3s;
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes fadeOut {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.9); }
}
</style>