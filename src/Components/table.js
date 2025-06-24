import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ShowTable() {
  const [data, setData] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [editedItem, setEditedItem] = useState({});

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

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Product List Admin-Page (Inline Edit)</h2>
      <table className="table table-bordered table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Image</th>
            <th colSpan={2} className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {editRowId === item.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="title"
                      value={editedItem.title}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      value={editedItem.price}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="category"
                      value={editedItem.category}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="image"
                      value={editedItem.image}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm" onClick={handleSave}>Save</button>
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-sm" onClick={handleCancel}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <img src={item.image} alt={item.title} width="50" height="50" />
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick={() => handleEditClick(item)}>Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTable;
