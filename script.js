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
    
    fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Jaguar Keyholder',
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log);