function findCircumference(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI  * (2 * radius);
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var a = new circle(3);
console.log('Area =', a.area().toFixed(2));
console.log('perimeter =', a.perimeter().toFixed(2));













//do not change below, used for testing purposes
console.log(findCircumference(a));