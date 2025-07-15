"https://docs.google.com/document/d/1RGmvSUbdRKi7EPRvTTWUkCTW1mqBZpulehT_RZ2WonY/edit?tab=t.0"


"Login Navigation App"
 Goal:
Build a simple React app with 3 pages using React Router:
Registration


Login


Home


Authentication state is managed with Context API, and user data is stored in LocalStorage.

App Requirements:
 Routes:
/register: User registers with a form (username & password)


/login: User logs in using saved credentials


/home: Welcome page (accessible only after login)



 Functionality:
Register Page


Input: username, password


Save both to localStorage


Redirect to /login


Login Page


Input: username, password


Check against localStorage


If correct:


Set isAuthenticated in Context to true


Redirect to /home


Else: Show alert (“Invalid credentials”)


Home Page


Display “Welcome, [username]!”


Show a Logout button → clears auth and redirects to /login




📂 Suggested Folder Structure:
src/
  context/
    AuthContext.js
  components/
    Register.js
    Login.js
    Home.js
  App.js
  index.js



