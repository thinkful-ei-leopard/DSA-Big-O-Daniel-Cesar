// Tower of Hanoi

let count = 0;

function TOH(n, start, dest, temp) {
    if (n <= 0) {
        return
    }
    TOH((n-1), start, temp, dest)
    count ++;
    print(start, dest, count)
    TOH((n-1), temp, dest, start)
}

function print(a, b) {
    return console.log(`moving ${a} to ${b}. step # ${count}`)
}

TOH(4, 'A', 'C', 'B')