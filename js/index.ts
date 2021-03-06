const label = document.getElementById("counter");
const label2 = document.getElementById("counter-label");
if (!label || !label2) throw new Error("Counter does not exist.");

const live = (new Date("2020-12-04")).getTime();
const now = Date.now();
const days = Math.floor((live - now) / 1000 / 60 / 60 / 24) + 1;

if (days < 1) {
	label.innerText = "TODAY";
	label2.innerText = "PREMIERING";
} else {
	label2.innerText= "PREMIERING in"
	label.innerHTML = `${days} Day`;
	if (days !== 1) {
		label.innerHTML = label.innerHTML + "s";
	}
}
