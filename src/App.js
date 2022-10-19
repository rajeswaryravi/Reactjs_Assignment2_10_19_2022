import logo from './logo.svg';
import './App.css';


import ContentComponent from './components/ContentComponent';


function App() {
  var books = [
    {
        Id:"B-001",
        Name:"C",
        Author:"Kanitkar",
        Publication:"World-pub"
    },
    {
      Id:"B-001",
      Name:"C",
      Author:"Kanitkar",
      Publication:"World-pub"
  },
  {
    Id:"B-001",
    Name:"C",
    Author:"Kanitkar",
    Publication:"World-pub"
},
{
  Id:"B-001",
  Name:"C",
  Author:"Kanitkar",
  Publication:"World-pub"
},
{
  Id:"B-001",
  Name:"C",
  Author:"Kanitkar",
  Publication:"World-pub"
},
    ];
  
  return (
    <div className="App">
      <ContentComponent bookdetails={books}></ContentComponent>
     
    </div>
  );
}

export default App;
