'use script';

// try {
//     console.log('normal');
//     console.log(a);
//     console.log('a');
// } catch (error) {
//     console.log(error.name);
//     console.log(error.mess);
//     console.log(error.stack);
// } finally {

// }

// console.log('still normal');


try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}

console.log('normal');