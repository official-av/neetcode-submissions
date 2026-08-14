class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const ledger = new Map<string, number>();

        for (const c of s) {
            ledger.set(c, (ledger.get(c) ?? 0) + 1);
        }

        for (const c of t) {
            const count = ledger.get(c);
            if (!count) {
                return false; // Character not found OR count already exhausted
            }
            ledger.set(c, count - 1);
        }

        return true;
    }
}