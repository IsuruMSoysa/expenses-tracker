/* eslint-disable react/prop-types */
const ProjectButton = ({
  label,
  backgroundColor,
  hoverColor,
  size,
  color,
  btnOnClick,
}) => {
  const styles = {
    backgroundColor: backgroundColor || "#1abda9",
    color: color || "#424242",
    padding: size === "small" ? "8px 16px" : "12px 24px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    margin: "5px",
    fontWeight: "600",
  };

  if (hoverColor) {
    styles[":hover"] = {
      backgroundColor: hoverColor,
    };
  }

  return (
    <button onClick={btnOnClick} style={styles}>
      {label || "Button"}
    </button>
  );
};

export default ProjectButton;
