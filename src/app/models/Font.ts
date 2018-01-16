export class Font {
  // title : Style tytle , i stor this value in localStorage as key with a cell value : '_' .
  title: string;
  // background-color : RGB value
  backgroundColor: string;
  // color : RGB value;
  color: string;
  // font-style: normal|italic|oblique|initial|inherit;
  fontStyle: string;
  // font-variant: normal|small-caps|initial|inherit;
  fontVariant: string;
  // font-weight : font-weight: normal|bold|bolder|lighter|number [100 , 900]|initial|inherit;
  fontWeight: number;
  // font-stretch: ultra-condensed|extra-condensed|condensed|semi-condensed|normal|semi-expanded|expanded
  // |extra-expanded|ultra-expanded|initial|inherit;
  fontStretch: string;
  // font-size : [1,72] + 'px' ;
  fontSize: number;
  // line-height :[0-72] + 'px'
  lineHeight: number;
  // font-family:
  fontFamily: string;
  // text-decoration: none|underline|overline|line-through|initial|inherit;
  textDecoration: string;
  // text-transform: none|capitalize|uppercase|lowercase|initial|inherit;
  textTransform: string;
  // text-indent : [0 , 72]
  textIndent: number;
  // letter-spacing : [0, 72].
  letterSpacing: number;
  // word-spacing : [0 , 72]
  wordSpacing: number;
  // text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;
  textShadow: string;
  /**
   * init Font object
   * @param title :string
   * @param fontFamily [:string]
   * @param weight [:number]
   * @param size [:number]
   * @param fColor [:string]
   * @param bgColor [:string]
   * @param lineHeight [:number]
   * @param letterSpacing [:number]
   */
  constructor(title: string) {
    this.title = title;
  }
  /**
   * retrive this object from localstorage
   */
  constructFromDatabase() {
    const obj: Font = JSON.parse(localStorage.getItem('_' + this.title));
    if ( obj ) {
      this.fontFamily = obj.fontFamily;
      this.fontSize = obj.fontSize;
      this.fontWeight = obj.fontWeight;
      this.letterSpacing = obj.letterSpacing;
      this.lineHeight = obj.lineHeight;
      this.color = obj.color ;
    }
  }
  /**
   * add this object to localstorage.
   */
  saveToDatabase() {
    const obj = {
      'title': this.title, 'fontSize' : this.fontSize , 'fontFamily': this.fontFamily, 'fontWeight': this.fontWeight
      , 'letterSpacing': this.letterSpacing, 'lineHeight': this.lineHeight , 'color' : this.color
    };
    localStorage.setItem('_' + this.title, JSON.stringify(obj));
  }
  /**
   * check if already exist
   */
  isExist(): boolean {
    return (localStorage.getItem('_' + this.title) === null) ? false : true;
  }
  // full retrive from localstorage ... (not used in this version)
  getByName() {
    const obj: Font = JSON.parse(localStorage.getItem(this.title.substring(1)));
    this.backgroundColor = obj.backgroundColor;
    this.color = obj.color;
    this.fontFamily = obj.fontFamily;
    this.fontSize = obj.fontSize;
    this.fontStretch = obj.fontStretch;
    this.fontStyle = obj.fontStyle;
    this.fontVariant = obj.fontVariant;
    this.fontWeight = obj.fontWeight;
    this.letterSpacing = obj.letterSpacing;
    this.lineHeight = obj.lineHeight;
    this.textDecoration = obj.textDecoration;
    this.textIndent = obj.textIndent;
    this.textShadow = obj.textShadow;
    this.textTransform = obj.textTransform;
    this.wordSpacing = obj.wordSpacing;
  }
}
