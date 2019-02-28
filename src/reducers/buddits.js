let state2 = [];

function findUserInBuddit(buddit,name){
    let found = false;
    buddit.usersLiked.map(user=>{
        if(user==name){
            found=true;
            return
        }
    })
    return found;
}

function putCommentInComment(holder,gotComment,key,a,commentArr,holdIndex){
    a+=1;
    if(holder.length>0){
        holder.map((comment,index)=>{
            holdIndex+=index;
            let gotKey = 'c-'+a+'-'+index+'-'+holdIndex;
            if(a==1){
                commentArr.push(comment);
            }
            if(key==gotKey){
                commentArr[index].sub.push(gotComment);  
            }
            
            putCommentInComment(comment.sub,gotComment,key,a,commentArr[index].sub,holdIndex);
        })
    }
    return commentArr;
}


const buddits = (state = [],action) => {
    switch(action.type){
        case 'ADD_BUDDIT':
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.image,
                    date: action.payload.date,
                    username: action.payload.username,
                    comments: [],
                    score: 0,
                    usersLiked: []
                }
            ]
        case 'VOTE_UP': 
            state2 = [];
            //let found = findVotedBudditsInUser(action.payload.id,action.payload.name,state);
            
            state.map((buddit)=>{
                if(buddit.id==action.payload.id&&!findUserInBuddit(buddit,action.payload.name)){
                    buddit.score+=1;
                    buddit.usersLiked.push(action.payload.name)
                }
                state2.push(buddit);
            });
            return state2;
        case 'VOTE_DOWN':
            state2 = [];
            state.map((buddit)=>{
                if(buddit.id==action.payload.id&&!findUserInBuddit(buddit,action.payload.name)){
                    buddit.score-=1;
                    buddit.usersLiked.push(action.payload.name)
                }
                state2.push(buddit);
            });
            return state2;
        case 'ADD_COMMENT':
            state2=[];
            state.map((buddit)=>{
                if(buddit.id==action.payload.id){
                    buddit.comments.push(action.payload.comment);
                }
                state2.push(buddit);
            });
            return state2;
        case 'ADD_SUB_COMMENT':
            state2=[];
            state.map((buddit)=>{
                if(buddit.id==action.payload.id){
                    
                    buddit.comments = putCommentInComment(buddit.comments,action.payload.gotComment,action.payload.key,0,[],"");
                }
                state2.push(buddit);
            })
            return state2;
        default:
            return state;
    }
}

export default buddits;