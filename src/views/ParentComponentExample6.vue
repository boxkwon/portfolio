<template>
    <div class="view">
        <h1>{{ parentMessage }}</h1>
        <button type="button" @click="showData">부모 버튼</button>
        <ChildComponent6 ref="child_component"/>
    </div>
</template>
<script>
import ChildComponent6 from './ChildComponentExample6.vue';

export default {
    name: '',
    components: {ChildComponent6},
    data() {
        return {
            parentMessage: ''
        };
    },
    computed: {
        message() {
            return this.$refs.child_component.message;
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        showData() {
            alert(this.message);
        }
    },
}
</script>
<style scoped>
</style>