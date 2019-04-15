#!/usr/bin/env node

import '@babel/polyfill'
import run from './run'

run(process.argv)
  .catch(error => {
    console.log('\n')
    console.error(error)
    process.exit(1)
  })
