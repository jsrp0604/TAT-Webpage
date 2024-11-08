const btnPlantillas = document.getElementById("btnPlantillas");

btnPlantillas.addEventListener("click", () => {
    const fileURL = "img/laminas-tat.pdf";
    const a = document.createElement("a");

    fetch(fileURL)
        .then(response => response.blob())
        .then(blob => {
            const downloadURL = URL.createObjectURL(blob);

            a.href = fileURL;
            a.download = "laminas-tat.pdf";
            a.style.display = "none";

            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            URL.revokeObjectURL(downloadURL);
        })
        .catch(error => console.error("Falló la descarga", error));
});