import { createStore } from 'vuex';
import auth from './modules/auth';
import user from './modules/user';
import videos from './modules/videos';
import coaches from './modules/coaches';

export default createStore({
  modules: {
    auth,
    user,
    videos,
    coaches
  }
});
