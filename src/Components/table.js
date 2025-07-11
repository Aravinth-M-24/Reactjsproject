import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ShowTable() {
  const [data, setData] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleEditClick = (item) => {
    setEditRowId(item.id);
    setEditedItem({ ...item });
  };

  const handleCancel = () => {
    setEditRowId(null);
    setEditedItem({});
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editedItem.id ? editedItem : item
      )
    );
    setEditRowId(null);
    setEditedItem({});
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  };

  // 🔽 Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Product List Admin Page</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle table-striped">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price ($)</th>
              <th>Category</th>
              <th>Image</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.id}</td>
                {editRowId === item.id ? (
                  <>
                    <td>
                      <input type="text" name="title" value={editedItem.title} onChange={handleChange} className="form-control form-control-sm" />
                    </td>
                    <td>
                      <input type="number" name="price" value={editedItem.price} onChange={handleChange} className="form-control form-control-sm" />
                    </td>
                    <td>
                      <input type="text" name="category" value={editedItem.category} onChange={handleChange} className="form-control form-control-sm" />
                    </td>
                    <td>
                      <input type="text" name="image" value={editedItem.image} onChange={handleChange} className="form-control form-control-sm" />
                    </td>
                    <td colSpan={2}>
                      <div className="d-flex justify-content-center gap-2">
                        <button className="btn btn-success btn-sm" onClick={handleSave}>Save</button>
                        <button className="btn btn-secondary btn-sm" onClick={handleCancel}>Cancel</button>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.title}</td>
                    <td className="text-center">${item.price.toFixed(2)}</td>
                    <td>{item.category}</td>
                    <td className="text-center">
                      <img src={item.image} alt={item.title} style={{ width: "45px", height: "45px", objectFit: "contain" }} className="img-thumbnail" />
                    </td>
                    <td>
                      <div className="d-grid">
                        <button className="btn btn-primary btn-sm" onClick={() => handleEditClick(item)}>Edit</button>
                      </div>
                    </td>
                    <td>
                      <div className="d-grid">
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔽 Pagination Controls */}
      <nav className="d-flex justify-content-center mt-3">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
              key={index}
            >
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ShowTable;
