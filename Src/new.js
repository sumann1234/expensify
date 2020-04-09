
const eighteen= (a) =>{
    if(a<18){
        return 'Under Age'
    }
    else{
        return 'Just the right Age'
    }
};
 
const twt= (a) =>{
    if(a<21){
        return 'Under Age'
    }
    else{
        return 'Just the right Age'
    }
};

const senor= (s) =>{
    if(s>65){return 'Senior Citizen'}
    else {return 'Junior'}
}
export {eighteen, twt, senor as default};