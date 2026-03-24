const elevator = () => {
  let c = Number(prompt("Введите C:"))
  let b = Number(prompt("Введите B:"));
  let seconds = 0
  let a: any = []
  debugger
    for (let i = 0; i <= b; i++){
      let value = Number(prompt(`Введите номер для этажа${i}:`))
      a.push(value)
    }
    for (let i = 0; i <= b; i++){
      seconds++
      if (a[i] !== 0) {
        if (a[i] >= c) {
          seconds += c
        } else {
          seconds += a[i]
        }
      }
    }
    for (let i = 0; i >= 0; i--){
        seconds++
        if (i == 0) {
            break
        }
    }
    return seconds
}
export default elevator;