const botao = document.getElementById("darkMode");

botao.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        botao.textContent = "🌙";
    } else {
        botao.textContent = "☀";
    }

});

function typeWriter(element, text, speed = 70) {
    let i = 0;
    element.textContent = ''; 
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    
    const elementoPrazer = document.querySelector('#prazer');
    
    if (elementoPrazer) {
        const textoOriginal = "PRAZER SAVIONE";
        typeWriter(elementoPrazer, textoOriginal, 100);
    }
});

function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.textContent = ''; 
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const elementoSobreMim = document.querySelector('#sobremim');
    
    if (elementoSobreMim) {
        typeWriter(elementoSobreMim, "//SOBRE MIM", 80);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    const elementoPrazer = document.querySelector('#projecttxt');
    
    if (elementoPrazer) {
        const textoOriginal = "// PROJETOS //";
        typeWriter(elementoPrazer, textoOriginal, 100);
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // 2. Máscara e Validação de E-mail
    const campoEmail = document.getElementById('campo-email');
    const statusEmail = document.getElementById('status-email');
    const formulario = document.getElementById('formulario-contato');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    if (campoEmail) {
        function mascararEmail(valor) {
            let limpo = valor.toLowerCase();
            limpo = limpo.replace(/\s+/g, '');
            limpo = limpo.replace(/[^a-z0-9@._-]/g, '');

            const partes = limpo.split('@');
            if (partes.length > 2) {
                limpo = partes[0] + '@' + partes.slice(1).join('');
            }
            return limpo;
        }

        function eEmailValido(email) {
            const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            return regexEmail.test(email);
        }

        campoEmail.addEventListener('input', (e) => {
            const valorOriginal = e.target.value;
            const valorMascara = mascararEmail(valorOriginal);

            if (valorOriginal !== valorMascara) {
                e.target.value = valorMascara;
            }

            if (valorMascara.length === 0) {
                statusEmail.removeAttribute('data-estado');
                campoEmail.removeAttribute('data-validade');
            } else if (eEmailValido(valorMascara)) {
                statusEmail.textContent = 'E-mail válido';
                statusEmail.setAttribute('data-estado', 'valido');
                campoEmail.setAttribute('data-validade', 'valido');
            } else {
                statusEmail.textContent = 'E-mail incompleto';
                statusEmail.setAttribute('data-estado', 'invalido');
                campoEmail.setAttribute('data-validade', 'invalido');
            }
        });

        campoEmail.addEventListener('paste', () => {
            setTimeout(() => {
                campoEmail.value = mascararEmail(campoEmail.value);
            }, 0);
        });

        if (formulario) {
            formulario.addEventListener('submit', (evento) => {
                evento.preventDefault();
                const valorEmail = campoEmail.value.trim();

                if (!eEmailValido(valorEmail)) {
                    statusEmail.textContent = 'E-mail inválido!';
                    statusEmail.setAttribute('data-estado', 'invalido');
                    campoEmail.setAttribute('data-validade', 'invalido');
                    campoEmail.focus();
                    return;
                }

                mensagemSucesso.setAttribute('data-visivel', 'true');
                formulario.reset();
                statusEmail.removeAttribute('data-estado');
                campoEmail.removeAttribute('data-validade');

                setTimeout(() => {
                    mensagemSucesso.removeAttribute('data-visivel');
                }, 4000);
            });
        }
    }
});