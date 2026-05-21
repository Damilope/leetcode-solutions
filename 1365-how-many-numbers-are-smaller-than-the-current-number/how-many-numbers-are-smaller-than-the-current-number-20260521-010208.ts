function smallerNumbersThanCurrent(nums: number[]): number[] {
    // intermediate[nums[i]] = [[indices of nums[i]], count of nums[i]]
    const intermediate: Array<[number[], number]> = [];
    nums.forEach((num, i) => {
        if (intermediate[num]) {
            intermediate[num][0].push(i);
            intermediate[num][1]++;
        } else {
            intermediate[num] = [[i], 1]
        }
    });

    const smaller = Array(nums.length);
    intermediate.reduce((prevEntry, entry) => {
        const prevSmallerCount = smaller[prevEntry[0][0]] ?? 0;
        const smallerCount = prevSmallerCount + prevEntry[1];
        entry[0].forEach(index => {
            smaller[index] = smallerCount;
        });
        return entry;
    }, [[-1],0]);

    return smaller;
};