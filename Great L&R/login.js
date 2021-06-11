const nunmber1 = document.querySelector('.emailbox');
const nunmber2 = document.querySelector('.passbox');
const submit = document.querySelector('#btn');
btn.addEventListener( 'click', function(event) {
    event.preventDefault();
    console.log(nunmber1.value);
    console.log(nunmber2.value);
})
