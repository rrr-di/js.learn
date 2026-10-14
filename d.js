function eug(a, b) {
    let c = ''
    if (a.length >=2 && a.length <=6 && typeof a === "string" && typeof b === "number" && String(b).length >= 2 && String(b).length <= 6) {
        c = `${a} ${b}`
    } else {
        c = `Логин и пароль должны быть более 2-х символов и менее 6-ти символов, логин-буквы, пароль-цифры`
    }
    return c
}
