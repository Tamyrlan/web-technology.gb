const celcius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия:"))
alert(`Цельсия:${celcius},Фарингейт:${converToF(celcius).toFixed(1)}`);
function converToF(number) {
    const f = (9 / 5) * number + 32;
    return f;
}