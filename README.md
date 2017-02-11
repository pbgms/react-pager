# react-simple-pager - Paging for React components

This is a simple React pagination component.

### Installation

`npm install react-simple-pager --save`

### Usage

```js
import Pager from 'react-simple-pager'
```


```js
<Pager
    itemCount={12}
    itemsPerPage={10}
    currentPage={1}
    changePage={()=>{}}
    theme="dark"
/>
```

### Props

**itemCount** - length of your array

**itemsPerPage** - amount of records in one page

**currentPage** - number of current page (starting from 1)

**changePage** - function to change current page in your React state

**theme** - dark or light


### License

*react-simple-pager* is available under MIT. See LICENSE for more details.

