class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const ledger = new Array<number>(26).fill(0);

        for (const c of s) {
            ledger[c.charCodeAt(0) - 97]++;
        }

        for (const c of t) {
            const idx = c.charCodeAt(0) - 97;
            if (ledger[idx] === 0) {
                return false; // Character missing or frequency exhausted
            }
            ledger[idx]--;
        }

        return true;
    }
}