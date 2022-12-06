const filterBox = document.querySelectorAll('.box');
document.querySelector('.filters').addEventListener('click', event => {
    if (event.target.tagName != 'BUTTON') return false;

    let filterClass = getValue();
    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass != 'all'){
            elem.classList.add('hide');
        }
    });
});

function getValue() {
    var select = document.getElementById("select_1");
    var value = select.value;
	return value;
}
