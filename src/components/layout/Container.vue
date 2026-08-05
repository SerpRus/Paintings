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
    max-width: 1216px;

    margin: 0 auto;
    padding: 0 20px;
}
</style>