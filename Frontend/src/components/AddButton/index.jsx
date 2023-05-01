import { useNavigate } from "react-router";

function AddButton() {
  const navigate = useNavigate();
  return (
    <div className="add-button" onClick={() => navigate("/AddItem")}>
      <span className="material-symbols-outlined">add</span>
    </div>
  );
}

export default AddButton;
