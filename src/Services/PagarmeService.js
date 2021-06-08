import pagarme from "pagarme";

export const connectPagarme = (dataCard) => {
  console.log(dataCard);
  pagarme.client
    .connect({ api_key: "API_KEY" })
    .then((client) => client.transactions.capture({ id: "1627822" }));

  // Using Promise chain:
  pagarme.client.connect({ api_key: "API_KEY" }).then((client) => {
    client.transactions
      .create({
        capture: false,
        amount: 100,
        card_number: "4111111111111111",
        card_holder_name: "abc",
        card_expiration_date: "1225",
        card_cvv: "123",
      })
      .then(client.transactions.capture);
  });
};
