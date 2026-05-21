function findDisappearedNumbers(nums: number[]): number[] {
    const n = nums.length;
    const sorted: number[] = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        sorted[nums[i]] = 1;
    };

    const missing: number[] = []
    for (let i = 1; i <= n; i++) {
        if (sorted[i] == 0) {
            missing.push(i);
        }
    }

    return missing;
};