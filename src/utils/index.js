export const nFormatter = (num, digits) => {
    if (num === 0) return 0;

    const lookup = [
        { value: 1, symbol: "" },
        { value: 1E0, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];

    const regx = /\.0+$|(\.[0-9]*[1-9])0+$/; // trim trailing zeros

    var item = lookup.slice().reverse().find(item => Math.abs(num) >= item.value);

    return item ? (num / item.value).toFixed(digits).replace(regx, "$1") + item.symbol : "0";
}

export const getDate = (date) => {
    const dateObj = new Date(date)
    return dateObj.getUTCFullYear();
}

export const toReadableDuration = function (time_seconds) {
    var sec_num = parseInt(time_seconds, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours > 0 ? hours + ':' + minutes + ':' + seconds : minutes + ':' + seconds;
}