import './App.css';
import Test2 from './components/test2';


function App() {
  const expences = [
    {
      title: "Dasturlash kurslari",
      amount: 35,
      date: new Date(2023, 3, 25)
    },
    {
      title: "Kammunal harajatlar",
      amount: 20,
      date: new Date(2023, 3, 25)
    },
    {
      title: "Yo'l kira",
      amount: 11,
      date: new Date(2023, 3, 25)
    },
    {
      title: "Ijara",
      amount: 100,
      date: new Date(2023, 5, 25)
    },
    {
      title: "Kutilmagan harajatlar",
      amount: 45,
      date: new Date(2023, 6, 25)
    },
  ];

  return (
    <div className='container'>
      <h1 className='headline'>Hello World</h1>
      <h2>Front-end dasturchining bir oylik xarajatlari</h2>
      <Test2
        title={
          expences[0].title  
        }
        amount={
          expences[0].amount
        }
        date={expences[0].date}
      />
      <Test2
        title={
          expences[1].title  
        }
        amount={
          expences[1].amount
        }
        date={expences[1].date}
      />
      <Test2
        title={
          expences[2].title  
        }
        amount={
          expences[2].amount
        }
        date={expences[2].date}
      />
      <Test2
        title={
          expences[3].title  
        }
        amount={
          expences[3].amount
        }
        date={expences[3].date}
      />
      <Test2
        title={
          expences[4].title  
        }
        amount={
          expences[4].amount
        }
        date={expences[4].date}
      />
    </div>
  );
}

export default App;
