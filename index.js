function receivesAFunction(Spy){
    Spy();
}

function returnsANamedFunction(){
    return function randomName(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}