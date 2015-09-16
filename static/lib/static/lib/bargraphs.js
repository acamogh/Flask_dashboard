//var tempdatas = {date:['2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08'],value:[274,25,311,298,323,263,282,263,237,283,234,231,228,248,262,270,285,272,246,280]};
var totaldataval = [1705817,1632398,1952330,2163296,2084729,1800449,1793126,1721000,1688046,1755653,1599002,1552443,1602176,1580486,1835228,1992926,1997162,1972428,1868536,1823170]
var  testdataval = [56257,61987,109491,352053,187567,194063,172817,83790,95931,75346,115380,94446,83204,108665,75600,124800,61943,177148,177530,158650]
myApp.directive('barGraph', function($compile){
  var scope = angular.element($("body")).scope();
  var data_id = scope.getDataIdentifier();

  function link(scope, element, attr){

    
    function cost_reset(){
        console.log("meter_reset");
        angular.element($("body")).scope().setDashboardMenu(1);
        data_id = angular.element($("body")).scope().getDataIdentifier();
        consumption_reset_graphs($compile,scope);
    }
    function resize(){
  
    }
    
    d3.select(window).on('resize', resize);
     d3.select("#summary_cost_go_btn").on("click", cost_reset);
    if( 1 != null){
      var controllerName = scope.controllerename;
      var yaxislabel  = scope.yaxislabelname;
      var xaxislabel  = scope.xaxislabelname;
      var cstm_Id = scope.classname;
    
       $.ajax({
        url:controllerName,
        type:"GET",
       // dataType:"json",       
      success:function(res){
        var tempdata = {};
        tempdata.date = res.date;
        tempdata.value = res.val;
        console.log(tempdata);
        var data0 = [];
        var data = [];
      var data2 = [];
	var perc_data = [];
for(var i =0;i<tempdata.value.length;i++){
	var tz4 = {};
	tz4.date = tempdata.date[i];
	tz4.value = ( (totaldataval[i]) / (tempdata.date[i]) )*100;
	perc_data.push(tz4);
}
      
      $('#loading-'+cstm_Id).css("display","block");
      var scope = angular.element($("body")).scope(); 
      if($("#yearfrom option:selected").val() == 0 ){
            for(var i=0;i<8;i++){
              var tz = {};
              var tz2 = {};
              var tz0 = {};
              tz0.date = tempdata.date[i];
              tz.date = tempdata.date[i];
              tz2.date = tempdata.date[i];
              tz0.value = totaldataval[i];
              tz.value = tempdata.value[i];
              tz2.value = testdataval[i];
              data0.push(tz0);
              data.push(tz);
              data2.push(tz2);
            } 
      }else{
          
          var yearsel = $("#yearfrom option:selected").val();
          var j= 0;
           for(var i=0;i<tempdata.date.length;i++){
            console.log(yearsel);
            if(i == 12)
              j= 0;
              var yearsliced = tempdata.date[i].slice(0,4);
              console.log("date split is"+yearsliced);
              if($("#monthMapId option:selected").val() > j && (yearsel == yearsliced ) )
             {/* var tz = {};
              tz.date = tempdata.date[i];
              tz.value = tempdata.value[i];
              data.push(tz);*/
              var tz = {};
              var tz2 = {};
              var tz0 = {};
              tz0.date = tempdata.date[i];
              tz.date = tempdata.date[i];
              tz2.date = tempdata.date[i];
              tz0.value = totaldataval[i];
              tz.value = tempdata.value[i];
              tz2.value = testdataval[i];
              data0.push(tz0);
              data.push(tz);
              data2.push(tz2);
            }
            j++;
            } 
      }
  
console.log(data);
var formatValue = d3.format(",.2f");
var margin = {top: 20,
                  right: 60,
                  bottom: 80,
                  left: 70},
     width = d3.select(".panel-body").style("width").replace(/[^-\d\.]/g, '') - margin.left - margin.right- margin.left - margin.right- margin.left - margin.right;
          height = (((d3.select(".panel-body").style("width").replace(/[^-\d\.]/g, ''))/2) + 200) - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.time.format("%Y-%m").parse;

var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);
//var y2 = d3.scale.linear().range([height, 0]);
var svg = d3.select(element[0]).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    
    .tickFormat(d3.time.format("%Y-%m"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(20);
    

/*var yAxis2 = d3.svg.axis()
    .scale(y2)
    .orient("right");*/
   



 data0.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
    });

    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
    });

     data2.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
    });
 
  x.domain(data0.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data0, function(d) { return d.value; })]);
  //y2.domain([0, d3.max(data2, function(d) { return d.value; })]);
  

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Value ($)");


svg.selectAll("bar")
      .data(data0)
    .enter().append("rect")
      .style("fill","9cff88")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
     
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });
 svg.selectAll("bar")
      .data(data2)
    .enter().append("rect")
      .style("fill", "yellow")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
     
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


  svg.selectAll("bar")
      .data(data)
    .enter().append("text")
      .style("fill", "yellow")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
     
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
	.text("..");
	
	svg.selectAll("bar")
	.data(data)
	.enter().append("text")
	.style("fill","black")
	.attr("class","textsize")
	.attr("x",function(d){ return x(d.date)+10;})
	.attr("width",x.rangeBand())
	.attr("y",function(d) {return ( y(d.value)*2);})
	.attr("height",function(d){return (height - y(d.value))/2;})
	.text(function(d,i){ return (formatValue((d.value/totaldataval[i])*100)+"%");});
 svg.selectAll("bar")
      .data(data2)
    .enter().append("rect")
      .style("fill", "#red")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
     
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });





/*svg.append("g")
      .attr("class", "y axis")
      .call(yAxis2)
      .attr("transform", "translate(" + width + " ,0)")  
    .append("text")
      
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Value ($)");*/

   svg.append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 0 - margin.left)
                  .attr("x",0 - (height / 2))
                  .attr("dy", "1em")
                  .attr("fill","#f0ad4e")
		.attr("class","opa")
                  .attr("stroke-width",0)
                  .style("text-anchor", "middle")
                  .text(yaxislabel);
      var xLabl = svg.append("text")      // text label for the x axis
                  .attr("x", width / 2 )
                  .attr("y",  height + margin.bottom )
                  .attr("class","KWlabl")
                  .style("text-anchor", "middle")
                  .attr("fill","#f0ad4e")
                  .attr("stroke-width",0)
                  .text(xaxislabel);
   }//end of success
 });//end of ajax
     }//end of null condition
  }//end of link function
  return {
      link: link,
      restrict: 'E',
      scope: { controllerename: '=' , yaxislabelname: '=' , xaxislabelname: '=', classname: '='}
  }//end of return
});//emd of  directive main function

