function findErrorNums(nums: number[]): number[] {
    const sorted = Array(nums.length);
    let duplicated = 0;
    nums.forEach(num => {
        const i = num - 1;
        if (sorted[i]) {
            duplicated = num;
        }

        sorted[i] = num;
    });

    const missing = sorted.findIndex(num => !num) + 1;
    return [duplicated, missing];
};