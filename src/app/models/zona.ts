export class Zona {
  public id           :number = -1;
  public nombre       :string = '';
  public nombre_root  :string = '';
  public root         :Zona   = null;
  public root_id      :number = -1;
  public nivel        :number = -1;
  public subZona      :Zona[];

  public denominacion:number = -1;
  public final:boolean       = true;

  private errors:any = [];

  getTextErrors(){
    let t:string = '';
    for(let c=0; c<this.errors.length;c++){
      t += ' ' + this.errors[c];
    }
    return t;
  }

  public validarForm(){
    if (this.nombre == '')       { return false; }
    if (this.denominacion == -1) { return false; }
    if (this.nivel == -1 )       { return false; }
    return true;
  }

  constructor(){
  }
}
