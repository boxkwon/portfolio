<template>
    <div class="view">
        <button type="button" @click="sendFromChild">자식 컴포넌트 버튼</button>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            message: '자식 컴포넌트로 부터 보내는 메시지'
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        sendFromChild() {
            this.$emit('send-message', this.message);
        }
    },
}
</script>
<style scoped>
</style>