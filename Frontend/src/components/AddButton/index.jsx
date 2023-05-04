import { useState } from "react";
import { useNavigate, useParams } from "react-router";

function AddButton() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="add-section">
      {menuOpen ? (
        <div className="option-section text-end my-2 p-2">
          <div
            className="py-1 px-3"
            onClick={() => {
              navigate(`/increaseearnings/${id}`);
              setMenuOpen(false);
            }}
          >
            Increase Earnings
          </div>
          <hr />
          <div
            className="py-1 px-3"
            onClick={() => {
              navigate(`/additem/${id}`);
              setMenuOpen(false);
            }}
          >
            Add Expense
          </div>
        </div>
      ) : null}
      <div className="add-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <span className="material-symbols-outlined">remove</span>
        ) : (
          <span className="material-symbols-outlined">add</span>
        )}
      </div>
    </div>
  );
}

export default AddButton;
