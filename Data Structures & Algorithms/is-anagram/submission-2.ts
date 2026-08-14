class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const ledger = new Array<number>(26).fill(0);
        const codeA = 'a'.charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            ledger[s.charCodeAt(i) - codeA]++;
        }

        for (let i = 0; i < t.length; i++) {
            const idx = t.charCodeAt(i) - codeA;
            if (ledger[idx] === 0) {
                return false; // Character missing or frequency exhausted
            }
            ledger[idx]--;
        }

        return true;
    }
}