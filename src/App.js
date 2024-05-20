import './App.css';
import ImageSlider from './components/ImageSlider';

function App() {
  const slides = [
    {url: 'https://fastly.picsum.photos/id/476/1920/1080.jpg?hmac=LJUWF6_MnBx2oZUtOfj0A5ukHb7S4-fEoEhQeicqNP8', title: 'Slide 1'},
    {url: 'https://fastly.picsum.photos/id/34/1920/1080.jpg?hmac=uQUbyl32E0xDJdu2QgRzjbkV4pRSgwxKpLfImUL6Z3o', title: 'Slide 2'},
    {url: 'https://fastly.picsum.photos/id/122/1920/1080.jpg?hmac=ldynX93rVeTWk1ck63KkZynJuRiuOeRpXULW0Sf5SNs', title: 'Slide 3'},
    {url: 'https://fastly.picsum.photos/id/926/1920/1080.jpg?hmac=7Zc0XrvGkkBjR-55ewZXGDmOJmG7EkFR462yvfAbrdc', title: 'Slide 4'},
    {url: 'https://fastly.picsum.photos/id/58/1920/1080.jpg?hmac=hQVatZW6O7FNIORl-5rSTcfbf-x9LNZcGNBauwxEurc', title: 'Slide 5'},
    {url: 'https://fastly.picsum.photos/id/1069/1920/1080.jpg?hmac=NUxsMosS9O0W-DxtrqHXEAe2Yp6497Cx_WgTsELnFvY', title: 'Slide 6'},
    {url: 'https://fastly.picsum.photos/id/456/1920/1080.jpg?hmac=4i4NNj9vmD9p4e3ZpkwGDBj0zzeCatSKM4vCVfe27pg', title: 'Slide 7'}
  ];

  const containerStyle = {
    width: '80vw',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1vw auto'
  }
  return (
    <div className="App">
      <div style={containerStyle}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
