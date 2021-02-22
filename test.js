function cat(){
    console.log('cat')
}
cat.prototype.getName=function(){
    return 'name'
}
new cat().getName