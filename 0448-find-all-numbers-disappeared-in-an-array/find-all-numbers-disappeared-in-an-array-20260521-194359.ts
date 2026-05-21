function findDisappearedNumbers(nums: number[]): number[] {
    const sorted: number[] = Array(nums.length + 1).fill(0);
    nums.forEach(num => {
        sorted[num] = num;
    });

    const missing: number[] = Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; i++) {
        if (sorted[i] == 0) {
            missing[i] = i;
        }
    }

    return missing.filter(num => num != 0);
};