

export const dataAtual = (): string => {
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
    const ano = dataAtual.getFullYear();
    return(`${ano}-${mes}-${dia}`);

}

export const dataAtualParaExibir = (): string => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}-${mes}-${ano}`; // 15-06-2026
}

