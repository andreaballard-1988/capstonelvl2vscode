on myprocessform(event) {
    event.preventdefault();
    const form = event.target;
    const mypasswordinput = form[0];
    const firstnameinput = form[1];
    const lastnameinput = form[2];
    const value = input.value;
    output('the password is ${value} <br>')
}