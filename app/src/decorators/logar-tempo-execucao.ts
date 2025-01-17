export function logarTempoExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let divisor = 1;
      let unidade = "milisegundo";
      if (emSegundos) {
        divisor = 1000;
        unidade = "segundos";
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`
      );
      return retorno;
    };

    return descriptor;
  };
}
