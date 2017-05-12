# Inferno outside click handler component

If many cases when working with UI elements on the page, you need to handle outside click on your component to make sure you can set correct focus or close elements dropdown, etc.

This wrapper component takes care of clicking outside of childs and will trigger function passed to it as prop.


## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save inferno-outside-click-handler

## Options


```js 
<OutsideClickHandler
component="div" // can be any HTML element used as wrapper (default: 'div')
onOutsideClick={ handleClickOutside } // pass function to trigger then outside click detected.
ignoreClass: 'ignore-onclickoutside' // pass className that ignore triggering outside function.
</OutsideClickHandler>
```


## Usage

```js
import  OutsideClickHandler from 'inferno-outside-click-handler';

function handleClickOutside() {
    // set state to close drop down
    setState({ dropDownClose: true });
    // or call function to close it
    DropDownClose();
}

...
<OutsideClickHandler component="div" onOutsideClick={ handleClickOutside }>          
    <DropDownTrigger/>
    <DropDownMenu/>
</OutsideClickHandler>
...
```
