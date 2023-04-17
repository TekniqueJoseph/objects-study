
// const blogs = [
//     {title: 'Good Voice', likes: 30},
//     {title: 'Smooth Flow', likes: 50}
// ]

// console.log(blogs)

let user = {
    name: 'Butterfly',
    age: 50,
    email: 'mecca@thebronx.com',
    location: 'Kemet',
    blogs:[
        {title: 'Good Voice', likes: 30},
        {title: 'Smooth Flow', likes: 50}
    ],
    phrase1() {
        console.log('68 inches above sea level');
    },
    phrase2() {
        console.log('93 million miles above these devils')
    },
    logBlogs(){
        // console.log(this.blogs[1])
        console.log('This emcee is dope.')
        this.blogs.map(blog => {
            console.log(blog.title, blog.likes)
        })
    } 
}
// console.log(user)
// console.log(user.name)
// console.log(user.age)
// console.log(user['location'])
// user['name'] = 'Mecca'
// console.log(user['name'])
// console.log(typeof user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(user.blog[0])

// user.phrase1()
// user.phrase2()
// user.logBlogs()

// Math Object
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.7;
console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

// Random numbers