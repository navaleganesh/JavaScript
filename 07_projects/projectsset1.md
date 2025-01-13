# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code

## project 1 solution   

```javascript
console.log("ganesh")

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



## Project 2 solution

```javascript

const form = document.querySelector('form');
//Below usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || height < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight ${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Normal Range ${bmi}</span>`;
    } else if (bmi >= 24.9) {
      results.innerHTML = `<span>Overweight ${bmi}</span>`;
    }
  }
});

```


## Project 3 solution

```javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
