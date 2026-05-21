function findDisappearedNumbers(nums: number[]): number[] {
    const sorted: number[] = [];
    nums.forEach(num => {
        sorted[num] = num;
    });

    const missing: number[] = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!sorted[i]) {
            missing.push(i);
        }
    }

    return missing;
};