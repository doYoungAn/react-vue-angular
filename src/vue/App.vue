<template>
    <div class="wrapper">
        <h1>Vue</h1>
        <Item v-for="(item, index) of items" :item="item" v-bind:key="index" />
    </div>
</template>

<script>
import axios from 'axios';
import Item from './components/item.vue';

export default {
    components: {
        Item
    },
    data() {
        return {
            items: []
        }
    },
    mounted() {
        console.log('Vue root component mounted');
    },
    created() {
        console.log('뷰 크리에이트');
        axios.get('/static/posts.json').then((res) => {
            console.log('제이선', res);
            this.$data.items = res.data;
        }).catch((err) => {

        });
    }
}
</script>

<style>

</style>

