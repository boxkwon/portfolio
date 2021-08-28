<template>
    <div class="view">
        <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
        <ChildComponent4 ref="child_component" />
    </div>
</template>
<script>
import ChildComponent4 from './ChildComponentExample4.vue';

export default {
    name: '',
    components: {ChildComponent4},
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
            this.$refs.child_component.message = '부모 컴포넌트에서 변경한 메시지';
        }
    },
}
</script>
<style scoped>
</style>