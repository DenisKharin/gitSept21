// - Є масив :

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

//     Створити під кожен елемент окремий блок.
//     В цьому блоці, під кожну властивість,
//     та властивості внутрішніх об'єктів
//     створити свої окремі блок.
debugger;
usersList.forEach(item => {
    for (const key in item) {
        const itemDiv = document.createElement('div');
        itemDiv.style.width = '500px';
        itemDiv.style.border = '5px double black';
        itemDiv.style.borderRadius = '5px';
        itemDiv.style.boxSizing = 'border-box';
        itemDiv.style.backgroundColor = 'skyblue';
        itemDiv.style.fontWeight = 'bolder';
        itemDiv.style.color = 'darkblue';
        itemDiv.style.textAlign = 'center';
        itemDiv.style.textShadow = '1px 1px 2.5px snow';
        itemDiv.style.marginTop = '5px';


        const idDiv = document.createElement('div');
        idDiv.style.display = 'flex';
        idDiv.style.justifyContent = 'space-around';
        const idDivKey = document.createElement('div');
        idDivKey.style.width = '200px';
        idDivKey.style.border = '1px solid red';

        const idDivValue = document.createElement('div');
        idDivValue.style.width = '280px';
        idDivValue.style.border = '1px solid red';
        idDivKey.innerText = key;
        idDivValue.innerText = item.id;
        idDiv.append(idDivKey, idDivValue);

        const nameDiv = document.createElement('div');
        nameDiv.style.display = 'flex';
        nameDiv.style.justifyContent = 'space-around';
        const nameDidKey = document.createElement('div');
        nameDidKey.style.width = '200px';
        nameDidKey.style.border = '1px solid red';
        // nameDidKey.innerText = key;
        const nameDivValue = document.createElement('div');
        nameDivValue.style.width = '280px';
        nameDivValue.style.border = '1px solid red';
        nameDivValue.innerText = item.name;
        nameDiv.append(nameDidKey, nameDivValue);

        const usernameDiv = document.createElement('div');
        usernameDiv.style.display = 'flex';
        usernameDiv.style.justifyContent = 'space-around';
        const userDidKey = document.createElement('div');
        userDidKey.style.width = '200px';
        userDidKey.style.border = '1px solid red';
        // userDidKey.innerText = key;
        const userDivValue = document.createElement('div');
        userDivValue.style.width = '280px';
        userDivValue.style.border = '1px solid red';
        userDivValue.innerText = item.username;
        usernameDiv.append(userDidKey, userDivValue);

        const emailDiv = document.createElement('div');
        emailDiv.style.display = 'flex';
        emailDiv.style.justifyContent = 'space-around';
        const emailDidKey = document.createElement('div');
        emailDidKey.style.width = '200px';
        emailDidKey.style.border = '1px solid red';
        // emailDidKey.innerText = key;
        const emailDivValue = document.createElement('div');
        emailDivValue.style.width = '280px';
        emailDivValue.style.border = '1px solid red';
        emailDivValue.innerText = item.email;
        emailDiv.append(emailDidKey, emailDivValue);


        const phoneDiv = document.createElement('div');
        phoneDiv.style.display = 'flex';
        phoneDiv.style.justifyContent = 'space-around';
        const phoneDidKey = document.createElement('div');
        phoneDidKey.style.width = '200px';
        phoneDidKey.style.border = '1px solid red';
        // phoneDidKey.innerText = key;
        const phoneDivValue = document.createElement('div');
        phoneDivValue.style.width = '280px';
        phoneDivValue.style.border = '1px solid red';
        phoneDivValue.innerText = item.phone;
        phoneDiv.append(phoneDidKey, phoneDivValue);

        const siteDiv = document.createElement('div');
        siteDiv.style.display = 'flex';
        siteDiv.style.justifyContent = 'space-around';
        const siteDidKey = document.createElement('div');
        siteDidKey.style.width = '200px';
        siteDidKey.style.border = '1px solid red';
        // siteDidKey.innerText = key;
        const siteDivValue = document.createElement('div');
        siteDivValue.style.width = '280px';
        siteDivValue.style.border = '1px solid red';
        siteDivValue.innerText = item.website;
        siteDiv.append(siteDidKey, siteDivValue);

        itemDiv.append(idDiv, nameDiv, usernameDiv, emailDiv, phoneDiv, siteDiv);
        document.body.appendChild(itemDiv);
    }
})
