
export const checkout = async (price, name) => {
    fetch("https://api.commerce.coinbase.com/charges/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CC-Api-Key": process.env.REACT_APP_API_KEY,
        "X-CC-Version": "2018-03-22",
      },
      body: JSON.stringify({
        name: `Checkout for: ${name}`,
        description: "",
        pricing_type: "fixed_price",
        local_price: {
          amount: price,
          currency: "USD",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.open(data.data.hosted_url);

      });
      
  };



  export default checkout;
