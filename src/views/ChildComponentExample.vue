<template>
    <div class="view">
        <p>likes: {{ likes }}</p>
        <p>isOk: {{ isOk }}</p>
        <p>author name: {{ author.name }}</p>
    </div>
</template>
<script>
export default {
    name: '',
    props: {
        likes: {
            type: Number,
            default: 0
        },
        isOk: {
            type: Boolean,
            default: false
        },
        commentIds: {
            type: Array
        },
        author: {
            type: Object
        }
    },
    components: {},
    data() {
        return {
            sampleData: ''
        };
    },
    setup() {},
    created() {},
    mounted() {
        console.log(this.commentIds);
    },
    unmounted() {},
    methods: {},
}
</script>
<style scoped>
</style>