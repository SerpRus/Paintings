<template>
    <button class="base-button" :class="theme" :type="type">
        <BaseIcon v-if="iconName" :icon-name="iconName" />

        {{ text }}
    </button>
</template>

<script>
import BaseIcon from "@/components/common/icons/BaseIcon.vue";

export default {
    name: 'BaseButton',
    components: {BaseIcon},
    props: {
        type: {
            type: String,
            default: 'button',
            validator: function (value) {
                return ['submit', 'reset', 'button'].includes(value)
            }
        },
        text: {
            type: String,
        },
        theme: {
            type: String,
            default: 'default',
            validator: function (value) {
                return ['default', 'brand', ].includes(value)
            }
        },
        iconName: {
            type: String,
        },
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">
.base-button {
    $root: &;

    @include text-props(14, 21, 700);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(4);

    min-width: rem(118);
    padding: rem(14) rem(6);

    cursor: pointer;

    transition: all 0.2s linear;

    color: #fff;
    background-color: #403432;
    border: none;

    &#{$root}:hover {
        background-color: #776763;
    }

    &#{$root}:disabled {
        cursor: not-allowed;

        background-color: #C1B4B1;
    }

    &.brand {
        background-color: #5B3A32;
    }
}
</style>