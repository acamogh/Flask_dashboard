//var tempdatas = {date:['2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08'],value:[274,25,311,298,323,263,282,263,237,283,234,231,228,248,262,270,285,272,246,280]};
myApp.directive('lineplotGraph', function($compile){
  var scope = angular.element($("body")).scope();
  var data_id = null;

  function link(scope, element, attr){

    function consumption_reset(){
        console.log("meter_reset");
        angular.element($("body")).scope().setDashboardMenu(1);
        data_id = angular.element($("body")).scope().getDataIdentifier();
        consumption_reset_graph($compile,scope);
    }
    function cost_reset(){
        console.log("meter_reset");
        angular.element($("body")).scope().setDashboardMenu(1);
        data_id = angular.element($("body")).scope().getDataIdentifier();
        consumption_reset_graphs($compile,scope);
    }
    function resize(){
  
    }
    
    d3.select(window).on('resize', resize);
    d3.select("#summary_go_btn").on("click", consumption_reset);
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
        console.log("len of date is"+tempdata.date.length);
        console.log("len of val is"+tempdata.value.length);
        console.log(tempdata);
        var data = [];
      
      
      $('#loading-'+cstm_Id).css("display","block");
      var scope = angular.element($("body")).scope(); 
   
            for(var i=0;i<tempdata.date.length;i++){
              var tz = {};
              tz.date = tempdata.date[i];
              tz.value = tempdata.value[i];
              data.push(tz);
            } 
     
  
console.log(data);
var margin = {top: 20,
                  right: 60,
                  bottom: 60,
                  left: 60},
     width = d3.select(".panel-body").style("width").replace(/[^-\d\.]/g, '') - margin.left - margin.right;
       //   height = ((d3.select(".panel-body").style("width").replace(/[^-\d\.]/g, ''))/2) - margin.top - margin.bottom;
      height = 380 - margin.top - margin.bottom;

// Parse the date / time

var max_x = d3.max($.map(data, function(d) { return d.date; }));

var max_y = d3.max($.map(data, function(d) { return d.value; }));
var min_x = d3.min($.map(data, function(d) { return d.date; }));

var min_y = d3.min($.map(data, function(d) { return d.value; }));
var parseDate = d3.time.format("%Y-%m").parse;
var bisectDate = d3.bisector(function(d) { return d.date; }).left,
              formatValue = d3.format(",.2f"),
              formatCurrency = function(d) { return "$" + formatValue(d); }; 
    console.log("data is");
    console.log(data);
    console.log(max_x);
    /*var x1 = d3.scale.linear()
    .domain(d3.extent(data, function (d) {
        console.log(d.date);
            return (d.date);
        }))
        .range([0, width]);*/
        if((data.length == 100)){
         
             var x1 = d3.scale.linear()
                .domain([0,max_x])
                .range([0, width]);

                 var y1 =  d3.scale.linear()
                      .domain([0,max_y])
                    .range([height, 0]);
         
        }else{
        	if(yaxislabel == "Moisture Content,g/Kg dry air"){
			  var x1 = d3.scale.linear()
              .domain([14,(29)])
              .range([0, width]);
         var y1 =  d3.scale.linear()
            .domain([6,(13)])
            .range([height, 0]);

		}
		else{
			  var x1 = d3.scale.linear()
              .domain([0,(max_x+28)])
              .range([0, width]);
         var y1 =  d3.scale.linear()
            .domain([0,(100)])
            .range([height, 0]);

		}     
	 }
      

    var xAxis1 = d3.svg.axis()
            .scale(x1)
            .orient("bottom");

   /* var y1 =  d3.scale.linear()
    .domain(d3.extent(data, function (d) {
                return d.value;
            }))
            .range([height, 0]);*/

    

    var yAxis1 = d3.svg.axis()
            .scale(y1)
            .orient("left");

    data.forEach(function(d) {
        d.date = (d.date);
        d.value = +d.value;
    });

    data.sort(function(a, b) {
        return a.date - b.date;
    });

 

    var line1 = d3.svg.line()
            .x(function (d) {
                return x1(d.date);
            })
            .y(function (d) {
                return y1(d.value);
            });
   var svg1 = d3.select(element[0])
     .append("svg:svg")
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append("svg:g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg1.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxis1);
 
    svg1.append("g")
        .attr("class", "y axis")
        .call(yAxis1);

    svg1.append("g")
        .attr("clip-path", "url(#clip)");


    var graph1 = svg1.append("svg:path")
        .datum(data)
        .attr("class", "line4")
        .attr("d", line1);

      
var  ind = 0;
    /* var max_temp = svg1.selectAll("dot")
                    .data(data)
                    .enter().append("circle")
                    .filter(function(d,i) {return (1 == 1) })
                                      .style("fill", "red") 
                                      .attr('class', 'tooltip_marker')
                                      .attr("r", 5)
                                      .attr("cx", function(d) {console.log("datye is"+data[ind].date); return x1( (data[ind].date) ); })
                                      .attr("cy", function(d) { ind++; console.log("i is"+y1(data[ind-1].value)); console.log(data); return y1(data[ind-1].value); });*/

var ashraepoly = [{"x":18 , "y":6.2},
	{"x":18 , "y":7.9},
        {"x":23 ,"y":10.5},
        {"x":27,"y":10.5},
	{"x":27 , "y":6.2}];


poly = [{"x":23.2 , "y":0},
	{"x":21.5 , "y":50},
        {"x":20.1 ,"y":100},
        {"x":25.3 ,"y":100},
	{"x":27.6 , "y":50},
        {"x":30.6,"y":0}];
if((data.length != 100) && (yaxislabel != "Moisture Content,g/Kg dry air") )

{
svg1.selectAll("polygon")
    .data([poly])
  .enter().append("polygon")
    .attr("points",function(d) { 
        return d.map(function(d) {console.log("date------->"+d.x); return [x1(d.x),y1(d.y)].join(","); }).join(" ");})
    .attr("fill","#75db1b")
    .attr("stroke","#75db1b")
    .attr("stroke-width",2);


            
}

if((data.length != 100) && (yaxislabel == "Moisture Content,g/Kg dry air") )
{
//alert("ashrae");
svg1.selectAll("polygon")
    .data([ashraepoly])
  .enter().append("polygon")
    .attr("points",function(d) { 
        return d.map(function(d) {console.log("date------->"+d.x); return [x1(d.x),y1(d.y)].join(","); }).join(" ");})
    .attr("fill","#75db1b")
    .attr("stroke","#75db1b")
    .attr("stroke-width",2);


            
}





if(yaxislabel == "Survey Rating"){
  

 var  poly2 = [{"x":0 , "y":10},
        {"x":0 ,"y":15},
        {"x":max_x ,"y":15},
        {"x":max_x,"y":10}];

svg1.selectAll("polygon")
    .data([poly2])
  .enter().append("polygon")
    .attr("points",function(d) { 
        return d.map(function(d) {console.log("date------->"+d.x); return [x1(d.x),y1(d.y)].join(","); }).join(" ");})
    .attr("fill","#22ee5b")
    .attr("stroke","#22ee5b")
    .attr("stroke-width",2);

var  poly3 = [{"x":0 , "y":15},
        {"x":0 ,"y":20},
        {"x":max_x ,"y":20},
        {"x":max_x,"y":15}];
svg1.selectAll("dot")
    .data([poly3])
  .enter().append("polygon")
    .attr("points",function(d) { 
        return d.map(function(d) {console.log("date------->"+d.x); return [x1(d.x),y1(d.y)].join(","); }).join(" ");})
    .attr("fill","#75db1b")
    .attr("stroke","#75db1b")
    .attr("stroke-width",2);


            

}

var datacount = data.length;
var analysis_count = 0;
var poly_light = [{"x":0,"y":240},
		{"x":0,"y":360},
		{"x":max_x,"y":360},
		{"x":max_x,"y":240},
];
svg1.selectAll("polygon")
.data([poly_light])
.enter().append("polygon")
.attr("points",function(d){
	return d.map(function(d){return [x1(d.x),y1(d.y)].join(","); }).join(" ");})
.attr("fill","#22ee5b")
.attr("strole","#22ee5b")
.attr("stroke-width",2);


 svg1.selectAll("dot")
        .data(data)
    .enter().append("circle")
    .filter(function(d,i) {if((d.value >= 240) &&(d.value <= 360 ) ){analysis_count++;} return (1 == 1); })
    .style("fill", "#00544b") 
        .attr("r", 5)
        .attr("cx", function(d) { return x1(d.date); })
        .attr("cy", function(d) { return y1(d.value); });


if(data.length == 100 && (yaxislabel == "Light Level")){
  var analysis_count_perc =( (analysis_count) / (datacount)) * 100;
var formatValue = d3.format(",.2f");
analysis_count_perc =  formatValue(analysis_count_perc);
    var xLabel = svg1.append("text")      // text label for the x axis
                  .attr("x", width/2 )
                  .attr("y",  80 )
                  .attr("class","KWlabel teztsize")
                  .style("text-anchor", "middle")
                  .attr("fill","black")
                  .attr("stroke-width",0)
                  .text(analysis_count_perc+"%");
}
if(data.length == 100 && (yaxislabel == "Survey Rating")){
var block1 = 0;var block2 = 0;
     var new_horizontal_band_data = data.filter(function(d) { if((d.value >= 10) && (d.value <= 15)) block1++;  return d });
  var new_horizontal_band_data_2 = data.filter(function(d) { if((d.value > 15) && (d.value <= 20)) block2++;  return d });

var analysis_count_perc =( (block1) / (datacount)) * 100;
var formatValue = d3.format(",.2f");
analysis_count_perc =  formatValue(analysis_count_perc);
var analysis_count_perc2 =( (block2) / (datacount)) * 100;
analysis_count_perc2 =  formatValue(analysis_count_perc2);



    var xLabel = svg1.append("text")      // text label for the x axis
                  .attr("x", width/2 )
                  .attr("y",40  )
                  .attr("class","KWlabel textsize")
                  .style("text-anchor", "middle")
                  .attr("fill","black")
                  .attr("stroke-width",0)
                  .text(analysis_count_perc+"%");
 var xLabel_2 = svg1.append("text")      // text label for the x axis
                  .attr("x", width/2 )
                  .attr("y", (height/2)-40  )
                  .attr("class","KWlabel textsize")
                  .style("text-anchor", "middle")
                  .attr("fill","black")
                  .attr("stroke-width",0)
                  .text(analysis_count_perc2+"%");


}

svg1.append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 0 - margin.left)
                  .attr("x",0 - (height / 2))
                  .attr("dy", "1em")
                  .attr("fill","black")
		.attr("class","textsize")
                  .attr("stroke-width",0)
                  .style("text-anchor", "middle")
                  .text(yaxislabel);
      var xLabl = svg1.append("text")      // text label for the x axis
                  .attr("x", width / 2 )
                  .attr("y",  height + margin.bottom )
                  .attr("class","KWlabl textsize")
                  .style("text-anchor", "middle")
                  .attr("fill","black")
                  .attr("stroke-width",0)
                  .text(xaxislabel);
console.log("analysis_count is"+analysis_count);

    var focus = svg1.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("r", 6.5);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em")
	.attr("class","textsize");

  svg1.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x1.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x1(d.date) + "," + y1(d.value) + ")");
    focus.select("text").text((d.value));
  }
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

