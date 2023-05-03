import { Row, Col } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InnrerLoading from "../common/InnerLoading";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartObjCpy = {
  labels: ["Transport", "Rent", "Food", "Utilities", "Entertainment"],
  datasets: [
    {
      label: "# of Votes",
      fontColor: "#ffffff",
      data: [0, 0, 0, 0, 0],
      backgroundColor: ["#00C48E", "#FBE432", "#D5B0E2", "#FAA875", "#00DEFF"],
      borderColor: ["#272727", "#272727", "#272727", "#272727", "#272727"],
      borderWidth: 5,
    },
  ],
};

function CategoryData() {
  const chartData = useSelector((state) => state.cards);
  const [shouldRedraw, setShouldRedraw] = useState(false);

  useEffect(
    () => {
      chartObjCpy.datasets[0].data = chartData.categoryArray;
      console.log("chatdata", chartData);
    },
    [chartData],
    []
  );

  useEffect(
    () => {
      const redrawTimeout = setTimeout(() => {
        chartObjCpy.datasets[0].data = chartData.categoryArray;
        setShouldRedraw(true);
        console.log("chatdata", chartData);
      }, 3000);
      return () => clearTimeout(redrawTimeout);
    },
    [chartData],
    []
  );

  return (
    <Row>
      <Col className="chart-cont">
        {shouldRedraw ? (
          <Pie data={chartObjCpy} redraw={shouldRedraw} />
        ) : (
          <InnrerLoading />
        )}
      </Col>
    </Row>
  );
}

export default CategoryData;
