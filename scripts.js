const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert',
  ) // Valor em Real
  const currencyValueConverted = document.querySelector('.currency-value') // Outras moedas

  const dolarToday = 5.50
  const euroToday = 6
  const libraToday = 7
  const bitcoinToday = 334446
  const ieneToday = 0.038
  const pesoargToday = 0.0059

  if (currencySelect.value == 'dolar') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == 'euro') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday)
  }

  if(currencySelect.value == 'libra'){
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
      style: 'currency', 
      currency: 'GBP'
    }).format(inputCurrencyValue / libraToday)
  }

  if(currencySelect.value == 'bitcoin'){
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BTC'
    }).format(inputCurrencyValue / bitcoinToday)
  }

  if(currencySelect.value == 'iene'){
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JA', {
      style: 'currency',
      currency: 'JPY'
    }).format(inputCurrencyValue / ieneToday)
  }

  if (currencySelect.value == 'pesoarg') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(inputCurrencyValue / pesoargToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue)
}

function changeCurrency() {
  const currencyName = document.getElementById('currency-name')
  const currencyImage = document.querySelector('.currency-img')

  if (currencySelect.value == 'dolar') {
    currencyName.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/usa-flag.png'
  }

  if (currencySelect.value == 'euro') {
    currencyName.innerHTML = 'Euro'
    currencyImage.src = './assets/euro-icon.png'
  }

  if(currencySelect.value == 'libra'){
    currencyName.innerHTML = 'Libra'
    currencyImage.src = './assets/libra-icon.png'
  }

  if(currencySelect.value == 'bitcoin'){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = './assets/bitcoin-icon.png'
  }

  if(currencySelect.value == 'iene'){
    currencyName.innerHTML = 'Iene'
    currencyImage.src = './assets/iene.png'
  }

  if(currencySelect.value == 'pesoarg'){
    currencyName.innerHTML = 'Peso Argentino'
    currencyImage.src = './assets/pesoarg.png'
  }

  convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)