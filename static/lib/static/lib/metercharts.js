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
}
function meter_reset_graph(compile,scope){
	showgraph = "true";
	 var tmp1 = "<meter-chart controllerename=\"'mindtree/total_active_power'\"  yaxislabelname=\"'Total Active Power'\" classname=\"'g1'\"></line-chart>";
        $("#g1").empty();
        $("#g1").append(tmp1);
        compile("#g1")(scope);

var tmp2 = "<bar-graph  controllerename=\"'mindtree/daily_energy'\"  yaxislabelname=\"'Energy Consumption'\" classname=\"'g2'\"></bar-graph>";
 $("#g2").empty();
 $("#g2").append(tmp2);
 compile("#g2")(scope);



}

myApp.directive('meterChart', function($compile){
    //var scope = angular.element($("body")).scope();
    var scope = angular.element($("#metercontoller")).scope();
    var configObj = scope.getConfigInformation();
	//alert(scope.config_func);
// if(!(scope.config_func === undefined))

    function link(scope, element, attr){

	function meter_reset(){
		showgraph = "true";
		meter_reset_graph($compile,scope);
	}
        function resize(){ }
    	d3.select(window).on('resize', resize);
	d3.select("#meter_go_btn").on("click", meter_reset);
        var controllerName = scope.controllerename;
        var yaxislabel  = scope.yaxislabelname;
        var floor_no  = configObj.floor;
        var payload = {};
	var sensor_name =[]; 
	var  cstm_Id = null;
        cstm_Id = scope.classname;
		//payload["jsondata"] = ["mindtree_phase1_dieselshed_1"];
                //sensor_name = ["left AHU room"];
        selected_wing = $("#meter_wing_id option:selected").text();
	selected_floor = $("#meter_floor_id option:selected").text();
	selected_data_id = "";
	switch (selected_floor) {
//**********dieselshed
	case "Diesel Shed":{
	    switch (selected_wing) {
	    case "EB_ACOP1":
		selected_data_id = "mindtree_phase1_dieselshed_1";
		break;
            case "EB_ATS1":
                selected_data_id = "mindtree_phase1_dieselshed_2";
                break;
            case "EB_ATS2":
                selected_data_id = "mindtree_phase1_dieselshed_3";
                break;
            case "EB_ACOP2":
                selected_data_id = "mindtree_phase1_dieselshed_4";
                break;
            case "500KVA DG1":
                selected_data_id = "mindtree_phase1_dieselshed_5";
                break;
            case "500KVA DG2":
                selected_data_id = "mindtree_phase1_dieselshed_6";
                break;
            case "500KVA DG3":
                selected_data_id = "mindtree_phase1_dieselshed_7";
                break;
            case "250KVA DG4":
                selected_data_id = "mindtree_phase1_dieselshed_8";
                break;
	}break;}
//***********LGF
	case "Lower ground floor":{
	    switch (selected_wing) {	
            case "left_wing_MLPB":
                selected_data_id = "mindtree_phase1_lgf_1";
                break;
            case "left_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_lgf_2";
                break;
            case "right_wing_MLPA":
                selected_data_id = "mindtree_phase1_lgf_3";
                break;
            case "right_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_lgf_4";
                break;
	}break;}

//***********GF        
	case "Ground floor":{
	    switch (selected_wing) {
            case "left_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_lgf_5";
                break;
            case "right_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_lgf_6";
                break;
	}break;}
//***********LGF
	case "1F":{ 
	    switch (selected_wing) {       
            case "left_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_1f_1";
                break;
            case "right_wing_server_room":
                selected_data_id = "mindtree_phase1_1f_2";
                break;
            case "right_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_1f_3";
                break;
	}break;}

//***********2F        
	case "2F":{
	switch (selected_wing) {
            case "left_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_2f_1";
                break;
            case "right_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_2f_2";
                break;
	}break;}
//***********3F 
	case "3F":{
	switch (selected_wing) {       
            case "right_wing_switch_room":
                selected_data_id = "mindtree_phase1_3f_1";
                break;
            case "left_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_3f_2";
                break;
            case "right_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_3f_3";
                break;
	}break;}
//***********4F
	case "4F":{
	switch (selected_wing){
            case "right_wing_studio":
                selected_data_id = "mindtree_phase1_4f_1";
                break;
            case "right_wing_switch_room":
                selected_data_id = "mindtree_phase1_4f_2";
                break;
            case "right_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_4f_3";
                break;
            case "left_wing_AHU_panel":
                selected_data_id = "mindtree_phase1_4f_5";
                break;
        }break;}}
	console.log("**************************");
        console.log(configObj.sensorid);

	console.log(selected_data_id);
	payload["jsondata"] = [selected_data_id];

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
	  var dataobj = {};
	  showgraph = "false";
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
		console.log("elem----------------");
		var scope = angular.element($("#graphsection")).scope();
		var conf_data = scope.getConfigRawData().data.data;
	  	//console.log(conf_data);
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
		 focusobj[index_counter].select("text").text((ele[1].position[parseInt(obj_index[index_counter].index)])+"kW"+":"+focusdata);
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

