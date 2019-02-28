export const addUser = (user)=>(
    {
        type: 'ADD_USER',
        payload: {
            name: user
        }
    }
)

let id = 0;
export const addBuddit = (title,image,date,username) => (
    {
        type: 'ADD_BUDDIT',
        payload: {
            id: id++,
            title: title,
            image: image,
            date: date,
            username: username
        }
    }
)

export const upVote = (id,name) => {
    return {
        type: 'VOTE_UP',
        payload:{
            id: id,
            name: name
        }
    }
}

export const downVote = (id,name) => (
    {
        type: 'VOTE_DOWN',
        payload:{
            id: id,
            name: name
        }
    }
)

export const addComment = (id,comment) => {
    return {
        type: 'ADD_COMMENT',
        payload:{
            id: id,
            comment: comment
        }
    }
}

export const commentToComment = (id,gotComment,key) => {
    return {
        type: 'ADD_SUB_COMMENT',
        payload:{
            id:id,
            gotComment:gotComment,
            key:key
        }
    }
}