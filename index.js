const search = document.querySelector('#search');
search.addEventListener('click', () => {
    const value = document.querySelector('#city').value;
     alert("Hello User, a car has been sent to " + " " + value + " and will pick you up soon");
});