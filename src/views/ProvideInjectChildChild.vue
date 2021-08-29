<template>
    <div class="view">
        <p>Item: {{ this.items }}</p>
        <p>Item Length: {{ this.itemLength }}</p>
    </div>
</template>
<script>
export default {
    // props: {
    //     itemLength: {
    //         type: Number,
    //         default: 0,
    //     }
    // },
    // mounted() {
    //     console.log(this.itemLength);
    // }
    inject: ["itemLength", "items"],
}
</script>