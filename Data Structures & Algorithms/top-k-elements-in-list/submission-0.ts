class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map<number, number>();

        // Step 1: In-memory frequency count (O(N))
        for (const n of nums) {
            frequencyMap.set(n, (frequencyMap.get(n) ?? 0) + 1);
        }

        // Step 2: Bounded Frequency Buckets (Index = Frequency)
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of frequencyMap.entries()) {
            buckets[freq].push(num);
        }

        // Step 3: Backward traversal from highest frequency down to 1
        const result: number[] = [];
        for (let freq = nums.length; freq > 0; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}