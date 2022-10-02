var tstBox = document.getElementById('testbox');
var tstBtn = document.getElementById('testbutton');

// tstBox.addEventListener('change', () => {
// if (tstBox.checked) {
//     console.log('test is checked');
// }else {
//     console.log('test is unchecked');
// }

// });


tstBtn.addEventListener('click', () =>{
if (tstBox.checked) {
    console.log('test is checked');
}else {
    console.log('test is unchecked');
}
});