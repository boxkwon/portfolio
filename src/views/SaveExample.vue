<template>
    <div class="view">
        <input type="text" v-model="stockInfo.name">
        <input type="text" v-model="stockInfo.ticker">
        <input type="text" v-model.number="stockInfo.price">
        <button type="button" @click="saveStockInfo">저장</button>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            // name: '',
            // ticker: '',
            // price: '',
            stockInfo: {
                name: '',
                ticker: '',
                price: '',
            }
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        saveStockInfo() {
            if(this.stockInfo.name == '') {
                // return alert('종목명을 입력하세요.');
                return this.$swal('종목명을 입력하세요.');
            }
            if(this.stockInfo.ticker == '') {
                return alert('종목코드를 입력하세요.');
            }
            if(this.stockInfo.price == 0 || this.stockInfo.price == '') {
                return alert('현재 가격을 입력하세요.');
            }

            // const params = {
            //     name: this.name,
            //     ticker: this.ticker,
            //     price: this.price
            // }

            const result = this.saveData(this.stockInfo);
            if (result == 'save') {
                alert('생성되었습니다.');
            }
        },
        saveData(params) {
            console.log(params);

            const result = 'save';
            return result;

        }
    },
}
</script>
<style scoped>
</style>