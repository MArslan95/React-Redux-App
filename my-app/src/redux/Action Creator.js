import * as ActionTypes from './ActionTypes';
// import { DISHES } from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';

// this fucntion create action object contain four parameter
export const addComment=(comment)=>({

    //type defining
    type:ActionTypes.ADD_COMMENT,
    //contain the data that need to be carried action in reducer function
    payload:comment
});

    export const postComment=(dishId,rating,author,comment)=> (dispatch) =>{
        const newComment={
            
                dishId:dishId,
                rating:rating,
                author:author,
                comment:comment
            
        }
        newComment.date= new Date().toISOString();
        return fetch(baseUrl + 'comments',{
            method:"POST",
            body:JSON.stringify(newComment),
            headers:{
                'Content-Type':'application/JSON'
            },
            credentials:'same-origin'
        })
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error= new Error('Error' + response.status+":"+ response.statusText); 
                error.response=response;
                throw error;
            }
        },
        //dont here anything form server 
        error=>{
            var errmsg=new Error(error.message);
            throw errmsg;
        })
        .then(response=>response.json())//call back function
        .then(response=> dispatch(addComment(response)))
        .catch(error=>{console.log('POST Comment',error.message) ; 
        alert('your Comment Could not be Posted\n Error:' +error.message);})
        
    }
//Fetch the dish  should be use to fetch the dish and use it as thunk
//this thunk dishptach 2 fucntions
export const fetchDishes= () => (dispatch) => {
    dispatch(dishesLoading(true));
    // setTimeout(()=>{
    //     dispatch(addDishes(DISHES))
    // },2000) add to communicate with the server now

        return fetch(baseUrl+'dishes')
        //handling errors and respose from the server
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error= new Error('Error' + response.status+":"+ response.statusText); 
                error.response=response;
                throw error;
            }
        },
        //dont here anything form server 
        error=>{
            var errmsg=new Error(error.message);
            throw errmsg;
        })
        .then(response=>response.json())//call back function
        .then(dishes =>dispatch(addDishes(dishes)))// another call back function
        .catch(error => dispatch(dishFailed(error.message)));
}
        export const dishesLoading= () =>({
        type:ActionTypes.DISHES_LOADING  
        });
//This Fucntion display the failed message for the dishes
export const dishFailed =(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
});
export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
});
//Fetching comments here
export const fetchComments= () => (dispatch) => {
    dispatch(dishesLoading(true));
   

        return fetch(baseUrl + 'comments')
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error= new Error('Error' + response.status+":"+ response.statusText); 
                error.response=response;
                throw error;
            }
        },
        //dont here anything form server 
        error=>{
            var errmsg=new Error(error.message);
            throw errmsg;
        })
        .then(response=>response.json())//call back function
        .then(comments =>dispatch(addComments(comments)))
        .catch(error=>dispatch(commentsFailed(error.message)));// another call back function
}
export const commentsFailed =(errmess)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errmess
});
export const addComments=(comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});

//Fetch the dish  should be use to fetch the PROMO and use it as thunk
//this thunk dishptach 2 fucntions
export const fetchPromos= () => (dispatch) => {
    dispatch(promosLoading(true));
    // setTimeout(()=>{
    //     dispatch(addDishes(DISHES))
    // },2000) add to communicate with the server now

        return fetch(baseUrl+'promotions')
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error= new Error('Error' + response.status+":"+ response.statusText); 
                error.response=response;
                throw error;
            }
        },
        //dont here anything form server 
        error=>{
            var errmsg=new Error(error.message);
            throw errmsg;
        })
        .then(response=>response.json())//call back function
        .then(promos =>dispatch(addPromos(promos)))// another call back function
        .catch(error=>dispatch(promosFailed(error.message)));
}
export const promosLoading= () =>({
  type:ActionTypes.PROMOS_LOADING 
});
//This Fucntion display the failed message for the dishes
export const promosFailed =(errmess)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:errmess
});
export const addPromos=(promos)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promos
});

//Featching Leaders here
export const leadersLoading= () =>({
    type:ActionTypes.LEADERS_LOADING
  });
  //This Fucntion display the failed message for the dishes
  export const leadersFailed =(errmess)=>({
      type:ActionTypes.LEADERS_FAILED,
      payload:errmess
  });
  export const addLeaders=(leaders)=>({
      type:ActionTypes.ADD_LEADERS,
      payload:leaders
  });
  export const fetchLeaders= () => (dispatch) => {
        dispatch(leadersLoading(true));
        return fetch(baseUrl+'leaders')
        //handling errors and respose from the server
            .then(response=>{
                if(response.ok){
                    return response;
                }
                else{
                    var error= new Error('Error' + response.status+":"+ response.statusText); 
                    error.response=response;
                    throw error;
                }
            },
            //dont here anything form server 
            error=>{
                var errmsg=new Error(error.message);
                throw errmsg;
            })
            .then(response=>response.json())//call back function
            .then(leaders =>dispatch(addLeaders(leaders)))// another call back function
            .catch(error => dispatch(leadersFailed(error.message)));
}

// import * as ActionTypes from './ActionTypes';
// import {baseUrl} from '../shared/baseUrl';
// import { actionTypes } from 'react-redux-form';

// export const addComment = ( comment) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: comment
// });

// export const postComment = (dishId, rating, author, comment) =>(dispatch) => {
//     const newComment = {
//         dishId:dishId,
//         rating:rating,
//         author:author,
//         comment:comment
//     }
//     newComment.date = new Date().toISOString();
    
