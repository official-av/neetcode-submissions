class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const ledger = new Map<number, number>();
        for(let i=0; i<nums.length; i++) {
            const compliment = target - nums[i];
            if(ledger.has(compliment)) {
                return [i, ledger.get(compliment)];
            } else {
                ledger.set(nums[i],i);
            }
        }
    }
}
