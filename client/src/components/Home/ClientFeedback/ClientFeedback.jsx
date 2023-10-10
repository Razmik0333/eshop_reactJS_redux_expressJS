import { useEffect } from 'react';

import ClientFeedBackHeader from './ClientFeedBackHeader/ClientFeedBackHeader';
import ClientFeedbackContent from './ClientFeedBackContent/ClientFeedbackContent';
import { useDispatch } from 'react-redux';
import { fetchLatestReviews } from '../../../redux/ducks/reviewDuck';
import './styles/_client-feedback.scss';

function ClientFeedback() {
     const dispatch = useDispatch()

     useEffect(() => {
          dispatch(fetchLatestReviews())
     }, []);
     return (
          <div className="client__feedback">
          <div className="container client__feedback__container">
               <ClientFeedBackHeader />
               <ClientFeedbackContent />
          </div>
     </div>
     )
}

export default ClientFeedback;
