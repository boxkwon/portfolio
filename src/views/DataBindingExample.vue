<template>
    <div>
        <input type="text" v-model="valueModel" />
        <input type="number" v-model.number="valueModel2"/>
        <textarea v-model="valueModel3"></textarea>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            valueModel: 'South Korea',
            valueModel2: 86,
            valueModel3: '안녕하세요'
        };
    },
    setup() {},
    created() {},
    mounted() {
        console.log(this.valueModel2);
    },
    unmounted() {},
    methods: {},
}
</script>
<style scoped>
</style>