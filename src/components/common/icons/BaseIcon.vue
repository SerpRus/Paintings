<template>
    <svg class="base-icon" :class="size">
        <use :href="`#icon-${iconName}`" />
    </svg>
</template>

<script>
export default {
    name: 'BaseIcon',
    props: {
        iconName: {
            type: String,
        },
        size: {
            type: String,
            default: 'small',
            validator: function (value) {
                return ['small', 'medium'].includes(value)
            }
        }
    },
}
</script>

<style lang="scss">
.base-icon {
    &.small {
        width: rem(16);
        height: rem(16);
    }

    &.medium {
        width: rem(20);
        height: rem(20);
    }
}
</style>