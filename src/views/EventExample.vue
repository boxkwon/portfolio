<template>
    <div class="view">
        <div>
            <button type="button" @click="increaseCounter()">Add 1</button>
            <p>The count is : {{ counter }}</p>
        </div>
        <div>
            <button type="button" @click="setCount(7)">set Count</button>
            <p>The count is : {{ count }}</p>
        </div>
        <div>
            <button type="button" @click="one(), two()">다중 함수 호출</button>
        </div>
        <div>
            <select v-model="city" @change="changeSelect">
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="제주">제주</option>
            </select>
        </div>
        <div>
            <input type="text" v-model="textValue" @keyup.enter="showValue" />
            <p>Key Code: enter, tab, delete, esc, space, up, down, left, right</p>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            counter: 0,
            count: 0,
            city: '',
            textValue: ''
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        increaseCounter() {
            this.counter = this.counter + 1;
        },
        setCount(count) {
            this.count = count;
        },
        one() {
            alert('One');
        },
        two() {
            alert('Two');
        },
        changeSelect() {
            alert(this.city);
        },
        showValue() {
            alert(this.textValue);
        }
    },
}
</script>
<style scoped>
</style>