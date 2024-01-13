import { Client, Account, ID } from "appwrite";

function signup(email:string) {
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('659fc0110a68cb7f7b6f');               // Your project ID

    const account = new Account(client);

    const promise = account.create('[USER_ID]', 'email@example.com', '');

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });

};

function testing(){
    console.log("Testing complete");
}

module.exports.signupuser = signup;
// console.log("HI");