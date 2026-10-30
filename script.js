
$(document).ready(function() {

    // BUDGET CALCULATOR

    $("#evaluate").click(function() {

        var amount = Number($("#budgetAmount").val());

        if (amount <= 0 || !Number.isFinite(amount)) {

            $("#budgetResult").html("Please enter a valid budget.");

            return;
        }

        var furniture = amount * 40 / 100;
        var accessories = amount * 20 / 100;
        var emergency = amount * 20 / 100;
        var savings = amount * 20 / 100;

        $("#budgetResult").html(

            "<h3>Budget Distribution</h3>" +

            "<p>Furniture: ₹" + furniture.toFixed(2) + "</p>" +

            "<p>Accessories: ₹" + accessories.toFixed(2) + "</p>" +

            "<p>Emergency: ₹" + emergency.toFixed(2) + "</p>" +

            "<p>Savings: ₹" + savings.toFixed(2) + "</p>"

        );

    });


    // SHOPPING BILL CALCULATOR

    $("#order").click(function() {

        var total = 0;
        var valid = true;

        $(".qty").each(function() {

            var quantity = Number($(this).val());

            var price = Number($(this).data("price"));

            if (!Number.isInteger(quantity) || quantity < 0) {

                valid = false;

                return false;
            }

            total = total + (quantity * price);

        });

        if (!valid) {

            $("#bill").text("Please enter valid quantities.");

            return;
        }

        $("#bill").text("Total: ₹" + total.toFixed(2));

    });

});
