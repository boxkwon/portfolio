<template>
    <div class="view">
        <!-- <ProvideInjectChild :itemLength="items.length" /> -->
        <ProvideInjectChild/>
    </div>
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild.vue";
export default {
    components: { ProvideInjectChild },
    data() {
        return {
            items: ["A", "B", "C"],
        };
    },
    provide() {
        return {
            itemLength: this.items.length,
            items: this.items,
        }
    },
    mounted() {
        console.log(this.items);
    }
}
</script>