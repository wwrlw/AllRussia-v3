<script>
import axios from 'axios'
export default {
  name: 'HeaderHelp',
  data() {
    return {
      currencies: [
        { name: 'USD', value: null, change: null },
        { name: 'EUR', value: null, change: null },
        { name: 'CNY', value: null, change: null },
        { name: 'BYN', value: null, change: null },
      ],
      apiUrl: 'https://api.exchangerate-api.com/v4/latest/RUB',
    }
  },
  mounted() {
    this.fetchCurrencyRates()
    setInterval(this.fetchCurrencyRates, 200000)
  },
  methods: {
    async fetchCurrencyRates() {
      try {
        const response = await axios.get(this.apiUrl)
        const data = response.data

        this.updateCurrency('USD', data.rates.USD)
        this.updateCurrency('EUR', data.rates.EUR)
        this.updateCurrency('CNY', data.rates.CNY)
        this.updateCurrency('BYN', data.rates.BYN)
      } catch (e) {
        console.log(e)
      }
    },
    updateCurrency(name, newValue) {
      const currency = this.currencies.find((c) => c.name === name)
      if (currency) {
        const previousValue = currency.value
        currency.value = newValue.toFixed(2)
        currency.change = previousValue !== null ? newValue - previousValue : 0
      }
    },
  },
  computed: {
    formattedCurrencies() {
      return this.currencies.map((currency) => ({
        ...currency,
        formattedChange:
          currency.value !== null
            ? `${currency.change > 0 ? '+' : ''}${currency.change.toFixed(4)}`
            : '',
      }))
    },
  },
}
</script>

<template>
  <div class="currency-container">
    <div v-for="currency in formattedCurrencies" :key="currency.name" class="currency">
      {{ currency.name }}
      <span class="value">{{ currency.value }}</span>
      <span
        :class="{ change: true, positive: currency.change >= 0, negative: currency.change < 0 }"
      >
        {{ currency.formattedChange }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.currency-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  font-weight: bold;
  height: 50px;
  gap: 100px;
  font-family: 'Roboto Condensed';
}
.value {
  margin-right: 10px;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>
