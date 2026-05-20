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
    intermediate.reduce((prevEntry, entry, i) => {
        const [indices, count] = entry;
        const [prevIndices, prevCount] = prevEntry;
        const prevSmallerCount = smaller[prevIndices[0]] ?? 0;
        const smallerCount = prevSmallerCount + prevCount;
        indices.forEach(index => {
            smaller[index] = smallerCount;
        });
        return entry;
    }, [[-1],0]);

    return smaller;
};