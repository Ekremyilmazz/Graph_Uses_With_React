export const LineChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Günler
  datasets: [
    {
      label: "Temperature (°C)", // Etiket: Sıcaklık
      data: [22, 24, 21, 19, 23, 25, 27], // Günlük sıcaklık verileri (°C)
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Humidity (%)", // Etiket: Nem oranı
      data: [65, 60, 55, 58, 63, 70, 75], // Günlük nem oranı verileri (%)
      borderColor: "rgb(133, 99, 255)",
      backgroundColor: "rgb(133, 99, 255, 0.5)",
    },
  ],
};

export const BarChartData = {
  labels: ["Sedan", "SUV", "Truck", "Coupe", "Convertible", "Hatchback", "Van"], // Araba türleri
  datasets: [
    {
      label: "Max Speed (km/h)",
      data: [220, 190, 180, 240, 250, 200, 160], // Yeni veriler
      borderColor: [
        "rgba(255, 99, 132,1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(201, 203, 207, 1)",
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderWidth: 1,
    },
  ],
};

export const PieChartData = {
  labels: [
    "Apple",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Pineapple",
    "Watermelon",
  ], // Meyve türleri
  datasets: [
    {
      label: "Vitamin C Content (mg/100g)", // Etiket değiştirildi
      data: [4.6, 8.7, 53.2, 10.8, 58.8, 47.8, 8.1], // Vitamin C verileri
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: [
        "rgba(75, 192, 192, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(201, 203, 207, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 205, 86, 0.5)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const bubbleData = {
  datasets: [
    {
      label: "Bubble Dataset",
      data: [
        { x: 20, y: 30, r: 15 }, // x, y: nokta konumu, r: baloncuk büyüklüğü
        { x: 40, y: 60, r: 20 },
        { x: 70, y: 90, r: 10 },
        { x: 80, y: 40, r: 25 },
        { x: 90, y: 50, r: 30 },
      ],
      backgroundColor: "rgba(75, 192, 192, 0.6)", // Baloncuk rengini belirledik
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
    },
  ],
};

export const scatterData = {
  datasets: [
    {
      label: "Scatter Dataset",
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 30 },
        { x: 20, y: 40 },
        { x: 25, y: 50 },
        { x: 30, y: 60 },
      ],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

export const polarAreaData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [12, 19, 3, 5, 2],
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'],
      borderColor: ['red', 'blue', 'yellow', 'green', 'purple'],
      borderWidth: 1,
    },
  ],
};
