export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `Modificando prototype ${target.constructor.name} e adicinando getter para a propriedade ${propertyKey}`
    );

    let elemento: HTMLElement;

    const getter = function () {
      //return the element only one time.
      if (!elemento) {
        const elemento = document.querySelector(seletor) as HTMLElement;
        console.log(
          `buscando o elemento do dom com o seletor ${seletor} para injetar em ${propertyKey}`
        );
      }
      return elemento;
    };

    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
