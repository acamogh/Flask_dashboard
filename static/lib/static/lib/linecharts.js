var parseDate = d3.time.format("%Y-%m-%d %H:%M:%S").parse;
function getDataIndex() {
  this.index = null; 
}
function getMyMonth(mymonth){
	var month_no = mymonth.getMonth();
	var monthnum = null;
	if(parseInt(month_no) == 0){
		monthnum = "Jan";
	}
	if(parseInt(month_no) == 1){
                monthnum = "Feb";
        }
	if(parseInt(month_no) == 2){
                monthnum = "Mar";
        }
	if(parseInt(month_no) == 3){
                monthnum = "Apr";
        }
	if(parseInt(month_no) == 4){
                monthnum = "May";
        }
	if(parseInt(month_no) == 5){
                monthnum = "June";
        }
	if(parseInt(month_no) == 6){
                monthnum = "July";
        }
	if(parseInt(month_no) == 7){
                monthnum = "Aug";
        }
	if(parseInt(month_no) == 8){
                monthnum = "Sep";
        }
	if(parseInt(month_no) == 9){
                monthnum = "Oct";
        }
	if(parseInt(month_no) == 10){
                monthnum = "Nov";
        }
	if(parseInt(month_no) == 11){
                monthnum = "Dec";
        }

	return monthnum;
}
function customBisectDate_call(data1,x0,obj){ 
  for(var i=0;i<data1.position.length;i++){
      if(i != ((data1.position.length)-1) )
      {
        if( (x0 < parseDate(data1.position[i]))  )
        {
          if((x0 > parseDate(data1.position[i+1]) )){
            obj.index = i;
            return false;
          }
        }
      }
      else
      {
        if( (x0 < parseDate(data1.position[i]))  ){
          obj.index = i;
          return false;
        }
      } 
  }//end of for loop
}/*
function meter_reset_graph(compile,scope){
	meter_graph = "true";
	showgraph = "true";
	 var tmp1 = "<line-chart controllerename=\"'mindtree/total_active_power'\"  yaxislabelname=\"'Total Active Power'\" classname=\"'g1'\"></line-chart>";
        $("#g1").empty();
        $("#g1").append(tmp1);
        compile("#g1")(scope);

}*/
function conditions_reset_graph(compile,scope){

      var floor = $("#floor_id").val();
	//meter_graph = "false";
      var counter = 0;
      var wing = $("#wing_id").val();
      var graphtype = $("#graph_type").val();
    var scope = angular.element($("#graphsection")).scope();
    var configObj = scope.getConfigInformation();
      $.each(floor_1_wing,function(index,ele){
      	if(wing == ele)
        counter = index;
      });
      if(configObj.func == "T"){
      	$(".hidehumidity").css("display","none");
        $(".hideco2").css("display","none");
        $(".hidetemp").css("display","block");

        var tmp1 = "<line-chart controllerename=\"'mindtree/temperature'\"  yaxislabelname=\"'Temperature'\" classname=\"'g1'\"></line-chart>";
        $("#g1").empty();
        $("#g1").append(tmp1);
        compile("#g1")(scope);
      }
      if(configObj.func == "T_H"){
               
      	$(".hidehumidity").css("display","block");
        $(".hideco2").css("display","none");
        $(".hidetemp").css("display","block");
        var tmp1 = "<line-chart controllerename=\"'mindtree/temperature'\"  yaxislabelname=\"'Temperature'\" classname=\"'g1'\" ></line-chart>";
        $("#g1").empty();
        $("#g1").append(tmp1);
        compile("#g1")(scope);
        var tmp2 = "<line-chart  controllerename=\"'mindtree/humidity'\" yaxislabelname=\"'Humidity'\" classname=\"'g2'\"></line-chart>";
        $("#g2").empty();
        $("#g2").append(tmp2);
        compile("#g2")(scope);
      }
      if(configObj.func == "CO2"){
               
      	$(".hidehumidity").css("display","none");
        $(".hidetemp").css("display","none");
        $(".hideco2").css("display","block");
        var tmp1 = "<line-chart controllerename=\"'mindtree/carbon_dioxide'\" yaxislabelname=\"'Carbon Dioxide'\" classname=\"'g3'\"></line-chart>";
        $("#g3").empty();
        $("#g3").append(tmp1);
        compile("#g3")(scope);
      } 
      if(configObj.func == "group"){
        $(".hidehumidity").css("display","none");
        $(".hideco2").css("display","none");
        $(".hidetemp").css("display","block");

        var tmp1 = "<line-chart controllerename=\"'mindtree/temperature'\"  yaxislabelname=\"'Temperature'\" classname=\"'g1'\"></line-chart>";
        $("#g1").empty();
        $("#g1").append(tmp1);
        compile("#g1")(scope);
      }
  
}
myApp.directive('lineChart', function($compile){
    //var scope = angular.element($("body")).scope();
    var scope = angular.element($("#conditioncontoller")).scope();
    var configObj = scope.getConfigInformation();
	//alert(scope.config_func);
// if(!(scope.config_func === undefined))

    function link(scope, element, attr){
        function conditions_reset(){
	    showgraph = "true";
            conditions_reset_graph($compile,scope);
    	}
/*
	function meter_reset(){
		showgraph = "true";
		meter_reset_graph($compile,scope);
	}*/
        function resize(){ }
    	d3.select(window).on('resize', resize);
    	d3.select("#conditions_go_btn").on("click", conditions_reset);
	//d3.select("#meter_go_btn").on("click", meter_reset);
        var controllerName = scope.controllerename;
        var yaxislabel  = scope.yaxislabelname;
        var floor_no  = configObj.floor;
        var payload = {};
	var sensor_name =[]; 
	var  cstm_Id = null;
        cstm_Id = scope.classname;
	/*if(meter_graph == "true"){
		payload["jsondata"] = ["mindtree_phase1_dieselshed_1"];
                sensor_name = ["left AHU room"];

	}*/
	//else{
	if(configObj.wing == "Left AHU"){
		if(floor_no == "1F"){
			payload["jsondata"] = ["1008","100d","100b","100a","1007","1006"];
			sensor_name = ["left AHU room","North west1","North west2","North west3","Soth1","South2"];
		}
		if(floor_no == "2F"){
			payload["jsondata"] = ["2003","2008","2007","2002"];
			sensor_name = ["Left AHU room","South2","South1","Agora North"];
		}
		if(floor_no == "3F"){
			payload["jsondata"] = ["3003","3007","3002"];
			sensor_name = ["Left AHU room","South","North"];
		}
		if(floor_no == "4F"){
			payload["jsondata"] = ["4003","4004","4006"];
			sensor_name = ["Left AHU room","South","North"];
		}
		if(floor_no == "LGF"){
			payload["jsondata"] = ["4","7","6"];
			sensor_name = ["Left AHU room","South Lobby","Cisco Lab"];
		}
	}	
	else if(configObj.wing == "Right AHU"){
                if(floor_no == "1F"){
                        payload["jsondata"] = ["1002","1009","1004","1003"];
                        sensor_name = ["Right AHU room","EPBAX Lab","Agora East","North"];
                }
                if(floor_no == "2F"){
                        payload["jsondata"] = ["2005","2004"];
                        sensor_name = ["Right AHU room","Switch room"];
                }
                if(floor_no == "3F"){
                        payload["jsondata"] = ["3004","3005"];
                        sensor_name = ["Right AHU room","North East"];
                }
                if(floor_no == "4F"){
                        payload["jsondata"] = ["4002","4005"];
                        sensor_name = ["Right AHU room","North East"];
                }
                if(floor_no == "LGF"){
                        payload["jsondata"] = ["3","2"];
                        sensor_name = ["Right AHU room","Switch room","LSI Lab"];
                }
        }

	else
        payload["jsondata"] = [configObj.sensorid];
	//}
        $('#loading-'+cstm_Id).css("display","block");//<img style = "margin:10% 40%;" src="static/lib/img/Fillingbrokenring.gif" alt="loading..."/>
        // $('#loading-'+cstm_Id).html('<img style = "margin:10% 40%;" src="static/lib/img/animate.gif" alt="loading..."/> ');
      if(showgraph == "true")  
      $.ajax({
        url:"/"+controllerName,
        type:"POST",
        data:JSON.stringify(payload),
        //dataType:"application/json",
        contentType:"application/json",
        beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", 
                        'Basic ' + btoa("abinash.saikia@urjagreen.com"+ ':' + "123"));
        },  
        success:function(res){
	  showgraph = "false";
	  var dataobj = {};
	  var datedata = null;
          var indexval = 0;
          var data;
	  var counter = 0;
	  var graph_legend = '';
	  var color_arr2 = ["#c44d58","#ff6b6b","#c7f464","#4ecdc4","#fad089","#556270"];
	  /*for(var i=0;i< payload["jsondata"].length;i++){
		graph_legend+='<div class="foo" style="background-color:'+color_arr2[i]+'"></div><label>'+sensor_name[i]+'</label>';
	  }*/
	var color_index = 0;
	  $.each(res,function(id,elem){
		//console.log("elem----------------");
		var scope = angular.element($("#graphsection")).scope();
		var conf_data = scope.getConfigRawData().data.data;
	  	//console.log(conf_data[0]["data_id"]);
		//console.log(elem[2]["sensor_name"]);	
		var sen_name = null;
		for(var j = 0;j<conf_data.length;j++){
			if(conf_data[j]["data_id"] == elem[2]["sensor_name"])
			sen_name = conf_data[j]["wing"];
		}
		//console.log("sen_name"+sen_name);
		graph_legend+='<div class="foo" style="background-color:'+color_arr2[color_index]+'"></div><label>'+sen_name+'</label>';
		color_index++;
	  });
	  $("#legend-"+cstm_Id).empty();
	   if($("#graph_type").val() == "group")
	  $("#legend-"+cstm_Id).append(graph_legend);
	  $.each(res,function(i,ele){
		if(counter == 0){
			dataobj[counter] = ele;
			datedata = ele[0];
		}
		else if(counter ==1)
			dataobj[counter] = ele;
		else if(counter == 2)
			dataobj[counter] = ele;
		else
			dataobj[counter] = ele;
		counter++;
	  });
	  var max_temp = [];
	  var min_temp = [];
          var max_temperature = null;
	  var min_temperature = null;
	   var parseDate = d3.time.format("%Y-%m-%d %H:%M:%S").parse;
          max_temperature = d3.max($.map(max_temp, function(d) { return d; }));	  
	  min_temperature = d3.min($.map(min_temp, function(d) { return d; }));
          var lineobj = {};
	  var obj_index = {};
          index_counter = 0;
	  $.each(dataobj,function(i,ele){
	  	max_temperature = d3.max($.map(ele[1].position, function(d) { return d; }));
          	min_temperature = d3.min($.map(ele[1].position, function(d) { return d; }));
		max_temp.push(max_temperature);
          	min_temp.push(min_temperature);
                ele[0].position.forEach(function(d){
                    d = parseDate(d);
                });
                ele[1].position.forEach(function(d){
                    d = +d;
                });
                lineobj[index_counter] = d3.svg.line()
                            .x(function (d,i) {
                                return x(parseDate(ele[0].position[i]));
                            })
                            .y(function (d,i) {
                                return y(ele[1].position[i]);
                            });
		obj_index[index_counter] = new getDataIndex();
                index_counter++;
	});
        max_temperature = d3.max($.map(max_temp, function(d) { return d; }));
        min_temperature = d3.min($.map(min_temp, function(d) { return d; }));
        function customBisectDate(data1,x0){     
            customBisectDate_call(data1,x0,obj);
        }
        var bisectDate = d3.bisector(function(d) { return d.date; }).left,
            formatValue = d3.format(",.1f"),
            formatCurrency = function(d) { return "$" + formatValue(d); };  
	var formatValue2 = d3.format(",.0f");
        var margin = {
                  top: 20,
                  right: 60,
                  bottom: 40,
                  left: 60
              };
        var width = d3.select(".panel-body-test").style("width").replace(/[^-\d\.]/g, '')- margin.left - margin.right;
	if(width >10){
	      globalwidth = width;
	}else
		width = globalwidth;
          // var height = ((d3.select(".panel-body").style("width").replace(/[^-\d\.]/g, ''))/2) - margin.top - margin.bottom;
        var height = null;
	if($("#graph_type").val() == "group")
	height = 500 - margin.top -margin.bottom;
	else
	height = 380 - margin.top -margin.bottom;
        var x = d3.time.scale()
                          .domain(d3.extent(datedata.position, function (d,i) {
                                return parseDate(d);
                          }))
                          .range([0, width]);
        //////alert("s"); 
        var y = d3.scale.linear()
                          .domain([min_temperature-1, max_temperature])
                          .range([height, 0]);
	var y1 = d3.scale.linear().domain([min_temperature-1, max_temperature]).range([height, 0]);
        var make_x_axis = function () {
                  return d3.svg.axis()
                  .scale(x)
                  .orient("bottom")
                  .ticks(5);
                };
        var make_y_axis = function () {
                  return d3.svg.axis()
                  .scale(y)
                  .orient("left")
                  .ticks(5);
              };
        var make_y_axis1 = function(){
			return d3.svg.axis()
			.scale(y1)
			.orient("right")
			.ticks(5);
		};
	var xAxis = d3.svg.axis()
                                .scale(x)
                                .orient("bottom")
                                .ticks(5);
        var yAxis = d3.svg.axis()
                                .scale(y)
                                .orient("left")
                                .ticks(5);
	var yAxis1 = d3.svg.axis()
				.scale(y1)
				.orient("right")
				.ticks(5);
        var zoom = d3.behavior.zoom()
                                    .x(x)
                                    .y(y)
				    .y(y1)
                                    .scaleExtent([1, 10000])
                                    .on("zoom", zoomed);
        $('#loading-'+cstm_Id).css("display","none");
        var svg = d3.select(element[0])
                      .append("svg:svg")
                      .attr('width', width + margin.left + margin.right)
                      .attr('height', height + margin.top + margin.bottom)
                      .call(zoom)
                      .append("svg:g")
                      .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 
        svg.append("svg:g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0, " + height + ")")
                  .call(xAxis);
        var xLabl = svg.append("text")      // text label for the x axis
                  .attr("x", width / 2 )
                  .attr("y",  height + margin.bottom )
                  .attr("class","KWlabl textsize")
                  .style("text-anchor", "middle")
                  .attr("fill","black")
                  .attr("stroke-width",0)
                  .text("Date");                   
        svg.append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 0 - margin.left)
                  .attr("x",0 - (height / 2))
                  .attr("dy", "1em")
                  .attr("fill","black")
                  .attr("stroke-width",0)
		.attr("class","textsize")
                  .style("text-anchor", "middle")
                  .text(yaxislabel);
        svg.append("g")
                  .attr("class", "y axis")
                  .call(yAxis);
        
 	svg.append("g")             
        .attr("class", "y axis")    
        .attr("transform", "translate(" + width + " ,0)")   
        .style("fill", "black")       
        .call(yAxis1);

        svg.append("g")
                  .attr("class", "x grid")
                  .attr("transform", "translate(0," + height + ")")
                  .call(make_x_axis()
                  .tickSize(-height, 0, 0)
                  .tickFormat(""));
        svg.append("g")
                  .attr("class", "y grid")
                  .call(make_y_axis()
                  .tickSize(-width, 0, 0)
                  .tickFormat(""));
        var clip = svg.append("svg:clipPath")
                  .attr("id", "clip")
                  .append("svg:rect")
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr("width", width)
                  .attr("height", height);

        var chartBody = svg.append("g")
                  .attr("clip-path", "url(#clip)");
        var j = 0;
	var index_counter = 0;	
	$.each(dataobj,function(i,ele){
            chartBody.append("svg:path")
                  .datum(ele)
                  .attr("class", "line"+index_counter)
                  .attr("d", lineobj[index_counter](ele[j].position));
	    index_counter++;	
	});
	index_counter = 0;
        var ind = 0;
	var color_arr = ["red","#e0e4cc","pink","#cccccc","#cccccc","#292c37"];
	var max_temp_circle = [];
	$.each(dataobj,function(i,ele){
            max_temp_circle[i] = svg.selectAll("dot")
                                  .data(ele[1].position)
                                  .enter().append("circle")
                                  .filter(function(d,i) {if(d == max_temp[index_counter]) ind = i; return d == max_temp[index_counter] })
                                      .style("fill",color_arr[index_counter] ) 
                                      .attr('class', 'tooltip_marker')
                                      .attr("r", 5)
                                      .attr("cx", function(d) { return x( parseDate(ele[0].position[ind]) ); })
                                      .attr("cy", function(d) { return y(d); });
	   index_counter++;
       });   
       var focusobj = {};
       index_counter = 0;
       $.each(dataobj,function(i,ele){
		focusobj[index_counter] = svg.append("g")
					.attr("class", "focus")
					.style("display", "none");
		focusobj[index_counter].append("circle")
				.style("fill",color_arr[index_counter] )
                		.attr("r", 4.5);
 	        focusobj[index_counter].append("text")
                		.attr("x", 20)
                		.attr("dy", ".25em")
				.attr("class","mymousefont")
                		.attr("fill","#01B6AD")
                		.attr("stroke-width",1);
		focusobj[index_counter].append("text")
                                .attr("x", 20)
                                .attr("dy", "1.3em")
                                .attr("class","mymousefont2")
                                .attr("fill","#01B6AD")
                                .attr("stroke-width",1);
	       index_counter++;
	});
	index_counter = 0;
        svg.append("rect")
                  .attr("class", "overlay")
                  .attr("width", width)
                  .attr("height", height)
                  .on("mouseover", function() {index_counter = 0; $.each(dataobj,function(i,ele){focusobj[index_counter].style("display", null);index_counter++ });})
        	  .on("mouseout", function() {index_counter = 0; $.each(dataobj,function(i,ele){ focusobj[index_counter].style("display", "none"); index_counter++}); })
        	  .on("mousemove", mousemove);
	 	  index_counter = 0;
	var x0 = null;
        function mousemove() {
		var self = this;
		index_counter = 0;
                $.each(dataobj,function(i,ele){
                    x0 = x.invert(d3.mouse(self)[0]);
                    customBisectDate_call(ele[0],x0,obj_index[index_counter]);
		    var mydate_focus = new Date(ele[0].position[parseInt(obj_index[index_counter].index)]);
		    var monthfocus = getMyMonth(mydate_focus);
		    //var focusdata = mydate_focus.getDate()+" "+monthfocus+","+mydate_focus.getHours()+":"+mydate_focus.getMinutes();
		    var focusdata = mydate_focus.getHours()+":"+mydate_focus.getMinutes();
          	    focusobj[index_counter].attr("transform", "translate(" + x(parseDate(ele[0].position[parseInt(obj_index[index_counter].index)])) + "," + y(ele[1].position[parseInt(obj_index[index_counter].index)]) + ")");
		    if((yaxislabel == "Temperature"))
          	    focusobj[index_counter].select("text").text(formatValue(ele[1].position[parseInt(obj_index[index_counter].index)])+"C"+":"+focusdata);
		    else if(yaxislabel == "Humidity")
		    focusobj[index_counter].select("text").text(formatValue2(ele[1].position[parseInt(obj_index[index_counter].index)])+"%"+":"+focusdata);
		    else
		    focusobj[index_counter].select("text").text((ele[1].position[parseInt(obj_index[index_counter].index)])+"ppm"+":"+focusdata);
		    //focusobj[index_counter].select("text.mymousefont2").text(focusdata);

		    index_counter++;
		});
         } 
         function zoomed() {
		for(var i=0;i<max_temp_circle.length;i++){
         	max_temp_circle[i].remove();//removes the max data circle      
		}  
         	svg.select(".x.axis").call(xAxis);
         	svg.select(".y.axis").call(yAxis);
         	var j = 0;
         	// svg.select(".y.axis").call(yAxis2);
         	svg.select(".x.grid")
                      .call(make_x_axis()
                      .tickSize(-height, 0, 0)
                      .tickFormat(""));
         	svg.select(".y.grid")
                      .call(make_y_axis()
                      .tickSize(-width, 0, 0)
                      .tickFormat(""));
		var index_count = 0;
		$.each(dataobj,function(i,ele){
         		svg.select(".line"+index_count)
                      		.attr("class", "line"+index_count)
                      		.attr("d", lineobj[index_count](ele[j].position));
			index_count++;
		});
         }                
        },//end of success function ajax
        error:function(data){
        }
      });//end of ajax call
  }//end of link function

  return {
      link: link,
      restrict: 'E',
      scope: { controllerename: '=' , yaxislabelname: '=' , classname: '='}
  }//end of return
});//emd of  directive main function

