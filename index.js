// Add your functions here
const map = (arr, func) => {
    const emptyArr = []
    for (let element of arr) {
        emptyArr.push(func(element))
    }
    return emptyArr
}

const reduce = (arr, func, startPoint=0) => {
    if (!!startPoint == false) {
        startPoint = arr.shift()
    }
    return arr.reduce(func, startPoint)
}