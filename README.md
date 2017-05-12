# Inferno animations with animate.css

<img src="https://cloud.githubusercontent.com/assets/6027060/25237321/4f1a39fa-25b8-11e7-8269-1743f8b8552e.gif"/>

#### [Online Demo](https://kurdin.github.io/inferno-animate-css)

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save inferno-animate-css
    $ npm install --save animate.css

## Run Demo

    $ git clone https://github.com/kurdin/inferno-animate-css
    $ cd inferno-animate.css
    $ npm install 
    $ npm run demo

Open browser in http://localhost:8080

## Notes

You need to install and require animate.css yourself.

This way you may have a small css build, importing just the animations you need.

Or you can create your own animations, use another library... This is a very small package, you should take a look at source.


## Usage

```js
import Animate from 'inferno-animate-css'

import 'animate.css/animate.css'  // you need to require the css somewhere

// animate list, dont forget to add unique key to each item, don't use array index!!!
<Animate
    enter="bounceIn" // on Enter animation
    leave="bounceOut" // on Leave animation
    appear="fadeInRight" // on element Appear animation (onMount)
    change="flipInX" // on element Change animation (onUpdate)
    durationAppear={1000}
    durationEnter={1000}
    durationLeave={1000}
    durationChange={1000}
    animate={true|false|expression} // turn off/on animation, true by default
    animateChangeIf={true|false|expression} // turn off/on Change only animation, true by default
    component="ul">

    {this.state.items.map(item => <li key={item.id}>{item.name}</li>)}

</Animate>
// or animate single element / component

<Animate
    appear="fadeInDown"
    durationAppear={1000}
    component="div" >

  <h1>inferno animate.css</h1>

</Animate>
```

based on https://github.com/thiagoc7/react-animate.css

## inferno alternative velocity js animations

Here is another good but more complex (but flexible) alternative to create animations for inferno js components. If you want create custom animations with more control and a lot of options, you can try velocity js based animations:

https://github.com/kurdin/velocity-inferno
