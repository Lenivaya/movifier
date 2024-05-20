/** @type {import('prettier').Config} */
import {createRequire} from 'module'

const require = createRequire(import.meta.url)
const prettierConfigStandard = require('prettier-config-standard')
const Belt = require('@mobily/ts-belt')

const modifiedConfig = Belt.D.merge(prettierConfigStandard, {
    plugins: [
        'prettier-plugin-tailwindcss',
        'prettier-plugin-fix-imports'
    ],
})

export default modifiedConfig