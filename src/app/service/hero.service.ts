import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    //private hero:any[]=
    private hero:Hero[]=
        [
            {
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/aquaman.png",
              aparicion: "1941-11-01",
              casa:"DC",
              tipo: "H"
            },
            {
              nombre: "Batman",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/batman.png",
              aparicion: "1939-05-01",
              casa:"DC",
              tipo: "H"
            },
            {
              nombre: "Daredevil",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/daredevil.png",
              aparicion: "1964-01-01",
              casa: "Marvel",
              tipo: "H"
            },
            {
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/hulk.png",
              aparicion: "1962-05-01",
              casa:"Marvel",
              tipo: "H"
            },
            {
              nombre: "Linterna Verde",
              bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
              img: "assets/img/linterna-verde.png",
              aparicion: "1940-06-01",
              casa: "DC",
              tipo: "H"
            },
            {
              nombre: "Thanos",
              bio: "Un titán que se enamoró de la manifestación física de la muerte y hace lo que sea por enamorarla, incluso si esto significa destruir la vida en el universo.",
              img: "assets/img/thanos.png",
              aparicion: "1973-04-01",
              casa: "Marvel",
              tipo: "V"
            },
            {
              nombre: "Darkseid",
              bio: "Darkseid es el gobernante tiránico del planeta Apokolips, cargo que obtuvo después de asesinar a su madre. Su obsesión es encontrar la Ecuación de la Anti-vida y usarla para gobernar el universo; esta meta también incluye conquistar su planeta rival, Nuevo Génesis, gobernado por el Alto Padre. Una guerra destructiva entre los dos mundos sólo se detuvo con un intercambio diplomático de los hijos de el Alto Padre y Darkseid.",
              img: "assets/img/darkseid.png",
              aparicion: "1970-11-01",
              casa: "DC",
              tipo: "V"
            },
            {
              nombre: "Spider-Man",
              bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
              img: "assets/img/spiderman.png",
              aparicion: "1962-08-01",
              casa: "Marvel",
              tipo: "H"
            },
            {
              nombre: "Venom",
              bio: " Es un extraterrestre sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante la unión con un huésped, por lo general humano. Esta forma de vida dual recibe poderes mejorados y generalmente se refiere a sí misma como «Venom».",
              img: "assets/img/venom.png",
              aparicion: "1988-05-01",
              casa: "Marvel",
              tipo: "V"
            },
            {
              nombre: "Wolverine",
              bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
              img: "assets/img/wolverine.png",
              aparicion: "1974-11-01",
              casa: "Marvel",
              tipo: "H"
            }
    ];

    constructor(){
        console.log("Servicio listo para usar!!");
    }

    //getHeros(){
    getHeros():Hero[]{
        return this.hero;
    }

    getHero(id:number){
        return this.hero[id];   
    }

    buscarHeroe(palabra:string):Hero[]{
      let heroArr:Hero[] = [];
      palabra = palabra.toLowerCase();
      for( let hero of this.hero){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           heroArr.push(hero);
        }
      }
      return heroArr;
    }

}

export interface Hero{
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string,
    tipo:string
}