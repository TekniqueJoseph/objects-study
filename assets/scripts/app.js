
let user = {
    name: 'Butterfly',
    age: 50,
    email: 'mecca@thebronx.com',
    location: 'Kemet',
    blogs:['Good Voice', 'Smooth Flow'],
    phrase1: function() {
        console.log('68 inches above sea level');
    },
    phrase2: function() {
        console.log('93 million miles above these devils')
    },
    logBlog: function(){
        // console.log(this.blogs[1])
        console.log('This emcee is dope.')
        this.blogs.map(blog => {
            console.log(blog)
        })
    } 
}
console.log(user)
// console.log(user.name)
// console.log(user.age)
// console.log(user['location'])
// user['name'] = 'Mecca'
// console.log(user['name'])
// console.log(typeof user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(user.blog[0])

user.phrase1()
user.phrase2()
user.logBlog()

// setTimeout (() => {
//     console.log('Waited 5 Seconds')
// }, 5000);

