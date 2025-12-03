function rotateString(s: string, goal: string): boolean {
    if (s.length === goal.length && (s + s).includes(goal)) return true;
    return false
};