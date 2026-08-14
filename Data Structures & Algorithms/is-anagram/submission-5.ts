class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const ledgerMap = new Map<string, number>();

        for (const c of s) {
            ledgerMap.set(c, (ledgerMap.get(c) ?? 0) + 1);
        }

        for (const c of t) {
            const count = ledgerMap.get(c);
            if (!count) {
                return false; // Character not found OR count already exhausted
            }
            ledgerMap.set(c, count - 1);
        }

        return true;
    }
}