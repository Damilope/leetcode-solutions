function shuffle(nums: number[], n: number): number[] {
    const ans = Array(nums.length);
    for (let i = 0; i < n; i++) {
        ans[i * 2] = nums[i];
        ans[(i * 2) + 1] = nums[i + n];
    }

    return ans;
};