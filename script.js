console.log('Write your code here!')
console.log('customers and moment are available to you.')

let titleDiv = document.createElement('h1')
titleDiv.innerText = 'Customer Database'
titleDiv.classList.add('titleDiv')
containerDiv.appendChild(titleDiv)

function titleCase(word) {
    return word[0].toUpperCase() + word.slice(1)
}

function capsEachWord (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function getStateAbbrev(state) {
    let statesObject = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District Of Columbia': 'DC',
    'Federated States Of Micronesia': 'FM',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Guam': 'GU',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Marshall Islands': 'MH',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Northern Mariana Islands': 'MP',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Palau': 'PW',
    'Pennsylvania': 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virgin Islands': 'VI',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
  }
    return statesObject[state]
  }

class Customer {
    constructor(customerInfo) {
        this.info = customerInfo
    }

    getThumbnailPhoto() {
        return this.info.picture.large
    }

    getName() {
        return titleCase(this.info.name.first) + ' ' + titleCase(this.info.name.last)
    }

    getAddress1() {
        return capsEachWord(this.info.location.street)
    }

    getAddress2() {
        return capsEachWord(this.info.location.city) + ', ' + getStateAbbrev(capsEachWord(this.info.location.state)) + ' ' + (this.info.location.postcode)
    }

    getPhoneNumber() {
        return this.info.phone
    }

    getBirthdate() {
        return "DOB: " + moment(this.info.dob).format('MMM D, YYYY')
    }

    getCustomerSince() {
        return "Customer since: " + moment(this.info.registered).format('MMM D, YYYY')
    }

    getEmail() {
        return this.info.email
    }

    makeDOMNode() {
        let customerDiv = document.createElement('div')
        customerDiv.classList.add('customerDiv')
        
        let photoDiv = document.createElement('img')
        photoDiv.src = this.getThumbnailPhoto()
        photoDiv.classList.add('photoDiv')
        customerDiv.appendChild(photoDiv)

        let nameH2 = document.createElement('h2')
        nameH2.innerText = this.getName()
        nameH2.classList.add('nameH2')
        customerDiv.appendChild(nameH2)

        let emailDiv = document.createElement('div')
        emailDiv.innerHTML = this.getEmail()
        emailDiv.classList.add('emailDiv')
        customerDiv.appendChild(emailDiv)

        let address1Div = document.createElement('div')
        address1Div.innerHTML = this.getAddress1()
        address1Div.classList.add('address1Div')
        customerDiv.appendChild(address1Div)

        let address2Div = document.createElement('div')
        address2Div.innerHTML = this.getAddress2()
        address2Div.classList.add('address2Div')
        customerDiv.appendChild(address2Div)

        let phoneDiv = document.createElement('div')
        phoneDiv.innerHTML = this.getPhoneNumber()
        phoneDiv.classList.add('phoneDiv')
        customerDiv.appendChild(phoneDiv)

        let birthdateDiv = document.createElement('div')
        birthdateDiv.innerHTML = this.getBirthdate()
        birthdateDiv.classList.add('birthdateDiv')
        customerDiv.appendChild(birthdateDiv)

        let registerDiv = document.createElement('div')
        registerDiv.innerHTML = this.getCustomerSince()
        registerDiv.classList.add('registerDiv')
        customerDiv.appendChild(registerDiv)

        return customerDiv
    }

}

let outputDiv = document.getElementById('containerDiv')
for (let customerInfo of customers) {
    let customer = new Customer(customerInfo)
    outputDiv.appendChild(customer.makeDOMNode())
}
