bin2woz
=======

```
 _     _       ____                   
| |__ (_)_ __ |___ \__      _____ ____
| '_ \| | '_ \  __) \ \ /\ / / _ \_  /
| |_) | | | | |/ __/ \ V  V / (_) / / 
|_.__/|_|_| |_|_____| \_/\_/ \___/___|
```

A Node.js-based utility for converting binary files to Wozmon formatted text for the Apple 1.

## Installation

### From NPM

```bash
npm install -g bin2woz
```

### From Source

1. Clone the repository:
```bash
git clone https://github.com/acwright/bin2woz.git
cd bin2woz
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. (Optional) Link globally:
```bash
npm link
```

## Usage

### Basic Usage

Convert a binary file to Wozmon format starting at address 0x0000:

```bash
bin2woz <path-to-binary-file>
```

### With Custom Starting Address

Specify a custom starting address in hexadecimal:

```bash
bin2woz -a 0x800 <path-to-binary-file>
```

or

```bash
bin2woz --address 0x800 <path-to-binary-file>
```

### Redirect Output to File

```bash
bin2woz -a 0x800 program.prg > output.txt
```

### Command Line Options

- `-v, --version` - Output the current version
- `-h, --help` - Display help information
- `-a, --address <address>` - Starting address in hexadecimal (default: 0x0000)

## Output Format

The tool outputs binary data in hexadecimal format with 16 bytes per line:

```
0800: AA BB CC DD EE 00 11 22 33 44 55 66 77 88 99 FF
0810: 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F 10
```

Each line contains:
- 4-digit hexadecimal address
- Colon separator
- Up to 16 bytes in hexadecimal format, space-separated

## Example

```bash
# Convert a 6502 program binary starting at address 0x800
bin2woz -a 0x800 /path/to/binary/file.prg > output.txt
```

## Development

### Run in Development Mode

```bash
npm run build
node ./dist/index.js -a 0x800 <path-to-binary-file>
```

### Release Build

```bash
git tag vX.Y.Z
git push origin main --tags
npm publish
```

### Project Structure

```
bin2woz/
├── src/
│   ├── index.ts              # CLI entry point
│   └── Bin2Woz/
│       └── Bin2Woz.ts        # Core conversion logic
├── dist/                     # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT: [https://github.com/acwright/bin2woz/blob/main/LICENSE](https://github.com/acwright/bin2woz/blob/main/LICENSE)

## Credits

Inspired by: [https://github.com/simonsunnyboy/bin2woz](https://github.com/simonsunnyboy/bin2woz)