//     return fetch(baseUrl + 'comments',{
//         method:'POST',
//         body:JSON.stringify(newComment),
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         credentials:'same-origin'
//     })
//         .then(response => {
//             if (response.ok) {
//                 return response;
//             } else {
//                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
//                 error.response = response;
//                 throw error;
//             }
//         },
//             error => {
//                 var errmess = new Error(error.message);
//                 throw errmess;
//             })
//             .then(response => response.json())
//             .then(response => dispatch(addComment(response)))
//             .catch(error => {console.log('Post comments', error.message)
//                 alert('Your comment could not be posted\nError' + error.message)});
// }

// export const fetchDishes = () => (dispatch) => {
//     dispatch(dishesLoading(true));

//     // setTimeout(() => {
//     //     dispatch(addDishes(DISHES));
//     // } , 2000);
//     return fetch(baseUrl + 'dishes')
//         .then(response => {
//             if (response.ok) {
//                 return response;
//             } else {
//                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
//                 error.response = response;
//                 throw error;
//             }
//         },
//             error => {
//                 var errmess = new Error(error.message);
//                 throw errmess;
//             })
//         .then(response => response.json())
//         .then(dishes => dispatch(addDishes(dishes)))
//         .catch(error => dispatch(dishesFailed(error.message)));
// }

// export const dishesLoading = () => ({
//     type:ActionTypes.DISHES_LOADING
// });

// export const dishesFailed = (errmess) => ({
//     type:ActionTypes.DISHES_FAILED,
//     payload:errmess
// });

// export const addDishes = (dishes) => ({
//     type:ActionTypes.ADD_DISHES,
//     payload:dishes
// });

// export const fetchComments = () => (dispatch) => {
//     return fetch(baseUrl + 'comments')
//         .then(response => {
//             if (response.ok) {
//                 return response;
//             } else {
//                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
//                 error.response = response;
//                 throw error;
//             }
//         },
//             error => {
//                 var errmess = new Error(error.message);
//                 throw errmess;
//             })
//         .then(response => response.json())
//         .then(comments => dispatch(addComments(comments)))
//         .catch(error => dispatch(commentsFailed(error.message)));
// };

// export const commentsFailed = (errmess) => ({
//     type:ActionTypes.COMMENTS_FAILED,
//     payload:errmess
// });

// export const addComments = (comments) => ({
//     type:ActionTypes.ADD_COMMENTS,
//     payload:comments
// });

// export const fetchPromos = () => (dispatch) => {

//     dispatch(promosLoading());

//     return fetch(baseUrl + 'promotions')
//         .then(response => {
//             if (response.ok) {
//                 return response;
//             } else {
//                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
//                 error.response = response;
//                 throw error;
//             }
//         },
//             error => {
//                 var errmess = new Error(error.message);
//                 throw errmess;
//             })
//         .then(response => response.json())
//         .then(promos => dispatch(addPromos(promos)))
//         .catch(error => dispatch(promosFailed(error.message)));
// }

// export const promosLoading = () => ({
//     type:ActionTypes.PROMOS_LOADING
// });

// export const promosFailed = (errmess) => ({
//     type:ActionTypes.PROMOS_FAILED,
//     payload:errmess
// });

// export const addPromos = (promos) => ({
//     type:ActionTypes.ADD_PROMOS,
//     payload:promos
// });

// export const fetchLeaders = () => (dispatch)=> {
//     dispatch( leadersLoading());

//     return fetch(baseUrl + 'leaders')
//         .then(response => {
//             if (response.ok) {
//                 return response;
//             }
//             else {
//                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
//                 error.response = response;
//                 throw error;
//             }
//         },
//             error => {
//                 var errmess = new Error(error.message);
//                 throw errmess;
//             })
//         .then(response=> response.json())
//         .then(leaders => dispatch(addLeaders(leaders)))
//         .catch(error => dispatch(leadersFailed(error.message)));
// }

// export const leadersLoading = () => ({
//     type:ActionTypes.LEADERS_LOADING
// });

// export const leadersFailed = (errmess) => ({
//     type:ActionTypes.LEADERS_FAILED,
//     payload:errmess
// });

// export const addLeaders = (leaders) => ({
//     type:ActionTypes.ADD_LEADERS,
//     payload:leaders
// });

// export const addFeedback = ( feedback) => ({
//     type: ActionTypes.ADD_FEEDBACK,
//     payload: feedback
// });

// export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) =>(dispatch) => {
//     const newFeedback = {
//         firstname:firstname,
//         lastname:lastname,
//         telnum:telnum,
//         email:email,
//         agree:agree,
//         contactType:contactType,
//         message:message
//     }
    
//     return fetch(baseUrl + 'feedback',{
//         method:'POST',
//         body:JSON.stringify(newFeedback),
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         credentials:'same-origin'
//     })
//         .then(response => {
//             if (response.ok) {
//                 return response;
//             } else {
//                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
//                 error.response = response;
//                 throw error;
//             }
//         },
//             error => {
//                 var errmess = new Error(error.message);
//                 throw errmess;
//             })
//             .then(response => response.json())
//             .then(response => {dispatch(addFeedback(response))
//              alert('Your Feedback Successfully Recorded !' + JSON.stringify(response) )
//             })
//             .catch(error => {console.log('Post comments', error.message)
//                 alert('Your comment could not be posted\nError' + error.message)});
// }