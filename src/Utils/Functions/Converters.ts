export function stringToDouble(inputValue: string):number

{
    return 0
    // const regex = /^(\d*\.?\d+).*$/;
    // const match = inputValue.match(regexa);
    
    // if (match) {
    //     const valorFormatado = parseFloat(match[1]);
    //     return valorFormatado;
    // } else {
    //     return 0;
    // }
}

export function decimalToNumber(value: string): number {
    if(value === undefined || value == "0")
        return 0;
    return Number(value.toString().replaceAll(".","").replaceAll(",", "."));
}

export function getNumbers(text: string): string {
    if (!text)
        return "";
    return text.replace(/\D+/g, '');
}

export function isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
}

export function isLetter(value: string): boolean {
    return /[A-Z]|[a-z]+/.test(value);
}

export function isValidEmail(email: string): boolean {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}