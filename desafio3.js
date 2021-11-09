const factorial = (num) => {
    if (num === 1){
      return 1;
    } else {
      return num*factorial (num-1);
    }
  }
  const miFuncion = () => {
      let num = parseInt(prompt("Ingresa un numero"));
    if (num <=1 || num >=20) {
      console.log("número fuera del rango");
      return;
    }
    for (let i = 1; i<=num; i++){
      console.log("Iteracion de I-->", i);
      for (let j = 1; j<=num; j++){
          if(j===num) {
          console.log(`${i} x ${j} = ${i*j}`)
        }
      }
      }
    for (let i = 1; i<=num; i++) {
      const result = factorial(i)
      console.log(`Factorial de ${i} es: ${result}`)
    }
  }
  miFuncion();