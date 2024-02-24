const user={
    username: "demo@gmail.com",
    password: "demo123",
};
if(user.username =="demo@gmail.com" && user.password == "demo123"){
    console.log(`welcome ${user.username}`);
}
else{
    console.log("re-enter");
}