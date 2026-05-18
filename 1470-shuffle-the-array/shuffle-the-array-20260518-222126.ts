function shuffle(nums: number[], n: number): number[] {
    const ans = Array(nums.length);
    for (let i = 0; i < n; i++) {
        const j = i * 2;
        ans[j] = nums[i];
        ans[j + 1] = nums[i + n];
    }

    return ans;
};