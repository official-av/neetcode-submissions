class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const x = new Set<number>();
        let hasDuplicate = false;
        nums.forEach(n => {
            if(x.has(n)) {
                hasDuplicate = true;
            };
            x.add(n);
        })
        return hasDuplicate;
    }
}
