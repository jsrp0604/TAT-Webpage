const btnPlantillas = document.getElementById("btnPlantillas");
const btnManual = document.getElementById("btnManual")

const filePlantillas = "laminas-tat.pdf";
const fileManual = "TAT-Manual-de-aplicacion.pdf"; 

addDownloadLink(btnPlantillas, filePlantillas);
addDownloadLink(btnManual, fileManual);

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
