import './App.css';
import Books from './components/Books';
import ChildrenProp from "./components/childrenProp";


function App() {
  const firstBook = [
    {
      img: "https://loremflickr.com/320/241",
      title: "Otamdan qolgan dalalar",
      author: "Tog'ay Murod",
    },
    {
      img: "https://loremflickr.com/320/242",
      title: "O'tgan kunlar",
      author: "Abdulla Qodiriy",
    },
    {
      img: "https://loremflickr.com/320/243",
      title: "Kecha va kunduz",
      author: "Abdulhamid Cho'lpon",
    },
    {
      img: "https://loremflickr.com/320/244",
      title: "Ikki eshik orasi",
      author: "O'tkir Hoshimov",
    },
    {
      img: "https://loremflickr.com/320/245",
      title: "Urushning so'nggi qurboni",
      author: "O'tkir Hoshimov",
    },
    {
      img: "https://loremflickr.com/320/246",
      title: "Qiyomat",
      author: "Chingiz Aytmatov",
    },
    {
      img: "https://loremflickr.com/320/247",
      title: "Baxtiqaro Kerri",
      author: "Teador Drayzer",
    },
    {
      img: "https://loremflickr.com/320/245",
      title: "Urush va tinchlik",
      author: "Lev Tolstoy",
    },
    {
      img: "https://loremflickr.com/320/245",
      title: "Cho'qintirgan ota",
      author: "Mario Pyozo",
    },
  ];
  return (
    <div className='container'>
      <div className='book_wrapper'>
        {firstBook.map((books, index) => {
          return (
            <Books
              img={books.img}
              title={books.title} author={books.author}
              key={index}
            />
          );
        })}    
      </div>  
      <br />
      <ChildrenProp>
        About Us
      </ChildrenProp>
      <br />
      <ChildrenProp children={<Books/>}/>
    </div>
  );
}

export default App;
