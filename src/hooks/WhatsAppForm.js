export const enviar = (numero, nombre,mensaje,email) => {
    setTimeout(() => {
         window.open(
        `https://wa.me/549${numero}?text=Hola,%20mi%20nombre%20es%20${nombre}%0ATe%20consulto%20lo%20siguiente%20%0A*${mensaje}*%0A%0A%20Mi%20email%20es%20*${email}*%0ASaludos y que seas feliz Siempre y Dios te Bendiga`,
        `_blank`
      );
    }, 200);
  }