module.exports = {
    random(min, max) {
        if (typeof (min) === 'number' && typeof (max) === 'number') {
            const randomNum = Math.floor(Math.random() * (max)) + min;
            console.log(randomNum);
            return randomNum;
        }
        console.log('Unete vrednosti moraju biti brojevi');
        return -1;
    },

    minIntegerFromArray(array) {
        const numbers = [];
        let minElement = 0;
        if (array.length <= 5) {
            console.log('duzina niza mora biti veca od 5 elementa');
            return;
        }
        array.forEach((element) => {
            if (typeof (element) === 'number') {
                numbers.push(element);
            }
        });
        if (numbers.length === 0) {
            console.log('u nizu ne potoje brojevi');
        }
        minElement = Math.min(...numbers);
        console.log(minElement);
    },

    minIntegerFromString(string) {
        const strLength = string.length;
        if (strLength >= 10) {
            const numbers = string.match(/[+-]?\d+/g).map(Number);
            console.log(Math.min(...numbers));
            return Math.min(...numbers);
        }
        console.log('unesite string koji sadrzi vise od 9 karaktera');
        return -1;
    },

    concatStringsByLength(arrayOfStrings, type) {
        const sign = type === 0 ? 1 : -1;
        const arrayString = arrayOfStrings.sort((a, b) => sign * (a.length - b.length)).join('');
        console.log(arrayString);
    },
};
