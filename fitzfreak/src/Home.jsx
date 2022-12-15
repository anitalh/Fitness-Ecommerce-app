import './Home.css';
import cardio from './images/treadmill.png';
import weights from './images/DeadLiftWeights.png';
import yoga from './images/yogamat.png';
import protein from './images/proteinshake.png';
import Carousel from './Carousel';
import slides from './Slider';
import {useRef} from 'react';

function Home() {
    const aboutRef = useRef(null);
    return (
        <main>
             <div className="card__holder-one">
                <h2 className="card__title-one">
                    Cardio
                </h2>
                <img className="panel__one" src={cardio}
                    alt="cardio"/>
                    <p className="card__text">
                        Endurance training, also known as aerobic exercise, includes activities that increase your breathing and improves cardiovascular health such as walking, jogging, swimming, biking, jumping rope, and the likes. In addition to that, endurance refers to the ability of muscles to consistently exert force over time. 
                        We offer Treadmill, Eliptical Trainers,  Rowing Machines and stair climber machines
                    </p>
            </div>
            <div className="card__holder-two">
                <h2 className="card__title-two">
                    Strength Training and Weights
                </h2>
                <img className="panel__two" src={weights}
                    alt="weights"/>
                    <p className="card__text">
                        Weight training is a type of strength training that uses weights for resistance. Weight training provides a stress to the muscles that causes them to adapt and get stronger, similar to the way aerobic conditioning strengthens your heart. We offer Dumbbells, Resistance bands, Barbells, Kettlebells, TRX Suspension Trainer, Cable machines.
                    </p>
            </div>
            <div className="card__holder-three">
                <h2 className="card__title-three">
                    Yoga
                </h2>
                <img className="panel__three" src={yoga}
                    alt="yoga"/>
                    <p className="card__text">
                        Yoga improves strength, balance and flexibility. It helps with back pain relief, ease arthritis symptoms, sleep better, manage stress, better self-care and weight reduction. We offer Yoga Mat, Yoga Mat Bag, Water Bottle, Yoga Block, Yoga Strap.
                    </p>
            </div>
            <div className="card__holder-four">
                <h2 className="card__title-four">
                    Suppliments
                </h2>
                <img className="panel__four" src={protein}
                    alt="protein"/>
                    <p className="card__text">
                        As we age we lose muscle, and research shows boosting protein may help increase strength and lean body mass. Protein powder may help you feel more satiated. We offer variety of protien powders such as Vanilla, Chocolate Brownie, Cookies and Cream, Salted Caramel, White Chocolate, Strawberry Cream.
                    </p>
            </div>
            <div className='modal'>
                <button
                  className="about__open" onClick={ () => {
                    aboutRef.current.showModal();
                  }}>  Read More About Us
                </button>
                <dialog className='about__modal' ref={aboutRef}>
                  <span className='about__text'>
                    About Us
                  </span>
                  <p>
                    We are FitzFreak. We are a enthusiastic gym equipment sellers/dealers. We are in the industry for about 2 years. Customer satisfaction is our primary goal. We also provide 1 free demo session to the clients who are interested. Currently we have branch in seattle, WA and looking for expansion soon across America. We offer free delivery on bulk orders in seattle.
                  </p>
                  <div className='about__controls'>
                  <button className='about__cancel' onClick={ () => {
                    aboutRef.current.close();}}>
                      cancel
                  </button>
                  </div>
                </dialog> 
                </div>
            <div className='container-styles'>
                <Carousel slides={slides} />
             </div>
        </main> 
    );
}
export default Home;