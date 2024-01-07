import axiosClient from '@/axiosClient';
export function monthlyStockDetails({commit}) {
    axiosClient.get(`query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=YVWMYG4KE492WR6D`)
    .then((data) => {
        debugger;
        commit('setMonthlyStocks', data)
    })
}