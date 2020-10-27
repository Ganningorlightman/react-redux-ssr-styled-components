const numberFormat = (x, toFixed) => {
    if (!x) { return 0 }
    let newX = x;
    if (toFixed !== null && toFixed !== undefined) {
        newX = (+x).toFixed(toFixed);
    }

    let parts = newX.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
};

module.exports = numberFormat;
