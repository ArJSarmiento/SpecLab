import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';
import './index.scss';

function Home() {
    return ( 
        <div className="container">
            <img src="grid.png" alt="" className="gridBG" />
            <main>
                <div className="content">
                    <section className="mainText">
                        <article>
                        <span className="whiteText">SpecLab</span> AI
                        </article>
                        <article>Predictions</article>
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
                <div className="toucan">
                    <img src="toucan.jpg" alt="toucan" />
                </div>
            </main> 
        </div>
    );
}

export default Home;