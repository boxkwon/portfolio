<template>
    <div class="view">
        <!-- <ProvideInjectChildChild :itemLength="itemLength" /> -->
        <ProvideInjectChildChild />
    </div>
</template>
<script>
import ProvideInjectChildChild from "./ProvideInjectChildChild.vue";
export default {
    components: { ProvideInjectChildChild },
    // props: {
    //     itemLength: {
    //         type: Number,
    //         default: 0,
    //     },
    // },
    mounted() {
        console.log(this.itemLength);
    }
};
</script>