<template>
    <a class="base-link" :href="href" :target="target">
        <BaseIcon v-if="iconName" :icon-name="iconName" />

        {{ text }}
    </a>
</template>

<script>
import BaseIcon from "@/components/common/icons/BaseIcon.vue";

export default {
    name: 'BaseLink',
    components: {BaseIcon},
    props: {
        href: {
            type: String,
        },
        text: {
            type: String,
        },
        iconName: {
            type: String,
        },
        target: {
            type: String,
            default: '_self',
            validator: function (value) {
                return ['_self', '_blank', '_parent', '_top', '_unfencedTop'].includes(value)
            }
        }
    },
}
</script>

<style lang="scss">
.base-link {
    display: flex;
    align-items: center;
    gap: rem(8);
}
</style>