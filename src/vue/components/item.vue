<template>
    <div>
        <div>{{ item.title }}</div>
        <div>{{ item.content }}</div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    mounted() {
        console.log('자식', this);
    }
}
</script>

<style scoped>

</style>


