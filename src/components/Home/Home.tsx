import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import './index.css';

function Home() {
    return ( 
        <div className="container">
            <main>
                <div>
                <section className="mainText">
                    <article>
                    <span className="whiteText">SpecLab</span> AI
                    </article>
                    <article>
                    Predictions
                    </article>
                </section>
                <section className="subText">
                    <article>
                    A Next Generation Image Recognition Platform with machine learning technology.
                    </article>
                </section>

                <Link to="/predict" className="btn">
                    <span>
                        Predict Now
                    </span>
                    <img src="arrow-right.png" alt="arrow" />
                </Link>
                </div>
            </main> 
        </div>
    );
}

export default Home;