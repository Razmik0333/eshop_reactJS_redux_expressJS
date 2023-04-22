import './styles/_client-feedback.scss';

function ClientFeedback() {
     return (
          <div className="client__feedback">
          <div className="container client__feedback__container">
               <div className="client__feedback__header">
                    <p className="client-feedback-header">
                         CLIENT FEEDBACK
                    </p>
                    <div className="client__feedback_line__circles">
                         <div className="client__feedback__line">
     
                         </div>
                         <div className="circles">
                              <div className="circle active"></div>
                              <div className="circle"></div>
                              <div className="circle"></div>
                         </div>
                    </div>
               </div>
               <div className="client__feedback__content">
                    <div className="blockquotes">
                         
                    </div>
                    <div className="feedback__text">
                         Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                    </div>
                    <div className="feedback__author">
                         <div className="feedback__author__pictures"></div>
                         <div className="feedback__author__info">
                              <div className="feedback__author__name">
                                   Jhon Smith
                              </div>
                              <div className="feedback__author__type">
                                   Furniture client
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     )
}

export default ClientFeedback;
