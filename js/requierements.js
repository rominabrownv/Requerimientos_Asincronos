
const getSalesCoffee = async () => {
    const response = await fetch("https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml");
    const data = await response.text();

    return data;
};

export { getSalesCoffee };
