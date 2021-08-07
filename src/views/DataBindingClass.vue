<template>
    <!-- <div class="view container" v-bind:class="{'active':isActive, 'text-red':isRed}">
        Class Binding
    </div> -->
    <div class="view container" v-bind:class="[activeClass, redClass]">
        Class Binding
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            // isActive: true,
            // isRed: true,
            activeClass: 'active',
            redClass: 'text-red'
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
.active {
    background-color:steelblue;
    font-weight:bold;
}

.text-red {
    color:gold;
}
</style>