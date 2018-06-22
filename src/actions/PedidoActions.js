export const adicionaProduto = (produto) => {
    return {
        type: 'adiciona_produto',
        payload: produto
    }
}