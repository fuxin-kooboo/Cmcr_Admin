import { detectedCulture } from '@/utilities/common/culture'

export function authInterceptor (config) {
  const token = window.localStorage.getItem('Philips-User-Token')
  if (!token) {
    console.log('test')
  }
  if (store.state.account.token != null) {
    config.headers['Philips-User-Token'] = store.state.account.token
  }
  return config
}

export function languageInterceptor (config) {
  const languageCode = detectedCulture.languageCode || config.headers['Philips-Language']
  if (languageCode != null) {
    config.headers['Philips-Language'] = languageCode
  }

  return config
}

export function countryInterceptor (config) {
  const countryCode = detectedCulture.countryCode || config.headers['Philips-Country']
  if (countryCode != null) {
    config.headers['Philips-Country'] = countryCode
  }

  return config
}

export function currencyInterceptor (config) {
  const currencyCode = detectedCulture.currency.code || config.headers['Philips-Currency']
  if (currencyCode != null) {
    config.headers['Philips-Currency'] = currencyCode
  }

  return config
}

export function timestampInterceptor (config) {
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    let timestamp = new Date().getTime()
    if (config.url.indexOf('?') > -1) {
      config.url = config.url + '&tamp=' + timestamp
    } else {
      config.url = config.url + '?timestamp=' + timestamp
    }
  }

  return config
}
