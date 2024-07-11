interface IStartup{
  nome:string
  Focus:string
  descrizione:string
  prodottioff:string
  riceviIncentivo(incentivo: IIncentivo): void
}
interface IIncentivo{
 readonly CodiceId:number
 descrizione:string
 Valoreincentivo:string
 Criteridieleggibilità:string
 assegnaAStartup(startup: IStartup): void
}
interface ICittadino{
  nome:string
  cognome:string
  eta:number
  interessisportivi:string
  partecipaAttività(startup: IStartup): void
}
class Startup implements IStartup{
  nome: string
  Focus: string
  descrizione: string
  prodottioff: string
  constructor(nome:string,Focus:string,descrizione:string,prodottioff:string){
    this.nome=nome;
    this.descrizione=descrizione;
    this.Focus=Focus;
    this.prodottioff=prodottioff;
  }
  riceviIncentivo(incentivo: IIncentivo): void {
    console.log(`${this.nome} ha ricevuto l'${incentivo.CodiceId}`)
  }

}
class Incentivo implements IIncentivo{
  CodiceId: number
  descrizione: string
  Valoreincentivo: string
  Criteridieleggibilità: string
  constructor(CodiceId:number,descrizione:string,Valoreincentivo:string,Criteridieleggibilità:string){
    this.CodiceId=CodiceId;
    this.Criteridieleggibilità=Criteridieleggibilità;
    this.descrizione=descrizione;
    this.Valoreincentivo=Valoreincentivo;
  }
  assegnaAStartup(startup: IStartup): void {
    console.log(`Codice incetivo ${this.CodiceId}, per la startup ${startup.nome}`)
  }

}
class Cittadino implements ICittadino{
  nome: string
  cognome: string
  eta: number
  interessisportivi: string
  constructor(nome:string,cognome:string,eta:number,interessisportivi:string){
    this.nome=nome;
    this.cognome=cognome
    this.interessisportivi=interessisportivi;
    this.eta=eta;
  }
  partecipaAttività(startup: IStartup): void {
    console.log(`Il cittadino ${this.nome}, partecipa alle attività di ${startup.nome}`)
  }
  
}

let Startup1= new Startup ("App-Cyclo-Tech", "Registra-percorso-green","Un dispositivo tech in grado di registrare i percorsi più green", "Cyclo-Green");
let incentivo1 = new Incentivo(2422,"Sviluppo Ambientale-Tecnologico","Incetivare le persone a stare nella natura","Possedere una  Mountain-Bike");
let Startup2 = new Startup(
  "App-Week-EventSport",
  "Vedere tutti gli eventi sportivi vicino a te tramite l 'app",
  "Un app in grado di mostrare tutti gli eventi della settimana a cui partecipare organizzati dallo stato ma anche gli eventi sportivi vicini a te tramite la geocalizzazione.Con registrazione all'evento tramite app",
  "App scaricabile tramite Smartphone "
);
let incentivo2= new Incentivo(2422,"Svilluppo Sport-Ambiente","Incentivare le persone a fare tante attività sportive","Libero a tutti i cittadini , Agevolazioni del prezzo per famiglie con isee sotto i 10mila euro e i bambini dai 0 ai 5 anni non pagano")

let Cittadino1 = new Cittadino("Antonio","Rossi",20,"Bici")
let Cittadino2= new Cittadino("Mario","Russo",45,"Calcio, Arrampicata, Parapendio")
incentivo1.assegnaAStartup(Startup1);
Cittadino1.partecipaAttività(Startup1);
console.log(Startup1);
console.log(Cittadino1);
incentivo2.assegnaAStartup(Startup2);
Cittadino2.partecipaAttività(Startup2);
console.log(Startup2);
console.log(Cittadino2);
if(Cittadino2.eta<=5){
  console.log(`Il cittadino ${Cittadino2.nome} non paga  `)
}else{
  console.log(`Il cittadino ${Cittadino2.nome} paga`)
}

