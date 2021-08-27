<template>
    <div class="view">
        <page-title :title="title" />
        <ChildComponent :likes="8" :isOk="isOk" :commentIds="commentIds" :author="author" />
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import ChildComponent from './ChildComponentExample.vue';

export default {
    name: '',
    components: {'page-title': PageTitle, ChildComponent},
    data() {
        return {
            title: '부모 컴포넌트에서 전송할 타이틀1',
            likes: 0,
            isOk: true,
            commentIds: [1,5,2,3],
            author: {name: '홍길동', company: '뷰 컴퍼니'}
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