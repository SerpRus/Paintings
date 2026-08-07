<template>
    <div class="search">
        <input
            class="search__input"
            v-model="searchQuery"
            type="text"
            :placeholder="placeholder"
            :name="name"
            autocomplete="off"
            @input="onInput"
        >

        <BaseButton class="search__button" text="Найти" />
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
    },
    data() {
        return {
            searchQuery: '',
            searchTimeout: null,
        }
    },
    methods: {
        onInput(e) {
            this.isSearching = true;

            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.$emit('search', this.searchQuery);

            }, 300);
        },
    },
    beforeDestroy() {
        clearTimeout(this.searchTimeout);
    }
}
</script>

<style scoped lang="scss">
.search {
    display: flex;

    &__input {
        @include text-props(14, 21);

        flex-grow: 1;

        min-width: 0;
        padding: rem(14) rem(8);

        border: rem(1) solid #E1E1E1;

        @media ($screen-tablet) {
            flex-grow: 0;

            width: rem(294);
            padding: rem(14) rem(16);
        }


        &:focus {
            outline: none;
        }

        &::placeholder {
            @include text-props(12);

            color: #9F9F9F;

            @media ($screen-tablet) {
                @include text-props(14);
            }
        }
    }

    &__button {
        @media ($screen-tablet-max) {
            min-width: 0;
            width: rem(100);
        }
    }
}
</style>