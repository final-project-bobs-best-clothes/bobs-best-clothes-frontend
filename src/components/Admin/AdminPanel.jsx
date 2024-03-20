import { Link } from 'react-router-dom';

function AdminPanel() {
  return (
    <div className='container push-down d-flex justify-content-center'>
      <div className="d-flex align-items-center">
        <Link to="/createProduct" className="admin-panel-link" >Create Product</Link>
        <Link to="/createCategory" className="admin-panel-link">Create Category</Link>
      </div>
    </div>
  );
}

export default AdminPanel;

