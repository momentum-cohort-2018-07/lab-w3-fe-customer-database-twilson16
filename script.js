console.log('Write your code here!')
console.log('customers and moment are available to you.')

class Customers {
    constructor(name) {
      this.name = name;
      this.startDate = startDate;
    }
  
    getName = () => {
      return name[1][2]
    }

    getAddress = () => {
        return location
    }

    getPhoneNumber = () =>  {
        return 
    }

    getThumbnailPhoto = () =>  {
        return this.Thumbnail
    }
    
    getBirthdate = () =>  {
        return moment(dob).format('MMM Do, YYYY')
    }

    getCustomerSince = () => {
        return moment(registered).format('MMM Do, YYYY')
    }

    getEmail = () => {

    }
  }

  makeDOMNode = () => {
    let customerDiv = document.createElement(‘customerDiv’)
    customerDiv.classList.add('customerDiv')
    customerDiv.appendchild(customerDiv)
        

  }
  



//   var phoenix = new Employee("Phoenix Carter",
//                              new Date(2017, 8, 1))
  
//   phoenix.getFirstName()         // => Phoenix
//   Object.getPrototypeOf(phoenix) // => Employee {}

// In this homework, you will build a customer database using DOM 
// manipulation with JavaScript. You will get the customer data 
// via a JavaScript file included with this project (`customers.js`) 
// and format dates via a third-party library, [Moment.js]
// (http://momentjs.com/). You can also use other third-party libraries if you wish.

// The customers were generated using [RandomUser.me]
// (https://randomuser.me/), and so they contain a lot of data. 
// For our purposes, you will need their name, address, phone 
// numbers, thumbnail, birthdate, and the date they became a customer, 
// which is stored as `registered` in the data.

// ### Using classes

// Consider making a Customer class that takes one customer's 
// data (one element of the `customers` array). Some methods you 
// could implement:

//   * `getName()` - returns the full name, capitalized correctly
//   * `getAddress()` - returns the address, formatted correctly
//   * `makeDOMNode()` - return the entire DOM node, probably a 
// `div`, for displaying the customer