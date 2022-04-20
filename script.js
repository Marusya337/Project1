let isRevert = false;
document.querySelector('button').addEventListener( 'click', function () {
    if(isRevert) {
        document.body.classList.remove('revert');
    } else {
        document.body.classList.add('revert');
    }
    isRevert = !isRevert;
});