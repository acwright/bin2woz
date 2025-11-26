#! /usr/bin/env node

import figlet from 'figlet'
import { Command, InvalidArgumentError } from 'commander'
import { Bin2Woz } from './Bin2Woz/Bin2Woz'

const VERSION = '1.0.2'

const bin2woz = new Bin2Woz()

function parseHex(value: string) {
  const prefixedHexString = value.startsWith('0x') ? value : `0x${value}`
  const parsedValue = parseInt(prefixedHexString, 16)
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Address not valid')
  }
  return prefixedHexString
}

const program = new Command()
program.showHelpAfterError()
program
  .name('bin2woz')
  .description('A utility for converting binary files to Wozmon formatted text.')
  .version(VERSION, '-v, --version', 'Output the current version')
  .helpOption('-h, --help', 'Output help / options')
  .option('-a, --address <address>', 'Starting address in hex', parseHex, '0x0000')
  .argument('<path>', 'Path to binary file to convert')
  .addHelpText('beforeAll', figlet.textSync('bin2woz') + '\n' + `Version: ${VERSION} | A.C. Wright Design\n`)
  .parse(process.argv)

const options = program.opts()
if (options.address) {
  bin2woz.address = parseInt(options.address, 16)
}

console.log(bin2woz.convert(program.args[0]))