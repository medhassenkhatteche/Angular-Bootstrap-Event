export class AppareilService{

  appareils = [
    {
      id : 1,
      name : 'Radio',
      status : 'allumé'
    },
    {
      id : 2,
      name : 'TV',
      status : 'allumé'
    },
    {
      id : 3,
      name : 'Récépteur numérique',
      status : 'éteint'
    }
  ];

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }


  switchOnAll(){
    for (let appareil of this.appareils){
      appareil.status='allumé';
    }
  }

  switchOffAll(){
    for (let appareil of this.appareils){
      appareil.status='éteint';
    }
  }


  switchOnOne(index:number){
    this.appareils[index].status='allumé';
  }

  switchOffOne(index:number){
    this.appareils[index].status='éteint';
  }

}
