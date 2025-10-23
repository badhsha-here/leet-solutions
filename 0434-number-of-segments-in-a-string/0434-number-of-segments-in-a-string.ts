function countSegments(s: string): number {
    return s.trim().split(" ").filter(x => x !== "").length
};