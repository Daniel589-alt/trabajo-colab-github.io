document.addEventListener("DOMContentLoaded", function () {
    // Crear botón de modo oscuro
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Modo Oscuro";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "10px";
    toggleBtn.style.right = "10px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.background = "#ff9800";
    toggleBtn.style.border = "none";
    toggleBtn.style.color = "white";
    toggleBtn.style.fontSize = "16px";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.borderRadius = "5px";

    document.body.appendChild(toggleBtn);

    // Función para cambiar entre modo oscuro y claro
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "Modo Claro";
        } else {
            toggleBtn.textContent = "Modo Oscuro";
        }
    });

    // Agregar animación a la imagen del tigre
    const img = document.querySelector("#imagen img");
    if (img) {
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.1)";
            img.style.transition = "0.3s";
        });

        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)";
        });
    }
});