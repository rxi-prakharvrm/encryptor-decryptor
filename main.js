let copy_encrypted_message = [];
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=[];',./~!@#$%^&*()_+{}:<>?` ";
let key =        "XzNlWeBgJhqDyVtKfUoMpCiAsRxZnLwEbGjHQdYvTkFuOmPcIaSr?><~:}{+_)(*&^%$#@!0987654321=-][';/.,` ";

function takeActualMessage() {
    let msg = document.getElementsByClassName("input_message")[0];
    let secret_message;
    secret_message = msg.value;
    let encrypted_message = [];
    for(let i = 0; i < secret_message.length; i++) {
        let position = characters.indexOf(secret_message[i]);
        let new_char = key[position];
        encrypted_message += new_char;
    }    
    copy_encrypted_message = encrypted_message;
    document.getElementsByClassName("output_message_container")[0].innerHTML = encrypted_message;
}

function takeEncryptedMessage() {
    let decrypted_message = [];
    for(let i = 0; i < copy_encrypted_message.length; i++) {
        let position = key.indexOf(copy_encrypted_message[i]);
        let new_char = characters[position];
        decrypted_message += new_char;
    }
    document.getElementsByClassName("output_message_container")[1].innerHTML = decrypted_message;
}

function pasteMessage() {
    let p_e_m = [];
    p_e_m = document.getElementsByClassName("output_message_container");
    document.getElementsByClassName("input_message")[1].value = p_e_m[0].innerHTML;
}