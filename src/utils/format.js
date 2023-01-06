export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function numberTwoDecimal(x) {
    return Number.parseFloat(x).toFixed(2);
}