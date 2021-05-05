const findRelevantApts = function(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parkingCheck) {
    let relevantApts = apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms) &&
        a.parking === (parkingCheck.is(':checked'))
    )

    immediate = !immediate[0].checked
    return immediate ? relevantApts : relevantApts.filter(a => (a.immediate))
}