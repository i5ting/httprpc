module.exports = function a(p1,b){
    // console.dir(this.path)
    // console.dir(this.query)
    if (this.method === 'POST'){
        return "this is a post"
    }
    
    return `${p1}+${b}`
}