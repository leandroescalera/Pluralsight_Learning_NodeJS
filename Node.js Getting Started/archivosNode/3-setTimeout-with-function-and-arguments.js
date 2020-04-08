const theOneFunc = delay => {
    console.log('Hello world ' + delay + ' secunds');
};

setTimeout(theOneFunc, 4 * 1000, 4);
setTimeout(theOneFunc, 8 * 1000, 8);


setInterval(() => {
    console.log("Se esta ejecutando el callback");
}, 3000)



let calcular = (num1, num2) => {
    return new Promise((res, req) => {
        setTimeout(() => {
            let suma = num1 + num2;
            if (suma > 5) {
                res(suma);
            } else {
                req("Error al ejecutar la promesa");
            }

        }, 2000);
    });
}