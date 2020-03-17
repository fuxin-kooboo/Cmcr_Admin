import axios from 'axios'
// import resources from './resources'
import { mock } from '../mock'
import siteConfig from 'siteConfig'
import { authInterceptor, languageInterceptor, countryInterceptor, currencyInterceptor, timestampInterceptor } from './interceptors'
const apiEndpointBaseUrl = siteConfig.ApiHost
console.log(apiEndpointBaseUrl)
export const instance = axios.create({
  baseURL: apiEndpointBaseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Philips-Language': 'nl-NL',
    'Philips-Country': 'NL',
    'Philips-Currency': 'EUR'
  }
})

instance.interceptors.request.use(timestampInterceptor)
instance.interceptors.request.use(authInterceptor)
instance.interceptors.request.use(languageInterceptor)
instance.interceptors.request.use(countryInterceptor)
instance.interceptors.request.use(currencyInterceptor)

export default function (option) {
  if (option && option.mock) {
    mock(instance)
  }
  let apiResources = {}
  Object.entries(resources).forEach(([key, factory]) => {
    apiResources[key] = factory(instance)
  })
  return apiResources
}