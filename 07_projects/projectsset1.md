# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code

## project 1

```javascript
console.log("hitesh")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
      case 'white':
        body.style.backgroundColor = e.target.id;
      case 'blue':
        body.style.backgroundColor = e.target.id;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
      default:
        console.log('he');
    }
  });
});

```