<template>
    <div class="search">
        <input class="search__input" type="text">

        <BaseButton text="Найти" />
    </div>
</template>

<script>
import BaseButton from '@/components/common/buttons/BaseButton.vue';

export default {
    name: 'Search',
    components: {BaseButton},
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">
.search-input {

}
</style>