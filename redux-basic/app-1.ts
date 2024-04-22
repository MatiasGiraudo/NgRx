//Acciones
interface Action {
    type: string;
    payload?: any;
}


function reducer(state = 10, action: Action) {

    switch (action.type) {
        case "INCREMENTAR":
            return state += 1;
        case "DECREMENTAR":
            return state -= 1;
        case "MULTIPLICAR":
            return state * action.payload;
        case "DIVIDIR":
            return state / action.payload;
        default:
            return state;
    }
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 5
};

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};



console.log(reducer(20, incrementadorAction));
console.log(reducer(20, decrementadorAction));
console.log(reducer(20, multiplicadorAction));
console.log(reducer(20, dividirAction));