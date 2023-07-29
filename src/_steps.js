/* 
------------------------------
Basic context api setup
---------------------------
1. context api: Share auth states with other components (across the application)
2. crate a UserContext
3. context provider with passed children
4. Set the UserContext in index.js.
5. to consume the context: export the AuthContext from UserContext
6. Now at the header or Home () or anywhere else: use useContext hook to get the info in the context
*/

/* 
Auth integration
1. use get auth by passing data from firebase config
2. create a function named createUser to return createUserWithEmailAndPassword
*/