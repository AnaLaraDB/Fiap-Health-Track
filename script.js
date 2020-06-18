var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
datasets: [{
label: "Calorias Queimadas",
data: [65, 59, 80, 81, 56, 55],
backgroundColor: [
'rgba(105, 0, 132, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "Calorias Consumidas",
data: [28, 48, 40, 19, 86, 27],
backgroundColor: [
'rgba(0, 137, 132, .2)',
],
borderColor: [
'rgba(0, 10, 130, .7)',
],
borderWidth: 2
},
{
label: "Horas de Caminhada",
data: [30, 28, 40, 42, 26, 20],
backgroundColor: [
'rgba(0, 137, 132, .2)',
],
borderColor: [
'rgba(0, 213, 132, .7)',
],
borderWidth: 2
}
]
},
options: {
responsive: true,
maintainAspectRatio: true
}
});