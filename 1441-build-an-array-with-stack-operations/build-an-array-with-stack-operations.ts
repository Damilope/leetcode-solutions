function omit(ops: string[], count: number) {
    // console.log({count});
    while (count > 0) {
        ops.push("Push", "Pop");
        count--;
    }
}

function keep(ops: string[]) {
    ops.push("Push");
}

function buildArray(target: number[], n: number): string[] {
    const m = [];
    let q = 0;
    let p = 0;
    for (let i = 0; i < target.length; i++) {
        const o = target[i];
        if (o < p) {
            q++;
        }

        if (m[q]) {
            m[q].push(o);
        } else {
            m[q] = [o];
        }

        p = o;
    }

    // console.log({target, m, n});

    const ops = [];
    for (let i = 0; i < m.length; i++) {
        let k = 1;
        for (let j = 0; j < m[i].length; j++) {
            let l = m[i][j];
            // console.log({l, k});
            omit(ops, l - k);
            // keep(ops);
            ops.push("Push");
            k = l + 1;
        }

        if (i < m.length - 1) {
            // console.log({k});
            omit(ops, n - k);
        }
    }

    return ops;
};