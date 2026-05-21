function findDisappearedNumbers(nums: number[]): number[] {
    const sorted: number[] = Array(nums.length + 1);
    nums.forEach(num => {
        sorted[num] = num;
    });

    const missing: number[] = Array(nums.length + 1);
    for (let i = 1; i <= nums.length; i++) {
        if (!sorted[i]) {
            missing[i] = i;
        }
    }

    return missing.filter(num => !!num);
};