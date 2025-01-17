export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype ${target.constructor.name} e adicinando getter para a propriedade ${propertyKey}`);
        const getter = function () {
            console.log(`buscando o elemento do dom com o seletor ${seletor} para injetar em ${propertyKey}`);
            const elemento = document.querySelector(seletor);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
