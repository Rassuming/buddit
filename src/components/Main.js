import React from 'react';
import AddBuddit from './AddBuddit'
import './components.css'
import './main.css'

let commentsToAddTo = -1;

// const Main = ({match:{params}, buddits, upVote, downVote, dispatch}) =>{
//      return (
//
//           <div>
//               {<div>{buddits.length}</div> }
//               {
//                   buddits.map(buddit=>
//                   <div  key={buddit.id} >
//                      <div className='hold-buddit'>
//                          <div className="c1">
//                              <button onClick={()=>(upVote(buddit.id))}>+</button>
//                              <p>{buddit.score}</p>
//                              <button onClick={()=>(downVote(buddit.id))}>-</button>
//                          </div>
//                          <div className="c2">
//                              <p>image</p>
//                          </div>
//                          <div className="c3">
//                              <p>{buddit.title}</p>
//                              <p>submitted on {buddit.date} by {buddit.username}</p>
//                              <p>{buddit.comments.length} comments</p>
//                              <button onClick = {()=>commentsToAddTo=buddit.id}>ADD COMMENT</button>
//                          </div>
//                       </div>
//                       {
//                          commentsToAddTo==buddit.id?(
//                                  <div>
//                                      add your cooments here
//                                </div>
//                              )
//                          :""
//                       }
//
//                      </div>
//                   )
//               }
//               <AddBuddit name={params.login} />
//               <p>You are logged in as {params.login}</p>
//           </div>
//       )
//   }

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            commentsToAddTo: -1,
            showCommentsFor: -1,
            commentToComment: 'null'
        }
    }

    loadComments = (holdComments, a, budditId, holdIndex) => {
        a += 1;

        let res = "";
        let subComment;
        if (holdComments.length > 0) {
            subComment = holdComments.map((comment, index) => {
                holdIndex += index;
                let nowKey = 'c-' + a + "-" + index + "-" + holdIndex;
                res = (
                    <div id={nowKey} key={nowKey}>
                        <span className="highlight-username">{comment.author}:</span> {comment.text}
                        <span
                            className='to-bold pointable  text-btn'
                            onClick={() => {
                                this.setState({commentToComment: nowKey})
                            }}
                        > reply </span>
                        {
                            this.state.commentToComment === nowKey ?
                                (
                                    <div>
                                        <form onSubmit={
                                            (e) => {
                                                let input = document.getElementById("comment-to-comment");
                                                e.preventDefault();
                                                if (!input.value.trim()) {
                                                    return
                                                }
                                                this.props.commentToComment(budditId, {
                                                    text: input.value,
                                                    sub: [],
                                                    author: this.props.match.params.login
                                                }, nowKey);
                                                input.value = '';
                                                this.setState({commentToComment: 'null'});
                                            }
                                        }>
                                            <input id="comment-to-comment"/>
                                            <button>SUBMIT</button>
                                            <button onClick={() => {
                                                this.setState({commentToComment: 'null'})
                                            }}>CANCEL
                                            </button>
                                        </form>
                                    </div>
                                )
                                : ""
                        }
                        <div className='sub-comment'>
                            {this.loadComments(comment.sub, a, budditId, holdIndex)}
                        </div>

                    </div>
                )
                return res;
            })
        }
        return subComment;
    }

    render() {
        return (

            <div>
                {
                    this.props.buddits.map(buddit =>
                        <div className='buddit-body' key={buddit.id}>
                            <div className='hold-buddit'>
                                <div className="c1">
                                    <span className='pointable'
                                          onClick={() => (this.props.upVote(buddit.id, this.props.match.params.login))}>&#x25B2;</span>
                                    <p className='buddit-p'>{buddit.score}</p>
                                    <span className='pointable'
                                          onClick={() => (this.props.downVote(buddit.id, this.props.match.params.login))}>&#x25BC;</span>
                                </div>
                                {<img className='buddit-p' src={buddit.image} alt='no image'/>}
                                <div class="col-hor">
                                    <div className="c2">
                                        {
                                            buddit.image ?
                                                <img className='imag-stuff buddit-p' src={buddit.image}
                                                     alt='no image'/> :
                                                <p>no image</p>
                                        }

                                    </div>
                                    <div className="c3">
                                        <p className='buddit-p to-bold highlight-title'>{buddit.title}</p>
                                        <p className='buddit-p submitted'>submitted on {buddit.date} by <span
                                            className="highlight-username">{buddit.username}</span></p>
                                        <p className='buddit-p'>{buddit.comments.length} comments</p>
                                        <span className='to-bold text-btn pointable' onClick={() => {
                                            if (this.state.commentsToAddTo === buddit.id) {
                                                this.setState({commentsToAddTo: -1})
                                            }
                                            else {
                                                this.setState({
                                                    commentsToAddTo: buddit.id,
                                                    showCommentsFor: buddit.id
                                                })
                                            }
                                        }
                                        }
                                        >
                               Add comment</span>

                                        <span className='to-bold text-btn pointable' onClick={() => {
                                            if (this.state.showCommentsFor == buddit.id) {
                                                this.setState({showCommentsFor: -1})
                                            }
                                            else {
                                                this.setState({
                                                    showCommentsFor: buddit.id,
                                                    commentsToAddTo: -1
                                                })
                                            }
                                        }
                                        }
                                        >
                               Show comments</span>
                                    </div>
                                </div>
                            </div>
                            {

                                this.state.commentsToAddTo === buddit.id ? (
                                        <div>
                                            <form onSubmit={
                                                (e) => {
                                                    let input = document.getElementById("comment-adder");
                                                    e.preventDefault();
                                                    if (!input.value.trim()) {
                                                        return
                                                    }
                                                    this.props.addComment(buddit.id, {
                                                        text: input.value,
                                                        sub: [],
                                                        author: this.props.match.params.login
                                                    });
                                                    input.value = '';
                                                    this.setState({
                                                        showCommentsFor: buddit.id,
                                                        commentsToAddTo: -1
                                                    });
                                                }
                                            }>
                                                <input id="comment-adder"/>
                                                <button>SUBMIT</button>
                                                <button onClick={() => {
                                                    this.setState({
                                                        commentsToAddTo: -1
                                                    })
                                                }}>CANCEL
                                                </button>
                                            </form>
                                        </div>
                                    )
                                    : ""
                            }
                            {

                                this.state.commentsToAddTo === buddit.id || this.state.showCommentsFor === buddit.id ?
                                    this.loadComments(buddit.comments, 0, buddit.id, "")
                                    : ""

                            }
                        </div>
                    )
                }
                <AddBuddit name={this.props.match.params.login}/>
                <p className='buddit-p'>You are logged in as <span
                    className='to-bold  highlight-username'>{this.props.match.params.login}</span></p>
            </div>
        );
    }
}

export default Main;