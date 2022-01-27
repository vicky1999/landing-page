import './App.css';
import Discount from './Discount/Discount';

function App() {

  const price = 149.00;

  const discounts = [
    {
      isRange: false,
      count: 3,
      discount: 10,
      isPopular: false
    },
    {
      isRange: false,
      count: 4,
      discount: 20,
      isPopular: true
    },
    {
      isRange: false,
      count: 5,
      discount: 30,
      isPopular: false
    },
    {
      isRange: false,
      count: 6,
      discount: 35,
      isPopular: false
    },
    {
      isRange: false,
      count: 7,
      discount: 40,
      isPopular: false
    },
    {
      isRange: false,
      count: 8,
      discount: 45,
      isPopular: true
    }
  ];

  return (
    <div className="App">
      <Discount className='discount-section' discounts={discounts} price={price} />
    </div>
  );
}

export default App;
