<p align="center">
  <a href="#" style="
       display: inline-flex;
       flex-direction: column;
       align-items: center;
       text-decoration: none;
       color: inherit;
     ">
    <img src="https://raw.githubusercontent.com/ntsakosurprise/kotii/refs/heads/develop/packages/kotii-auth/kotii.svg" alt="Example">
    <strong style="font-size:50px; font-weight: 800">kotii-auth</strong>
  </a>
</p>

  <p align="center" style="font-size: 20px;"><strong style="font-size:22px; font-weight: 800; color: #B8FFD7">kotii-auth</strong> is a tiny authentication library that helps secure your app.</p>

# Description

kotii-auth is an authentication library that is made to help secure your app. Built to be a reliable guard of the protected areas of your application, it is currently built for use in the React ecosystem. It is intended to be as simple to use as possible, but powerful in handling security aspects of your app.

It currently uses the `context` api of the React framework to provide authentication mechanism that allows any part of your application access to auth related resources, such as the login and logout functions, authenticated user, etc.

Kotii-auth allows you the ability to register functions that you wish to run on various stages of an authentication workflow, such as when a user successfully login or logout.

# FEATURES OF KOTII-AUTH

- Login
- Logout
- Login/Logout subscription
- Error Handlers
- Redirects

# Installation

```
npm i kotii-auth

```

# Get Started

<strong style="font-size:18px; font-weight: 800; color: #D6B8FF">Your App:</strong>

`Wrapp your app in kotii-auth's AuthProvider component, passing an optional initial user(more useful in server renderd apps)`

```js
import { AuthProvider } from "kotii-auth"; // import AuthProvider from kotii-auth
import App from "./app";
const initialUser = null;

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AuthProvider authUser={initialUser}>
      <App />
    </AuthProvider>
  </StrictMode>
);
```

<strong style="font-size:18px; font-weight: 800; color: #D6B8FF">Your Login Component:</strong>

```js
import React, { useState } from "react";
import { Redirect, useNavigate } from "kotii-router";
import { useAuth } from "kotii-auth"; // import useAuth from kotii-auth
import { CONFIG } from "Config";

const Login = () => {
  const { user, login } = useAuth(); // get user object and login function from useAuth hook
  const navigate = useNavigate();
  const [isLoginError, setLoginError] = useState(false);
  const testUser = {
    action: "loginUser",
    payload: {
      name: "Ntsako Surprise",
      email: "testmail@gmail.com",
      sessionType: "express",
    },
  };
  let config = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testUser),
  };

  const logUserIn = (e) => {
    e.preventDefault();
    fetch(`${CONFIG.APP_URL}/loginUser`, config)
      .then((response) => {
        return response.json().then((user) => ({ user, response }));
      })
      .then(({ user: serverUser, response }) => {
        if (!serverUser?.actionStatus) return setLoginError(true);
        if (isLoginError) setLoginError(false);
        login(testUser); // Call Login function to set update user in AuthProvider
      });
  };
  if (user) return <Redirect to="/admin" />; // Redirect if user is already loginc
  return (
    <div>
      <p>Login Page</p>
      <button onClick={logUserIn}>Login</button>
      {isLoginError ? <p>There Was an error logging in</p> : null}
    </div>
  );
};

export default Login;
```

<strong style="font-size:18px; font-weight: 800; color: #D6B8FF">Your Authenticated Page:</strong>

```js
import { useAuth } from "kotii-auth"; // import useAuth hook from kotii-auth

const Admin = () => {
  const { user } = useAuth(); // Get User

  return (
    <p>
      Im the Admin page with user: {user?.name} With possible age: {user?.age}{" "}
      and time: {user?.timeNow}
    </p>
  );
};

export default Admin;
```

<strong style="font-size:18px; font-weight: 800; color: #D6B8FF">Your Logout Page:</strong>

```js
import { useAuth } from "kotii-auth";

const Logout = () => {
  const { logout } = useAuth(); // Get logout function from kotii-auth's useAuth hook

  const logUserOut = () => {
    logout(); // Clears user from AuthProvider and redirects to home page
  };

  return (
    <div>
      <p>Logout Page</p>
      <button onClick={logUserOut}>Logout</button>
    </div>
  );
};

export default Logout;
```

# Kotii-Auth API

## AuthProvider

AuthProvider is a wrapper component that mantains your login/logout state. It takes three optional props/arguments these are:

