import * as fs from 'fs';

export class Bin2Woz {

  address: number = 0x0000
  
  convert(path: string): string {
    // Read the binary file
    const buffer = fs.readFileSync(path);
    const lines: string[] = [];
    
    // Process 16 bytes at a time
    for (let i = 0; i < buffer.length; i += 16) {
      // Format the address as 4-digit hex
      const address = (this.address + i).toString(16).toUpperCase().padStart(4, '0');
      
      // Get up to 16 bytes for this line
      const chunk = buffer.slice(i, Math.min(i + 16, buffer.length));
      
      // Convert each byte to hex string
      const hexBytes = Array.from(chunk)
        .map(byte => byte.toString(16).toUpperCase().padStart(2, '0'))
        .join(' ');
      
      // Format the line
      lines.push(`${address}: ${hexBytes}`);
    }
    
    return lines.join('\n');
  }

}