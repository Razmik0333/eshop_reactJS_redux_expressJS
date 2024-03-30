import { useSelector } from 'react-redux';
import AdminContent from '../AdminContent/AdminContent';
import AdminMenu from '../AdminMenu/AdminMenu';
import './styles/_admin.scss';
import { getUserId } from '../../../../helpers/reduxSelectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Admin() {
     const userId = useSelector(getUserId);
     const navigate = useNavigate();
     useEffect(() => {
          !(userId === 2) && navigate('/login') 
     }, []);
     return <div className="admin__panel">
          <div className="container admin__panel__container">
               <AdminMenu />
               <AdminContent />
          </div>

     </div>
}

export default Admin;
