function flipAndInvertImage(image: number[][]): number[][] {
    let output = image.map(child => child.reverse().map(value => value === 1 ? 0 : 1))
    return output
};