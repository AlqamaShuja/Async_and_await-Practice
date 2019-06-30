console.log('Before');

const user = getUser(1, getRepositries);

console.log('After');

function getRepositries(user){
    getRepositries(user.gitHubUserName, getCommits);
}

function getCommits(Repositries){
    getCommits(Repositries, displayCommit);    
}

function displayCommits(commit){
    console.log(commit);
}



function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from a database..');
        callback( { id: id, gitHubUserName: 'AlqamaShuja' } );
    }, 2000);

    return id;
}

function getRepositries(username, callback){
    setTimeout(()=>{
        console.log('Calling Github API for User: ', username);
        callback(['Repo1', 'Repo2', 'Repo3'])
    }, 2000)
}