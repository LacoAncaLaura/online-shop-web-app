window.Shop = {

    API_URL: "http://localhost:8082",

    getProducts: function () {

        $.ajax({
            method: "GET",
            url: Shop.API_URL + "/products"
        }).done(function(response){
            console.log(console)
        })
    }
}