import { useState } from 'react';
import './Accordion.css';

function Accordion(){
    const [isquestionOneOpen, setQuestionOneOpen] = useState(false);
    const [isquestiontwoOpen, setIsetQuestiontwopensOpen] = useState(false);
    const [isquestionThreeOpen, setQuestionThreeOpen] = useState(false);
    const [isquestionFourOpen, setIsetQuestionFourpensOpen] = useState(false);

    const handlequestionOneToggle = () => 
      setQuestionOneOpen(!isquestionOneOpen);
    const handlequestionTwoToggle = () => 
      setIsetQuestiontwopensOpen(!isquestiontwoOpen);
    const handlequestionThreeToggle = () => 
      setQuestionThreeOpen(!isquestionThreeOpen);
    const handlequestionFourToggle = () => 
      setIsetQuestionFourpensOpen(!isquestionFourOpen);

    return (
      <div className='faqs'> 
        <div className='faq'> 
          <p>
            <button className='question'
              aria-expanded={isquestionOneOpen}
              onClick={handlequestionOneToggle}>
              Do you have a return policy?
            </button>
          </p>
          <div className='answer' hidden={!isquestionOneOpen}>
            <p>Yes we provide 30 days returns if the item is not used.</p>
        </div>
        </div>
        <div className='faq'> 
          <p>
            <button className='question'
              aria-expanded={isquestiontwoOpen}
              onClick={handlequestionTwoToggle}>
              Do you offer any discounts?
            </button>
          </p>
          <div className='answer' hidden={!isquestiontwoOpen}>
            <p>We offer discounts on orders exceeding $600. Contact Us for more details.</p>
        </div>
        </div>
        <div className='faq'> 
          <p>
            <button className='question'
              aria-expanded={isquestionThreeOpen}
              onClick={handlequestionThreeToggle}>
              Do you have a customer care number?
            </button>
          </p>
          <div className='answer' hidden={!isquestionThreeOpen}>
            <p>+1 4251234567 charges may apply*</p>
        </div>
        </div>
        <div className='faq'> 
          <p>
            <button className='question'
              aria-expanded={isquestionFourOpen}
              onClick={handlequestionFourToggle}>
              Do you offer support if I need help?'
            </button>
          </p>
          <div className='answer' hidden={!isquestionFourOpen}>
            <p>Customer experience is our high priority. We do our best to resolve any issues you may encounter.</p>
        </div>
        </div>
      </div>
    )
}

export default Accordion;