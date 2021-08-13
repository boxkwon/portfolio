<template>
    <div class="view">
        <div>
            <select v-model="selectedMarket">
                <option :value="city.price" :key="i" v-for="(city,i) in marketList">{{ city.name }}</option>
            </select>
            <input type="text" v-model="stockName" @keyup.enter="serchStockList" />
            <button type="button" @click="serchStockList">조회</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>종목명</th>
                        <th>종목코드</th>
                        <th>현재가</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(stocks,i) in stockList">
                        <td>{{ stocks.name }}</td>
                        <td>{{ stocks.ticker }}</td>
                        <td>{{ stocks.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            marketList: [
                {name: '코스피', market: 'KOSPI'},
                {name: '코스닥', market: 'KOSDAQ'},
                {name: 'ETF', market: 'ETF'},
            ],
            selectedMarket: '',
            stockName: '',
            stockList: ''
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        serchStockList() {
            // const selectedMarket = this.selectedMarket;
            // const stockName = this.stockName;
            const params = {
                selectedMarket: this.selectedMarket,
                stockName: this.stockName
            }

            this.stockList = this.getstockList(params);
        },
        getstockList(params) {
            console.log(params);

            let list = [
                {name: '삼성전자', ticker: '005930', price: 74400},
                {name: 'SK하이닉스', ticker: '00660', price: 101500},
                {name: 'NAVER', ticker: '035420', price: 436500},
                {name: '삼성바이오로직스', ticker: '207940', price: 983000},
                {name: '카카오', ticker: '035720', price: 146000}
            ];

            return list;
        }
    },
}
</script>
<style scoped>
</style>