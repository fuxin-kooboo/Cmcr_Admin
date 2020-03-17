import _ from 'lodash'

export const cultures = [
  {
    name: 'Nederland - Netherlands',
    code: 'nl-nl',
    site: 'Philips - Nederland',
    languageCode: 'nl-NL',
    countryCode: 'NL',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      decimal: ',',
      thousand: '.'
    }
  },
  {
    name: 'United States - English',
    code: 'en-us',
    site: 'Philips - United States',
    languageCode: 'en-US',
    countryCode: 'US',
    currency: {
      code: 'USD',
      name: 'United States dollar',
      symbol: '$',
      decimal: '.',
      thousand: ','
    }
  },
  {
    name: 'Polska - Polski',
    code: 'pl-pl',
    site: 'Philips - Polska',
    languageCode: 'pl-PL',
    countryCode: 'PL',
    currency: {
      code: 'PLN',
      name: 'Polish złoty',
      symbol: 'zł',
      decimal: ',',
      thousand: '.'
    }
  },
  {
    name: 'Česká republika - Čeština',
    code: 'cs-cz',
    site: 'Philips - Czech Republic',
    languageCode: 'cs-CZ',
    countryCode: 'CZ',
    currency: {
      code: 'CZK',
      name: 'Czech Koruna',
      symbol: 'Kč',
      decimal: ',',
      thousand: '.'
    }
  },
  {
    name: 'France - Français',
    code: 'fr-fr',
    site: 'Philips - France',
    languageCode: 'fr-FR',
    countryCode: 'FR',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      decimal: ',',
      thousand: '.'
    }
  },
  {
    name: 'Deutschland - Deutsch',
    code: 'de-de',
    site: 'Philips - Deutschland',
    languageCode: 'de-DE',
    countryCode: 'DE',
    currency: {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      decimal: ',',
      thousand: '.'
    }
  },
  {
    name: 'United Kingdom - English',
    code: 'en-gb',
    site: 'Philips - United Kingdom',
    languageCode: 'en-GB',
    countryCode: 'GB',
    currency: {
      code: 'GBP',
      name: 'Pound',
      symbol: '£',
      decimal: '.',
      thousand: ','
    }
  }
]

function detectCulture () {
  const pathName = _.trimStart(window.location.pathname, '/')
  const paths = pathName.split('/')
  const languageCode = paths && _.first(paths)
  const culture = _.find(cultures, {
    code: languageCode
  })
  return culture
}

export const detectedCulture = detectCulture() || _.find(cultures, { 'code': window.localStorage.getItem('cultureCode') || 'nl-nl' })

export const dataLocalFormat = (() => {
  const countryCode = detectedCulture.countryCode
  const isUSAorNorthAmericas = [ 'US', 'CA' ]
  if (isUSAorNorthAmericas.indexOf(countryCode) > -1) {
    return 'MM/DD/YYYY'
  } else {
    return 'DD-MM-YYYY'
  }
})()
