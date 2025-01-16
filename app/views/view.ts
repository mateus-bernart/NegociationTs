export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${elemento} não existe no DOM. Verifique.`);
    }

    //Se não passar nada, 'escapar' é undefined, por isso definir com um valor padrão (false).
    if (escapar) {
      this.escapar = escapar;
    }
  }

  public update(model: T): void {
    let template = this.template(model);

    //Previne tags scripts dentro do template html.
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
