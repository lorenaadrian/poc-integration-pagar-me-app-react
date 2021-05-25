import './App.css';
import {CheckoutWhitoutCustomerData as Checkout1} from './checkout/CheckoutWhitoutCustomerData'
import {CheckoutWhitCustomerData as Checkout2} from './checkout/CheckoutWhitCustomerData'


function App() {
  const customer = {
    external_id: '#123456789',
    name: 'Fulano',
    type: 'individual',
    country: 'br',
    email: 'fulano@email.com',
    documents: [
      {
        type: 'cpf',
        number: '71404665560',
      },
    ],
    phone_numbers: ['+5511999998888', '+5511888889999'],
    birthday: '1985-01-01',
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Integração via checkout - obtendo os dados do comprador
        </p>
        <Checkout1 />
        <p>
          Integração via checkout sem a obtenção dos dados comprador
        </p>
        <Checkout2 customerData={customer} />
      </header>
    </div>
  );
}

export default App;
