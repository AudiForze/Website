function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

const text = `
            ¡Bienvenido!: 

            Soy conocido como Physco, conocido principalmente por mis proyectos y desarrollos como scripts y reverse shells para Windows, y por mi pasión por programar. No soy ningun experto en la informática pero me he destacado porque la misma ha sido como un refugio para mí desde los 6-7 años, cuando todo comenzó. Empece programando en Java durante mis primeros años, pero luego cambié a HTML y CSS mientras cursaba un programa de hardware llamado CS50. Fue entonces cuando conocí a Python, con quien sigo trabajando actualmente y quien me ha ayudado a mejorar en el mundo del pentesting, creando scripts de automatización. Actualmente hago todo lo que hago por pasion y si no es relacionado a esto no se hacer mas nada. Muchas info no? ...
        `;

        const terminalElement = document.getElementById('terminal');
        let index = 0;

        function writeText() {
            terminalElement.textContent += text[index++];
            if (index < text.length) {
                setTimeout(writeText, 10); 
            }
        }

        writeText();

         function isInView(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function addInViewClass() {
            const content = document.querySelector('.home-content');
            if (isInView(content)) {
                content.classList.add('in-view');
            }
        }

        addInViewClass();
        window.addEventListener('scroll', addInViewClass);
