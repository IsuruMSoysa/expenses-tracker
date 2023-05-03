import { Row, Col } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

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
  // const [dataObject, setDataObject] = useState({
  //   labels: ["Transport", "Rent", "Food", "Utilities", "Entertainment"],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       fontColor: "#ffffff",
  //       data: [0, 0, 0, 0, 0],
  //       backgroundColor: [
  //         "#00C48E",
  //         "#FBE432",
  //         "#D5B0E2",
  //         "#FAA875",
  //         "#00DEFF",
  //       ],
  //       borderColor: ["#272727", "#272727", "#272727", "#272727", "#272727"],
  //       borderWidth: 5,
  //     },
  //   ],
  // });

  useEffect(() => {
    // let chartObjCpy = { ...dataObject };
    chartObjCpy.datasets[0].data = chartData.categoryArray;
    //chartData.categoryArray;
    //setDataObject(chartObjCpy);
    console.log("chatdata", chartData);
  }, [chartData]);

  // useEffect(() => {
  //   let newData = [
  //     chartData.transport,
  //     chartData.rent,
  //     chartData.food,
  //     chartData.utilities,
  //     chartData.entertainment,
  //   ];

  //   let chartObjCpy = { ...dataObject };
  //   chartObjCpy.datasets[0].data = newData;

  //   setTimeout(() => {
  //     setDataObject(chartObjCpy);
  //   }, 0);
  // }, [chartData, dataObject]);

  return (
    <Row>
      <Col className="chart-cont">
        <Pie data={chartObjCpy} redraw="true" />
      </Col>
    </Row>
  );
}

export default CategoryData;
