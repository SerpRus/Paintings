<template>
    <footer class="footer">
        <Container class="footer__wrapper">
            <Navigation class="footer__navigation" />

            <div class="footer__contacts">
                <BaseLink
                    href="tel:+78125555555"
                    icon-name="phone"
                    text="+7 (812) 555-55-55"
                />

                <BaseLink
                    href="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_yefimova_3s/Z0kYdQVgSE0HQFtjfXVzdH1mYQ==/?indoorLevel=1&ll=30.320180%2C59.925155&z=17"
                    target="_blank"
                    icon-name="address"
                    text="г. Санкт-Петербург, ул. Ефимова, 3"
                />
            </div>
        </Container>
    </footer>
</template>

<script>
import Container from '@/components/layout/Container.vue';
import Navigation from '@/components/features/Navigation.vue';
import BaseLink from '@/components/common/links/BaseLink.vue';

export default {
    name: 'Footer',
    components: {Container, Navigation, BaseLink}
}
</script>

<style scoped lang="scss">
.footer {
    color: #555555;

    padding: rem(38) 0;

    background-color: #ECEAEA;

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: rem(16);

        @media ($screen-desktop-small) {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    &__navigation {
        @media ($screen-desktop-small) {
            padding: 0  rem(80);
        }
    }

    &__contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: rem(16);

        @media ($screen-desktop-small) {
            flex-direction: row;
            gap: rem(50);
        }
    }
}
</style>