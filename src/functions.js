module.exports = {
    random(min, max) {
        if (typeof min === 'number' && typeof max === 'number') {
            const randomNum = Math.floor(Math.random() * max) + min;
            return randomNum;
        }
        return 'Unete vrednosti moraju biti brojevi';
    },

    minIntegerFromArray(array) {
        let minElement = 0;
        if (array.length <= 5) {
            return 'duzina niza mora biti veca od 5 elementa';
        }
        const numbers = array.filter(element => typeof element === 'number');
        if (numbers.length === 0) {
            return 'u nizu ne potoje brojevi';
        }
        minElement = Math.min(...numbers);
        return minElement;
    },

    minIntegerFromString(string) {
        const strLength = string.length;
        if (strLength >= 10) {
            const numbers = string.match(/[+-]?\d+/g).map(Number);
            return Math.min(...numbers);
        }
        return 'unesite string koji sadrzi vise od 9 karaktera';
    },

    concatStringsByLength(arrayOfStrings, type) {
        const sign = type === 0 ? 1 : -1;
        const arrayString = arrayOfStrings.sort((a, b) => sign * (a.length - b.length)).join('');
        return arrayString;
    },
};
