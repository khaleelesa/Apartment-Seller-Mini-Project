$("button").on("click", function() {

    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parkingCheck = $("#park-y")
    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parkingCheck)

    renderApts(relevantApts)

    if (relevantApts.length === 0) {
        alert("Sorry but we dont have what you want")
        renderApts(apartments)
    }
})

const renderApts = function(apartments) {
    const source = $('#apartment-template').html();
    const template = Handlebars.compile(source);
    $("#results").empty()
    let newHTML = template({ apartments });
    $("#results").append(newHTML);
}

renderApts(apartments) //renders apartments when page loads