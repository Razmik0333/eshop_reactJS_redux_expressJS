import AdminContent from '../AdminContent/AdminContent';
import AdminMenu from '../AdminMenu/AdminMenu';
import './styles/_admin.scss';

function Admin() {
     return <div className="admin__panel">
          <div className="container admin__panel__container">
               <AdminMenu />
               <AdminContent />
          </div>

     </div>
}

export default Admin;
