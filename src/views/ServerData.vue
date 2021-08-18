<template>
    <div class="view">
        <button type="button" @click="getStockList">조회</button>
        <table>
            <thead>
                <tr>
                    <th>종목명</th>
                    <th>종목코드</th>
                    <th>현재가</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(stocks, i) in stockList">
                    <td>{{ stocks.name }}</td>
                    <td>{{ stocks.ticker }}</td>
                    <td>{{ stocks.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: '',
    components: {},
    data() {
        return {
            stockList: []
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        async getStockList() {
            this.stockList = await this.api('https://47cc028f-5911-46c3-8a74-35e7e9736c56.mock.pstmn.io/stockList','get', {});
            console.log(this.stockList);
        },
        async api(url, method, data) {
            return (await axios({
                method: method,
                url: url,
                data: data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    },
}
</script>
<style scoped>
</style>