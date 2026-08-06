<template>
    <div class="container">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'Container',
}
</script>

<style lang="scss">
.container {
    max-width: rem(1256);

    margin: 0 auto;
    padding: 0 rem(20);
}
</style>