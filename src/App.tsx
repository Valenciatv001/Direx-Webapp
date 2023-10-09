import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './components/PrivateRoute';
import AuthForm from './components/form/authForm';
import CreatePostForm from './components/form/createPostForm';
import PostList from './components/posts/PostList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <AuthForm type="login" />
          </Route>
          <Route exact path="/signup">
            <AuthForm type="signup" />
          </Route>
          <Route exact path="/reset-password">
            <AuthForm type="resetPassword" />
          </Route>
          <PrivateRoute exact path="/create-post">
            <CreatePostForm />
          </PrivateRoute>
          <Route exact path="/">
            <PostList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;