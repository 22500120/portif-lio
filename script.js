document.addEventListener('DOMContentLoaded', () => {
    const lua = document.querySelector('#lua img');
    const estrela = document.querySelector('#estrela img');

    if (lua && estrela) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX / window.innerWidth) - 0.7;
            const mouseY = (e.clientY / window.innerHeight) - 0.9;

            // Move a lua e a estrela em direções/intensidades diferentes
            lua.style.transform = `translate(${mouseX * -40}px, ${mouseY * -40}px)`;
            estrela.style.transform = `translate(${mouseX * 30}px, ${mouseY * 25}px)`;
        });
    }
});
