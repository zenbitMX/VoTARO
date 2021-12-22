import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';
import reward from '../assets/reward.png';
import prop from '../assets/prop.png';
import past from '../assets/past.png';
import vote2 from '../assets/vote2.svg';

const QuizSuccessModal = (props) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english' ?

      <Modal
        {...props}
        class="modal-fullscreen-xxl-down"
        size="xl"
        centered
      >
        <h1><span id="vote" class="yellow-jos"> Congratulations! </span></h1><br/>
          <div class="center"><div class="jump"><img src={reward} alt="Alert about verification" class="prop-img"/></div></div>
          <h1><span> You have TARO now</span></h1>
          <div class="about-tx2"> <span class="yellow">You have validated your account for six months and TARO tokens have been transfered to your account. </span><br/><br/>
          Now you can create or vote on urban governance proposals. Touch one section below to start using your TARO.</div>
        <Modal.Body>
        <div class="void-link">
          <div class="prop-bgr"><a href="/createProposal">
            <img src={prop} class="ribvan"/> 
            <div class="propsub">Create proposal</div>
            <div class="propopt">Propose</div>
          </a></div>
          <div class="prop-bgr"><a href="/ProposalList#vote">
          <img src={vote2} class="ribvan"/> 
          <div class="propsub">Available proposals</div>
          <div class="propopt">Vote</div>
          </a></div>
          <div class="prop-bgr"><a href="/PastProposals">
            <img src={past} class="ribvan"/> 
            <div class="propsub">Past proposals</div>
            <div class="propopt">Record</div>
          </a></div>
          <div class="prop-bgr"><a href="/About">
            <img src={reward} class="ribvan"/>
            <div class="propsub">Learn +</div>
            <div class="propopt">Docs</div>
          </a></div>
        </div>
        </Modal.Body>
      </Modal>
      :
      <Modal
      {...props}
      class="modal-fullscreen-xxl-down"
      size="xl"
      centered
    >
      <h1><span id="vote" class="yellow-jos">¡Felicidades! </span></h1><br/>
        <div class="center"><div class="jump"><img src={reward} alt="Alert about verification" class="prop-img"/></div></div>
        <h1><span> Ahora tienes TARO</span></h1>
        <h3> <span class="yellow">Has validado cuenta por seis meses y tu recompensa en tokens TARO se han transferido a su cuenta. </span>
         Ahora puedes crear o votar propuestas de gobernanza urbana. Toca una sección para comenzar a usar tu TARO.</h3>
      <Modal.Body>
      <div class="void-link">
            <div class="prop-bgr"><a href="/createProposal">
              <img src={prop} class="ribvan"/> 
              <div class="propsub">Crea una propuesta</div>
              <div class="propopt">Proponer</div>
            </a></div>
            <div class="prop-bgr"><a href="/ProposalList#vote">
            <img src={vote2} class="ribvan"/> 
            <div class="propsub">Propuestas</div>
            <div class="propopt">Por votar</div>
          </a></div>
            <div class="prop-bgr"><a href="/PastProposals">
              <img src={past} class="ribvan"/> 
              <div class="propsub">Propuestas pasadas</div>
              <div class="propopt">Historial</div>
            </a></div>
            <div class="prop-bgr"><a href="/About">
              <img src={reward} class="ribvan"/>
              <div class="propsub">Ver documentación</div>
              <div class="propopt">Conoce +</div>
            </a></div>
          </div>
      </Modal.Body>
    </Modal>
    }
    </div>
  );
};

export default QuizSuccessModal;
