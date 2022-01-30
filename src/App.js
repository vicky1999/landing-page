import './App.css';
import Discount from './Discount/Discount';

function App() {

  const price = 29.99;

  const discounts = [
    {
      isRange: true,
      // count: 3,      //  count comes for discounts without range
      from: 3,
      to: 4,            // From and to comes for discounts with range
      discount: 10,
      isPopular: false
    },
    {
      isRange: true,
      // count: 4,
      from: 5,
      to: 6,
      discount: 20,
      isPopular: true
    },
    {
      isRange: true,
      // count: 5,
      from: 7,
      to: 8,
      discount: 30,
      isPopular: false
    },
    {
      isRange: true,
      // count: 6,
      from: 9,
      to: 10,
      discount: 35,
      isPopular: false
    },
    {
      isRange: true,
      // count: 7,
      from: 11,
      to: 12,
      discount: 40,
      isPopular: false
    },
    {
      isRange: true,
      // count: 8,
      from: 13,
      discount: 45,
      isPopular: true
    }
  ];

  const variantConfig = {
    singleVariant: false
  }

  const variants=[
    {
      name: '8(UK)'
    },
    {
      name: '7(UK)'
    },
    {
      name: '6(UK)'
    },
    {
      name: '5(UK)'
    }
  ]

  return (
    <div className="App">
      {
        discounts.length > 0 &&
        <Discount className='discount-section' discounts={discounts} price={price} variants={variants} variantConfig={variantConfig} />
      }
    </div>
  );
}

export default App;
