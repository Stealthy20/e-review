import Container from "react-bootstrap/Container";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <h1>Home Page</h1>
              // <ReviewsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/saved"
            render={() => (
              <h1>Saved Reviews</h1>
              // <ReviewsPage
              //   message="No results found. Adjust the search keyword or follow a user."
              //   filter={`owner__followed__owner__profile=${profile_id}&`}
              // />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          {/* <Route exact path="/posts/create" render={() => <PostCreateForm />} /> */}
          {/* <Route exact path="/posts/:id" render={() => <PostPage />} /> */}
          {/* <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} /> */}
          {/* <Route exact path="/profiles/:id" render={() => <ProfilePage />} /> */}
          {/* <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          /> */}

          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
