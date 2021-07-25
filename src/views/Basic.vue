<template>
    <div>
        <h1>{{ title }}</h1>
        <input type="text" v-model="title">
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            title: '양방향 바인딩'
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {},
}
</script>
<style scoped>
</style>