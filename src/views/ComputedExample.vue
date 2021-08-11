<template>
    <div class="view">
        <input type="text" v-model="lastName" />
        <input type="text" v-model="firstName" />
        <h1>Hello, {{ fuulName }}</h1>
        <h1>Hello, {{ fuulName }}</h1>
        <h1>Hello, {{ fuulName }}</h1>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            firstName: '동현',
            lastName: '권',
        };
    },
    computed: {
        fuulName() {
            return this.lastName + this.firstName;
        }
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