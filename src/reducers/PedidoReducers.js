const INITIAL_STATE = {

    produtos: []

}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'adiciona_produto'){
        produtos: INITIAL_STATE.produtos.push(action.payload)
    }
    return state;
}