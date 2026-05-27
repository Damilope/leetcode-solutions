function evalRPN(tokens: string[]): number {
    const s = [];
    for (let i = 0; i < tokens.length; i++) {
        const m = tokens[i];
        let n;
        if (m == "+") {
            s.push(s.pop() + s.pop());
        } else if (m == "-") {
            n = s.pop();
            s.push(s.pop() - n);
        } else if (m == "*") {
            s.push(s.pop() * s.pop());
        } else if (m == "/") {
            n = s.pop();
            n = s.pop() / n;
            if (n < 0) s.push(Math.ceil(n));
            else s.push(Math.floor(n));
        } else {
            s.push(Number(m));
        }

    }

    return s[0];
};