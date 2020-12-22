import {createStore , combineReducers,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { Dishes} from './dishes';
import { Comments} from './comments';
import { Promotions} from './promotion';
import { Leaders} from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore=()=>{
    const store =createStore(
       combineReducers({
           dishes:Dishes,
           comments:Comments,
           leaders:Leaders,
           promotions:Promotions,
           ...createForms({//using this it will add the  useable function
               feedback:InitialFeedback  
           })
       }),
       applyMiddleware(thunk, logger)
    );
    return store;
} 