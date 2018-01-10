
export class Font {
  title: string;
  fontFamily: string;
  weight: number;
  fColor: string;
  bgColor: string;
  size: number;
  lineHeight: number;
  letterSpacing: number;

  constructor( title: string , fontFamily: string , weight: number){
    this.title = title ;
    this.fontFamily = fontFamily ;
    this.weight = weight ;
  }
}
