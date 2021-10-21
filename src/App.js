import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <li><a href="#ballroom">link one</a></li>
          <li>link two</li>
        </div>
      </header>
      <section className="introduction">
        <img src="https://via.placeholder.com/400x600" />
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ultricies ante. Curabitur et neque scelerisque, lobortis ipsum in, placerat urna. Cras viverra lacus sit amet imperdiet feugiat. Donec at malesuada ligula. Etiam quis lacus turpis. Donec et mi quis velit sagittis ullamcorper. Duis suscipit ipsum et dui lacinia eleifend. Vivamus luctus lacus sit amet ultricies sodales. Quisque eu ornare velit, quis tristique lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor commodo elit in lacinia. Vestibulum ac sagittis lectus. Mauris sagittis at massa a elementum. Sed risus est, auctor a bibendum vel, vestibulum id mauris.</p>
        <h4>-test</h4>
        </div>
      </section>
      <section>
        <h1>Welcome to</h1>
        <div className="description">
          <div className="left">
            <p>Vivamus luctus lacus sit amet ultricies sodales. Quisque eu ornare velit, quis tristique lacus.</p>
          </div>
          <div className="right">
            <p>Vestibulum ac sagittis lectus. Mauris sagittis at massa a elementum. Sed risus est, auctor a bibendum vel, vestibulum id mauris.</p>
          </div>
        </div>
      </section>
      <div id="ballroom" className="location">
        <div className="text-box">
          <p>Vivamus luctus lacus sit amet ultricies sodales. Quisque eu ornare velit, quis tristique lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor commodo elit in lacinia. Vestibulum ac sagittis lectus. Mauris sagittis at massa a elementum. Sed risus est, auctor a bibendum vel, vestibulum id mauris.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
