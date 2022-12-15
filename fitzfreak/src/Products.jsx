import dumbbells from './images/dumbbell.png';
import treadmill from './images/treadmill.png';
import skippingrope from './images/SkippingRope.png';
import ball from './images/ball.png';
import yogamat from './images/yogamat.png';
import bottle from './images/bottle.png';
import protein from './images/protein.png';
import proteinshake from './images/proteinshake.png';
import measurementtape from './images/MeasurementTape.png';
import './Products.css';

function Products() {
    return (
        <main>
        <div className="cards">
            <div className="card">
                <h2>Dumbbell</h2>
                <img className="card__pic" src={dumbbells} 
                    alt="dumbbell"  />
                <p className="text"> 
                    <br/>
                    <br/>
                    $20 - 100
                    <br/>
                    Free Home Delivery
                </p>            
            </div>
            <div className="card">
                <h2>Treadmill</h2>
                <img className="card__pic" src={treadmill} 
                    alt="treadmill"  />
                <p className="text">
                    <br/>
                    <br/>
                    $450 - 1000
                    <br/>
                    Free Home Delivery
                </p>
            </div>
            <div className="card">
                <h2>Skipping Rope</h2>
                <img className="card__pic" src={skippingrope} 
                    alt="SkippingRope" />
                <p className="text">
                    <br/>
                    <br/>
                    $7 - 30
                    <br/>
                    Free Home Delivery if order amount is $100 or more!!
                </p>
            </div>
            <div className="card">
                <h2>Excercise Ball</h2>
                <img className="card__pic" src={ball} 
                    alt="ball" />
                <p className="text">
                    <br/>
                    <br/>
                    $7 - 60
                    <br/>
                    Free Home Delivery
                </p>
            </div>
            <div className="card">
                <h2>Yoga Mat</h2>
                <img className="card__pic" src={yogamat} 
                    alt="yogamat" />
                <p className="text">
                    <br/>
                    <br/>
                    $11 - 100
                    <br/>
                    Free Home Delivery only on bulk orders!
                </p>
            </div>
            <div className="card">
                <h2>Bottle</h2>
                <img className="card__pic" src={bottle} 
                    alt="bottle" />
                <p className="text">
                    <br/>
                    <br/>
                    $15 - 100
                    <br/>
                    Free Home Delivery only on bulk orders!
                </p>
            </div>
            <div className="card">
                <h2>Protein Powder</h2>
                <img className="card__pic" src={protein} 
                    alt="protein" />
                <p className="text">
                    <br/>
                    <br/>
                    $15 - 100
                    <br/>
                    Free Home Delivery only on bulk orders!
                </p>
            </div>
            <div className="card">
                <h2>Protein Shake</h2>
                <img className="card__pic" src={proteinshake} 
                    alt="proteinshake" />
                <p className="text">
                    <br/>
                    <br/>
                    $15 - 100
                    <br/>
                    Free Home Delivery only on bulk orders!
                </p>
            </div>
            <div className="card">
                <h2>Measurement Tape</h2>
                <img className="card__pic" src={measurementtape} 
                    alt="Measurement Tape" />
                <p className="text">
                    <br/>
                    <br/>
                    $5 - 20
                    <br/>
                    Delivery charge $5 within 5 miles distance!
                </p>
            </div>
        </div>
        </main> 
    );
}
export default Products;