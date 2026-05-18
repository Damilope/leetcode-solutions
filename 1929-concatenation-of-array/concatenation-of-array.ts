function getConcatenation(nums: number[]): number[] {
    const ans = Array(nums.length * 2);
    nums.forEach((num, i) => {
        ans[i] = num;
        ans[i + nums.length] = num;
    });

    return ans;
};