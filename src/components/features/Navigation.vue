<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li v-for="link in links" :key="link.to" class="navigation__list-item">
                <RouterLink :to="link.to" class="navigation__list-link">{{ link.text }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            links: [{
                text: 'Каталог',
                to: '/'
            }, {
                text: 'Доставка',
                to: '/delivery'
            }, {
                text: 'Оплата',
                to: '/payment'
            }, {
                text: 'Контакты',
                to: '/contacts'
            }, {
                text: 'О компании',
                to: '/about-us'
            },],
        }
    },
}
</script>

<style lang="scss">
.navigation {
    &__list {
        display: flex;
        gap: rem(48);
    }
}
</style>