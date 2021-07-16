# ZoLib
## The first zombs.io script library

### features:
##### chat listener or chat command maker

### how to use

##### to start add a @require to the head of your tampermonkey script then add the following link 

```js
// ==UserScript==
// @name        ex
// @namespace   ex
// @match       http://zombs.io/
// @grant       none
// @version     ex
// @author      -
// @description ex
// @require     https://raw.githubusercontent.com/Xgod2205/ZoLib/main/ZoLib.js
// ==/UserScript==
```

##### next you can make the function here is an example to start

```js
// ==UserScript==
// @name        ex
// @namespace   ex
// @match       http://zombs.io/
// @grant       none
// @version     ex
// @author      -
// @description ex
// @require     https://raw.githubusercontent.com/Xgod2205/ZoLib/main/ZoLib.js
// ==/UserScript==

const ex = new addChatListener(function(), "!message", *) // start means everyone can use it if you leave it blank only you can use it

const function = () => {
  console.log("test")
}
```

