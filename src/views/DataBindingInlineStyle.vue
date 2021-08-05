<template>
    <!-- <div v-bind:style="styleObject">인라인 스타일 Binding</div> -->
    <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 Binding</div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            styleObject: {
                backgroundColor: 'steelblue',
                color: 'gold',
                fontWeight: 'bold'
            },
            baseStyle: 'background-color:steelblue; width:100%; height:200px;',
            addStyle: 'color:gold; font-weight:bold;'
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