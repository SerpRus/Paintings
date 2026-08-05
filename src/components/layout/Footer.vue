<template>
    <footer class="footer">
        <Container>
            <Navigation />
        </Container>
    </footer>
</template>

<script>
import Container from '@/components/layout/Container.vue';
import Navigation from "@/components/features/Navigation.vue";

export default {
    name: 'Footer',
    components: {Container, Navigation}
}
</script>

<style lang="scss">
.footer {

}
</style>