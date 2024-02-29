fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        const filteredData = data.products
            .filter((product) => product.price <= 20)
            .sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                } else if (a.title < b.title) {
                    return -1
                } else {
                    return 0
                }
            })
            .map(
                (product) =>
                    `<p> Name: ${product.title} - Brand: ${product.brand} - Price: ${product.price}£</p>`
            )

            .join("")



        document.body.innerHTML = filteredData;
        console.log(filteredData);
    })

    .catch((error) => console.error("Something wrong mate", error));
