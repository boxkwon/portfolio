<template>
    <div class="view">
        <img v-bind:src="url" style="width:100px; height:auto"/>
        <div>
            <input type="text" v-model="textValue" />
            <button type=button v-bind:disabled="textValue==''">Click</button>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            url: 'https://kr.vuejs.org/images/logo.png',
            textValue: ''
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