<template>
    <div class="view">
        <div>
            <input type="text" v-model="valueModel" />
        </div>
        <div>
            <input type="number" v-model.number="valueModel2"/>
        </div>
        <div>
            <textarea v-model="valueModel3"></textarea>
        </div>
        <div>
            <select v-model="city">
                <option value="02">서울</option>
                <option value="21">부산</option>
                <option value="064">제주</option>
            </select>
        </div>
        <div>
            <label><input type="checkbox" value="서울" v-model="checked">서울</label>
            <label><input type="checkbox" value="부산" v-model="checked">부산</label>
            <label><input type="checkbox" value="제주" v-model="checked">제주</label>
            <br>
            <span>체크한 지역: {{ checked }}</span>
        </div>
        <div>
            <label><input type="radio" v-bind:value="radios[0]" v-model="picked" />서울</label>
            <label><input type="radio" v-bind:value="radios[1]" v-model="picked" />부산</label>
            <label><input type="radio" v-bind:value="radios[2]" v-model="picked" />제주</label>
            <br>
            <span>선택한 지역: {{ picked }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            valueModel: 'South Korea',
            valueModel2: 86,
            valueModel3: '안녕하세요',
            city: "21",
            checked: [],
            radios: [
                "서울3",
                "부산3",
                "제주3"
            ],
            radio1: "서울2",
            radio2: "부산2",
            radio3: "제주2",
            picked: []
        };
    },
    setup() {},
    created() {},
    mounted() {
        console.log(this.valueModel2);
    },
    unmounted() {},
    methods: {},
}
</script>
<style scoped>
    div {
        padding: 20px 0;
    }
    div + div {
        border-bottom: 1px dashed grey;
    }
</style>