export class Category {

  constructor(public id: number, public name: String, public children: Category[], public items: string[]) {
  }

}
