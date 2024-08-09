function toggleMenu() {
    var menu = document.querySelector('.menu');
    var isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
    if (!isOpen) {
        menu.classList.add('open');
    } else {
        menu.classList.remove('open');
    }
}

const text = `
            ¡Hi!: 

             I'm physco, I'm just a developer, hacker, and enthusiastic about business and technology
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
