function solution(my_string, num1, num2) {
    const dst = [...my_string]
    dst.splice(num1, 1, my_string[num2])
    dst.splice(num2, 1, my_string[num1])
    return dst.join("")
}