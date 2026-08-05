<template>
    <div class="search">
        <input class="search__input" type="text" :placeholder="placeholder" :name="name">

        <BaseButton text="Найти" />
    </div>
</template>

<script>
import BaseButton from '@/components/common/buttons/BaseButton.vue';

export default {
    name: 'Search',
    components: {BaseButton},
    props: {
        placeholder: {
            type: String,
        },
        name: {
            type: String,
        }
    }
}
</script>

<style lang="scss">
.search {
    display: flex;

    &__input {
        @include text-props(14, 21);

        width: rem(294);
        padding: rem(14) rem(16);

        border: rem(1) solid #E1E1E1;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #9F9F9F;
        }
    }
}
</style>