const btnPlantillas = document.getElementById("btnPlantillas");
const btnManual = document.getElementById("btnManual");
const btnFicha = document.getElementById("btnFicha");
const btnEjNiño = document.getElementById("btnEjNiño");
const btnEjMujer = document.getElementById("btnEjMujer");
const btnEjHombre = document.getElementById("btnEjHombre");

const filePlantillas = "laminas-tat.pdf";
const fileManual = "TAT-Manual-de-aplicacion.pdf";
const fileFicha = "ficha-de-calificación-tat.xlsx";
const fileEjNiño = "adolescente-de-13-años.pdf";
const fileEjMujer = "caso-mujer-20-años.pdf";
const fileEjHombre = "caso-hombre-de-31-años.pdf";

addDownloadLink(btnPlantillas, filePlantillas);
addDownloadLink(btnManual, fileManual);
addDownloadLink(btnFicha, fileFicha);
addDownloadLink(btnEjNiño, fileEjNiño);
addDownloadLink(btnEjMujer, fileEjMujer);
addDownloadLink(btnEjHombre, fileEjHombre);

function addDownloadLink(btn, file)   {
    btn.addEventListener("click", () => {
        const fileURL = `files/${file}`;
        const a = document.createElement("a");
    
        fetch(fileURL)
            .then(response => response.blob())
            .then(blob => {
                const downloadURL = URL.createObjectURL(blob);
    
                a.href = fileURL;
                a.download = `${file}`;
                a.style.display = "none";
    
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
    
                URL.revokeObjectURL(downloadURL);
            })
            .catch(error => console.error("Falló la descarga", error));
    });
}
