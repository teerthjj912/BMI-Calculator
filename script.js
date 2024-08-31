function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid values for height and weight.");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  document.getElementById("bmi-value").textContent = bmi;
  document.getElementById("result").style.display = "block";

  let status = "";
  let statusColor = "";

  if (bmi >= 14.5 && bmi < 18.5) {
    status = "Underweight";
    statusColor = "blue";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Normal weight";
    statusColor = "green";
  } else if (bmi >= 24.9 && bmi < 29.9) {
    status = "Overweight";
    statusColor = "orange";
  } else if (bmi >= 0 && bmi < 14.5) {
    status = "Malnutritioned";
    statusColor = "purple";
  } else {
    status = "Obese";
    statusColor = "red";
  }

  const statusElement = document.getElementById("bmi-status");
  statusElement.textContent = `You are ${status}.`;
  statusElement.style.color = statusColor;
}
