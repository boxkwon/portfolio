<template>
    <div class="view">
        <PageTitle title="부모 컴포넌트에서 전송할 타이틀" />
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
export default {
    name: '',
    components: {PageTitle},
    data() {
        return {
            sampleData: ''
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