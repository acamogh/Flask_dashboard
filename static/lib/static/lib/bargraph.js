var tempdatas = {date:['2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08'],value:[274,25,311,298,323,263,282,263,237,283,234,231,228,248,262,270,285,272,246,280]};

myApp.directive('barGraph', function($compile){
function link(scope, element, attr){
var payload = {};
//payload["jsondata"]  = "mindtree_phase1_3f_3";
payload["jsondata"] = selected_data_id;
var dataobj = {};
var datedata = [];
var valuedata = [];
var counter = 0;
var data = [];
if(showgraph == "true")
 $.ajax({
        url:"/mindtree/daily_energy",
        type:"POST",
        data:JSON.stringify(payload),
        //dataType:"application/json",
        contentType:"application/json",
        beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization",
                        'Basic ' + btoa("abinash.saikia@urjagreen.com"+ ':' + "123"));
        },
        success:function(res){
/*	$.each(res,function(i,ele){
                        dataobj[counter] = ele;
                        datedata = ele[0].position;
			valuedata= ele[1].position;		
          });*/
console.log("data------------");
console.log(res.val.jsondata);
console.log(res.val.jsondata.length);
console.log(res.val.jsondata[0].position);
console.log()
var parseDate = d3.time.format("%Y-%m-%d %H:%M:%S").parse;
/*
console.log("dataobj");
console.log(dataobj[0]);
console.log("datedata");
console.log(datedata);
console.log("valuedata");
console.log(valuedata);*/
for(var i=0;i<7;i++){
	var tmp = {};
	tmp.date = res.val.jsondata[0].position[i];
	tmp.value = res.val.jsondata[1].position[i];
	data.push(tmp);
	console.log("dsata-------------------------");
	//console.log(data);
}
console.log(data);
 /*$.each(dataobj,function(i,ele){
                ele[0].position.forEach(function(d){
                    d = parseDate(d);
                });
                ele[1].position.forEach(function(d){
                    d = +d;
                });
        });
*/

/*var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
*/
var margin = {top: 20,
                  right: 60,
                  bottom: 80,
                  left: 70},
     width = d3.select(".panel-body").style("width").replace(/[^-\d\.]/g, '') - (margin.left - margin.right)- margin.left - margin.right- margin.left - margin.right-margin.left - margin.right;
          height = (((d3.select(".panel-body").style("width").replace(/[^-\d\.]/g, ''))/2) -170) - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .04);

var y = d3.scale.linear()
    .range([height, 0]);


var svg = d3.select(element[0]).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(d3.time.format("%Y-%m-%d"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(7);
console.log("data====================");
console.log(data);
data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
    });

//d3.tsv("static/lib/data.tsv", type, function(error, datas) {
//  x.domain(data.map(function(d) { return d.letter; }));
 // y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
x.domain(data.map(function(d) { return d.date; }));
y.domain([0, d3.max(data, function(d) { return d.value; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

/*
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");
*/
 svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
.append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 0 - margin.left)
                  .attr("x",0 - (height / 2))
                  .attr("dy", "1em")
                  .attr("fill","black")
                  .attr("stroke-width",0)
                .attr("class","textsize")
                  .style("text-anchor", "middle")
                  .text("kWh");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });

//});

function type(d) {
  d.value = +d.value;
  return d;

}
}//end of success
});//end of ajax call
  }//end of link function

  return {
      link: link,
      restrict: 'E',
      scope: { controllerename: '=' , yaxislabelname: '=' , classname: '='}
  }//end of return

});