| Prop       | Required | Description                                         |   Type   |
| ---------- | -------- | --------------------------------------------------- | :------: |
| `authUser` | No       | Sets initial user(useful in server renderd apps)    |  Object  |
| `onLogin`  | No       | Sets a function that should run on successful login | Function |
| `onLogout` | No       | Sets a function that should run on logout           | Function |

### Example

```js
let myUser = null;
let onLogin = (user) => {
  console.log("My Logged In User");
};
let onLogout = () => {
  console.log("User is Logged out");
};
<AuthProvider authUser={initialUser} onLogin={onLogin onLogoug={onLogout}}>
  <App />
</AuthProvider>;
```

## registerOnLoginActions

registerOnLoginActions allows you to register

| argument    | Required | Description                       |   Type   |
| ----------- | -------- | --------------------------------- | :------: |
| `action(s)` | yes      | a list of actions to run on login | Function |

### Example

```js
import { registerOnLoginActions } from "kotii-auth";
import { useNavigate } from "kotii-router";
import { useEffect } from "react";

export function RedirectAfterLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const unregister = registerOnLoginActions(() => {
      navigate("/dashboard");
    });

    return unregister;
  }, []);

  return null;
}
```

## registerOnLogoutActions

registerOnLogoutActions allows you to register an action that will be run when a user logs out of an app.

| argument    | Required | Description                        |   Type   |
| ----------- | -------- | ---------------------------------- | :------: |
| `action(s)` | yes      | a list of actions to run on logout | Function |

### Example

```js
import { registerOnLogoutActions } from "kotii-auth";
import { useEffect } from "react";
import { queryClient } from "react-query";

export function ClearCacheOnLogout() {
  useEffect(() => {
    const unregister = registerOnLogoutActions(() => {
      queryClient.clear(); // clear cached on logout
    });

    return unregister;
  }, []);

  return null;
}
```

## useAuthRegisterActions

useAuthRegisterActions allows you to register functions that will run when a user logs in or logs out of the app. It is basically just a convenience hook to add login and logout actions on one go.

| argument   | Required | Description               |   Type   |
| ---------- | -------- | ------------------------- | :------: |
| `onLogout` | yes      | a action to run on login  | Function |
| `onLogout` | yes      | a action to run on logout | Function |

### Example

```js
import React from "react";
import { analytics } from "../analytics";
import { useRegisterAuthActions } from "kotii-auth";

export function AuthAnalytics() {
  useRegisterAuthActions({
    onLogin: (user) => analytics.track("login", { userId: user.id }),
    onLogout: () => analytics.track("logout"),
  });

  return null;
}
```

## useAuth

useAuth is a hook central to kotii-auth's authentication functionality, it returns things such as the function to login with

| Resource               | Type                             | Description                                                        | Example Usage                  |
| ---------------------- | -------------------------------- | ------------------------------------------------------------------ | ------------------------------ |
| `user`                 | `object \| null`                 | The authenticated user object, or `null` if logged out.            | `user?.name`                   |
| `isAuthenticated`      | `boolean`                        | Indicates whether a user is logged in.                             | `if (isAuthenticated) …`       |
| `login`                | `(credentials) => Promise<void>` | Function to authenticate a user. Sets `user`.                      | `login({ email, password })`   |
| `logout`               | `() => Promise<void>`            | Function to log the user out. Clears `user`.                       | `logout()`                     |
| `loading` _(optional)_ | `boolean`                        | Whether auth state is initializing or login/logout is in progress. | `if (loading) return spinner;` |
| `error` _(optional)_   | `string \| null`                 | Authentication error message.                                      | `if (error) showError(error);` |

### Example

```js
import React from "react";
import { useAuth } from "./useAuth";

export function UserInfo() {
  const { user = null } = useAuth();

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h3>Name, {user.name}!</h3>
      <p>Surname: {user.surname}</p>
    </div>
  );
}
```

# Questions & Support

For questions and support please use kotiijs's Suppport page on [Github repo](https://github.com/ntsakosurprise/kotii/tree/develop/packages/kotii-auth/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/kotii/tree/develop/packages/kotii-auth/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/kotii/tree/develop/packages/kotii-auth/CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/kotii/tree/develop/packages/kotii-auth/RELEASE_NOTES.md).

# Stay In Touch

[Twitter @kotiijs](https://x.com/kotiijs).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/kotii/tree/develop/packages/kotii-auth/CONTRIBUTING.md) before making a pull request. If you have a kotii-auth-related plugins, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/kotii/tree/develop/packages/kotii-auth/LICENSE.md) file for details.

copyright (c) 2025-present, iiprodatks. Ntsako (Surprise) Mashele
