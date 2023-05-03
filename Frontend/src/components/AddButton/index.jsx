import { useNavigate, useParams } from "react-router";

function AddButton() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="add-button" onClick={() => navigate(`/AddItem/${id}`)}>
      <span className="material-symbols-outlined">add</span>
    </div>
  );
}

export default AddButton;
