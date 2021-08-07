<template>
    <!-- <div class="view" v-bind:style="styleObject">인라인 스타일 Binding</div> -->
    <div class="view" v-bind:style="[baseStyle, addStyle]">인라인 스타일 Binding</div>
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
            baseStyle: 'background-color:steelblue;',
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