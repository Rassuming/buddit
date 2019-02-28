const users = (state = [],action) => {
    switch(action.type){
        case 'ADD_USER':
            let toAdd = false;
            state.map((user)=>{
                if(user.name = action.payload.name){
                    toAdd=true;
                    return;
                }
            })

            return toAdd?[
                ...state,
                {
                    name: action.payload.name
                }
            ]:
            state
        default:
            return state;
    }
}

export default users;