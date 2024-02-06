$(document).ready(function () {

    // do calculation when button is pressed
    $('#calculate').click(function () {

        // get number of hours
        var hours = parseFloat($('#hours').val());

        // validate number
        if (hours < 0.1 || isNaN(hours)) {
            alert('Please enter a positive number for hours.');
            return;
        }

        // get hourly rate
        var hourlyRate = parseFloat($('#hourlyRate').val().replace('$', ''));

        // determine total cost
        var totalCost = hours * hourlyRate;

        // set value of output to the total cost
        $('#output').val('$' + totalCost.toFixed(2));
    });
});