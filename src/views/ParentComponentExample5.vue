<template>
    <div class="view">
        <h1>{{ parentMessage }}</h1>
        <ChildComponent5 @send-message="sendMessage" />
    </div>
</template>
<script>
import ChildComponent5 from './ChildComponentExample5.vue';

export default {
    name: '',
    components: {ChildComponent5},
    data() {
        return {
            parentMessage: ''
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        sendMessage(data) {
            //alert(data);
            this.parentMessage = data;
        }
    },
}
</script>
<style scoped>
</style>