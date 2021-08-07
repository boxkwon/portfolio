<template>
    <div class="view">
        <div>
            <h1 v-if="type=='A'">A</h1>
            <h1 v-else-if="type=='B'">B</h1>
            <h1 v-else-if="type=='C'">C</h1>
            <h1 v-else>other</h1>
        </div>
        <div>
            <h1 v-show="bRender">A</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            type: 'ㅇ',
            bRender: false
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