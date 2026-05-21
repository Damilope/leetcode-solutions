function findDisappearedNumbers(nums: number[]): number[] {
    const n = nums.length;
    const s: number[] = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        s[nums[i]] = 1;
    };

    const m: number[] = []
    const o = n + 2;
    for (let i = 1; i < o; i++) {
        if (s[i] == 0) {
            m.push(i);
        }
    }

    return m;
};