<template>
    <button class="base-button" :type="type">
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

}
</style>