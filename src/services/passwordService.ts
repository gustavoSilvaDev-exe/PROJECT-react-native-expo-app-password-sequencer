export default function generateBatPass(){
    let password: string ='';
    let characters:string ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\|?!@#$%¨&*()_+-[]{}';
    let passwordLength=20;

    for(let i=0 ; i < passwordLength ; i++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return password;
}