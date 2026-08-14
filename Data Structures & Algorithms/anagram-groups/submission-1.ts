class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const ledger = new Map<string, string[]>();

        for (const s of strs) {
            const key = this.getCanonicalKey(s);
            
            if (!ledger.has(key)) {
                ledger.set(key, []);
            }
            ledger.get(key)!.push(s);
        }

        return Array.from(ledger.values());
    }

    private getCanonicalKey(s: string): string {
        const count = new Array<number>(26).fill(0);
        const codeA = 97; // 'a'.charCodeAt(0)

        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - codeA]++;
        }

        return count.join('#');
    }
}