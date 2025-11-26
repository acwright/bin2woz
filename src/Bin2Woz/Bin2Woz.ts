import * as fs from 'fs';

export class Bin2Woz {

  address: number = 0x0000
  
  convert(path: string): string {
    const buffer = fs.readFileSync(path);
    const lines: string[] = [];
    
    for (let i = 0; i < buffer.length; i += 16) {
      const address = (this.address + i).toString(16).toUpperCase().padStart(4, '0');
      const chunk = buffer.subarray(i, Math.min(i + 16, buffer.length));
      const hexBytes = Array.from(chunk)
        .map(byte => byte.toString(16).toUpperCase().padStart(2, '0'))
        .join(' ');
      
      lines.push(`${address}: ${hexBytes}`);
    }
    
    return lines.join('\n');
  }

}