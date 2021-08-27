<template>
    <div class="view">
        <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
        <ChildComponent2 ref="child_component" />
    </div>
</template>
<script>
import ChildComponent2 from './ChildComponentExample2.vue';

export default {
    name: '',
    components: {ChildComponent2},
    data() {
        return {

        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        callChildFunc() {
            this.$refs.child_component.$refs.child_btn.click();
        }
    },
}
</script>
<style scoped>
</style>