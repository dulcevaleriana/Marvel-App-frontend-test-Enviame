const ChangeDateFormat = (dateInitial) => {
    let dateFormarDDMMYYYY = dateInitial.substring(0,10).split("-").reverse().join("-");
    return dateFormarDDMMYYYY;
}

export default ChangeDateFormat