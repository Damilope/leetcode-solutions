function evalRPN(tokens: string[]): number {
    const tok = tokens as (string | number)[];
    for (let i = 0; i < tok.length; i++) {
        const t = tok[i];
        const o1 = Number(tok[i - 2]);
        const o2 = Number(tok[i - 1]);
        if ((t == "+" || t == "-" || t == "*" || t == "/")
            && !Number.isNaN(o1) && !Number.isNaN(o2)) {
            let ans = null;
            if (t == "+") ans = o1 + o2;
            if (t == "-") ans = o1 - o2;
            if (t == "*") ans = o1 * o2;
            if (t == "/") {
                ans = o1 / o2;
                if (ans < 0) ans = Math.ceil(o1 / o2)
                else ans = Math.floor(o1 / o2)
            }
            // console.log([...tok]);
            tok.splice(i - 2, 3, ans);
            i -= 2;
            // console.log({tok, ans, t, o1, o2});
        }
    }

    // console.log({tok});
    return Number(tok[0]);

    // const ops = [];
    // for (let i = 0; i < tokens.length; i++) {

    // }
};