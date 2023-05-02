import { Row, Col } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Transport", "Rent", "Food", "Utilities", "Entertainment"],
  datasets: [
    {
      label: "# of Votes",
      fontColor: "#ffffff",
      data: [12, 19, 3, 5, 3],
      backgroundColor: ["#00C48E", "#FBE432", "#D5B0E2", "#FAA875", "#00DEFF"],
      borderColor: ["#272727", "#272727", "#272727", "#272727", "#272727"],
      borderWidth: 5,
    },
  ],
};

function CategoryData() {
  return (
    <Row>
      <Col className="p-3">
        <Pie data={data} />
      </Col>
    </Row>
  );
}

export default CategoryData;
