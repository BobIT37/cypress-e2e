describe('empty spec', () => {
  it('passes', () => {
    cy.log('hello world');
  });
  it('Typescript Introduction', () => {
    let stringVariable: string = "9";
    let numberVariable: number = 9;
    let booleanVariable: boolean = true;
    let anyVariable: any = 'alloo';

    function addTwoNumbers( a:number, b:number):number {
      return a + b;
    }

    let addNUm =  ( a:number, b:number):number => {return a + b;}

    function multiTwoNumbers( a:number, b:number):void {
      //console.log( a * b);
    }

    interface User {
    
      username : string;
      password : string;

    }

    function returningUserInfo(user:User):void {
      console.log(`This is the user name ${user.username}`);
      console.log('This is the user name ', user.username);
      console.log('This is the password ', user.password);
    }

  });
});