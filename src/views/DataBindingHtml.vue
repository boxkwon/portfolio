<template>
    <h1 v-html="htmlString"></h1>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            htmlString: '<p style="color:red;">This is a red string.</p>'
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