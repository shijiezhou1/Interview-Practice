class Palindrom {

    constructor(text) {
        this.text = text;
    }

    replaceSpecialCharacter(str) {
        let regex = /[^A-Za-z0–9]/gi;
        let removeNonalphanumericCharacter = /[\W_]/gi;
        return str.replace(regex, '');
    }

    turnCharacterToLowCase(str) {
        return str.toLowerCase(str);
    }

    splitString(str) {
        return str.split("");
    }

    compareStringForLoop(str) {
        for (let i = 0; i < (str.length) / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    compareStringWhileLoop(str) {
        let i = 0;
        while (i < (str.length) / 2) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
            i++;
        }
        return true;
    }

    methodOneForLoop() {
        let result = this.replaceSpecialCharacter(this.text);
        result = this.turnCharacterToLowCase(result);
        result = this.splitString(result);
        result = this.compareStringForLoop(result);
        return result;
    }

    methodTwoWhileLoop() {
        let result = this.replaceSpecialCharacter(this.text);
        result = this.turnCharacterToLowCase(result);
        result = this.splitString(result);
        result = this.compareStringWhileLoop(result);
        return result;
    }

    methodThreeWhileReverseLoop() {

    }

}

console.log('Is ABCBAc@@@ Palindrom? ', new Palindrom('ABCBAc@@@').methodTwoWhileLoop());
console.log('Is ABCBA@@@ Palindrom? ', new Palindrom('ABCBA@@@').methodTwoWhileLoop());