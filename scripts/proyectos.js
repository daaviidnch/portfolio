    const hamburger = document.getElementById('hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('overlay');
  
    function toggleMenu() {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
document.addEventListener("DOMContentLoaded", () => {
    fetch('media/proyectos.json')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('proyectos-lista');
        data.forEach(proyecto => {
          const item = document.createElement('div');
          item.classList.add('project-item');
  
          item.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
            <div class="project-details">
              <h2 class="project-title">${proyecto.nombre}</h2>
              <p class="project-description">${proyecto.descripcion}</p>
              <a class="project-link" href="${proyecto.link}" target="_blank">${proyecto.link}</a>
            </div>
          `;
  
          container.appendChild(item);
        });
      })
      .catch(error => {
        console.error('Error al cargar los proyectos:', error);
      });
  });
  