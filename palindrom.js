class Palindrom {

  constructor(text) {
    this.text = text;
  }

  replaceSpecialCharacter(str) {
    var regex = /[^A-Za-z0–9]/gi;
    var removeNonalphanumericCharacter = /[\W_]/gi;
    return str.replace(regex, '');
  }

  turnCharacterToLowCase(str) {
    return str.toLowerCase(str);
  }

  splitString(str) {
    return str.split("");
  }

  compareString(str) {
    for(var i=0; i < (str.length)/2; i++) {
      if(str[i] !== str[str.length-1-i]){
        return false;
      }
    }
    return true;
  }

  methodOne() {
    var result = this.replaceSpecialCharacter(this.text);
    result = this.turnCharacterToLowCase(result);
    result = this.splitString(result);
    result = this.compareString(result);
    return result;
  }

}

console.log('Palindrom? ', new Palindrom('ABCBA').methodOne());