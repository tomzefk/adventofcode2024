// https://adventofcode.com/2024/day/1/input
let answer_firstPart = Number()
let answer_secondPart = Number()

let pre = document.querySelector("pre").innerText
let preRows = pre.split("\n")
preRows.pop()

let leftRow = []
let rightRow = []

preRows.forEach(row => {
    tempRow = row.split(" ").filter(n => n !== "")
    leftRow.push(tempRow[0])
    rightRow.push(tempRow[1])
})

leftRow.sort()
rightRow.sort()

leftRow.forEach(n => {
    answer_secondPart += n * rightRow.filter(s => s == n).length
})

for (let i = 0; i < leftRow.length; i++) {
    answer_firstPart += Math.abs(leftRow[i] - rightRow[i])
}
