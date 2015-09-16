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

function conditions_reset_graph(compile,scope){

      var floor = $("#floor_id").val();
      ////alert("flooe"+floor);
      var counter = 0;
      var wing = $("#wing_id").val();
      var graphtype = $("#graph_type").val();
      if(graphtype == "group"){
          $(".hidehumidity").css("display","none");
          $(".hideco2").css("display","none");
          $(".hidetemp").css("display","block");
          if(floor == 1){
            if(wing == "left_ahu"){
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'left'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            else{
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'right'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
          }
           if(floor == 2){
            if(wing == "left_ahu"){
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'left'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            else{
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'right'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
          }
           if(floor == 3){
            if(wing == "left_ahu"){
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'left'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            else{
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'right'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
          }
           if(floor == 4){
            if(wing == "left_ahu"){
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'left'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            else{
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'right'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
          }
           if(floor == "lgf"){
            
            if(wing == "left_ahu"){
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'left'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ 5+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            else{
                var tmp1 = "<line-chart types=\"'group'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = \"'right'\""+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ 5+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
          }
      }
      else{
        if(floor == 1){
             $.each(floor_1_wing,function(index,ele){
                if(wing == ele)
                  counter = index;
             });
             //////alert("counter"+counter);
             //////alert(floor_1_func[counter])
            if(floor_1_func[counter] == "T"){
                //////alert("in");
                $(".hidehumidity").css("display","none");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");

                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            if(floor_1_func[counter] == "T_H"){
                //////alert("in");
                $(".hidehumidity").css("display","block");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\"  controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\" "+"floor="+ floor+"></line-chart>";
                //////alert(tmp1);
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
                var tmp2 = "<line-chart  types=\"'sensor'\"  controllerename=\"'mindtree/humidity'\" " +   "sensorid = "+counter +" yaxislabelname=\"'Humidity'\" classname=\"'g2'\"  "+"floor ="+ floor+"></line-chart>";
                $("#g2").empty();
                $("#g2").append(tmp2);
                compile("#g2")(scope);
            }
             if(floor_1_func[counter] == "CO2"){
                //alert("co2");
                $(".hidehumidity").css("display","none");
                $(".hidetemp").css("display","none");
                $(".hideco2").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/carbon_dioxide'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Carbon Dioxide'\" classname=\"'g3'\""+"floor ="+ floor+"></line-chart>";
                $("#g3").empty();
                $("#g3").append(tmp1);
                compile("#g3")(scope);
            }
        }
        if(floor == 2){
             $.each(floor_2_wing,function(index,ele){
                if(wing == ele)
                  counter = index;
             });
             //////alert("counter"+counter);
             //////alert(floor_2_func[counter])
            if(floor_2_func[counter] == "T"){
                //////alert("in");
                 $(".hidehumidity").css("display","none");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            if(floor_2_func[counter] == "T_H"){
                //////alert("in");
                $(".hidehumidity").css("display","block");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\"  controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\" "+"floor="+ floor+"></line-chart>";
                //////alert(tmp1);
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
                var tmp2 = "<line-chart  types=\"'sensor'\"  controllerename=\"'mindtree/humidity'\" " +   "sensorid = "+counter +" yaxislabelname=\"'Humidity'\" classname=\"'g2'\"  "+"floor ="+ floor+"></line-chart>";
                $("#g2").empty();
                $("#g2").append(tmp2);
                compile("#g2")(scope);
            }
             if(floor_2_func[counter] == "CO2"){
                //alert("co2");
                 $(".hidehumidity").css("display","none");
                $(".hidetemp").css("display","none");
                $(".hideco2").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/carbon_dioxide'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Carbon Dioxide'\" classname=\"'g3'\""+"floor ="+ floor+"></line-chart>";
                $("#g3").empty();
                $("#g3").append(tmp1);
                compile("#g3")(scope);
            }
        }
        if(floor == 3){
             $.each(floor_3_wing,function(index,ele){
                if(wing == ele)
                  counter = index;
             });
             //////alert("counter"+counter);
             //////alert(floor_3_func[counter])
            if(floor_3_func[counter] == "T"){
                //////alert("in");
                $(".hidehumidity").css("display","none");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            if(floor_3_func[counter] == "T_H"){
                //////alert("in");
                $(".hidehumidity").css("display","block");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\"  controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\" "+"floor="+ floor+"></line-chart>";
                //////alert(tmp1);
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
                var tmp2 = "<line-chart  types=\"'sensor'\"  controllerename=\"'mindtree/humidity'\" " +   "sensorid = "+counter +" yaxislabelname=\"'Humidity'\" classname=\"'g2'\"  "+"floor ="+ floor+"></line-chart>";
                $("#g2").empty();
                $("#g2").append(tmp2);
                compile("#g2")(scope);
            }
             if(floor_3_func[counter] == "CO2"){
                //alert("co2");
                $(".hidehumidity").css("display","none");
                $(".hidetemp").css("display","none");
                $(".hideco2").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/carbon_dioxide'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Carbon Dioxide'\" classname=\"'g3'\""+"floor ="+ floor+"></line-chart>";
                $("#g3").empty();
                $("#g3").append(tmp1);
                compile("#g3")(scope);
            }
        }
        if(floor == 4){
             $.each(floor_4_wing,function(index,ele){
                if(wing == ele)
                  counter = index;
             });
             //////alert("counter"+counter);
             //////alert(floor_4_func[counter])
            if(floor_4_func[counter] == "T"){
                //////alert("in");
                $(".hidehumidity").css("display","none");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ floor+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            if(floor_4_func[counter] == "T_H"){
                //////alert("in");
                $(".hidehumidity").css("display","block");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\"  controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\" "+"floor="+ floor+"></line-chart>";
                //////alert(tmp1);
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
                var tmp2 = "<line-chart  types=\"'sensor'\"  controllerename=\"'mindtree/humidity'\" " +   "sensorid = "+counter +" yaxislabelname=\"'Humidity'\" classname=\"'g2'\"  "+"floor ="+ floor+"></line-chart>";
                $("#g2").empty();
                $("#g2").append(tmp2);
                compile("#g2")(scope);
            }
             if(floor_4_func[counter] == "CO2"){
                //alert("co2");
                $(".hidehumidity").css("display","none");
                $(".hidetemp").css("display","none");
                $(".hideco2").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/carbon_dioxide'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Carbon Dioxide'\" classname=\"'g3'\""+"floor ="+ floor+"></line-chart>";
                $("#g3").empty();
                $("#g3").append(tmp1);
                compile("#g3")(scope);
            }
        }
        if(floor.toString() == "lgf"){
          ////alert("im i lgf");
             $.each(floor_lgf_wing,function(index,ele){
                if(wing == ele)
                  counter = index;
             });
             //////alert("counter"+counter);
             //////alert(floor_lgf_func[counter])
            if(floor_lgf_func[counter] == "T"){
              $(".hidehumidity").css("display","none");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");
                //////alert("in");
                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Temperature'\" classname=\"'g1'\""+"floor ="+ 5+"></line-chart>";
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
            }
            if(floor_lgf_func[counter] == "T_H"){
                //////alert("in");
                $(".hidehumidity").css("display","block");
                $(".hideco2").css("display","none");
                $(".hidetemp").css("display","block");
                var tmp1 = "<line-chart types=\"'sensor'\"  controllerename=\"'mindtree/temperature'\" " +  "sensorid = "+counter+" yaxislabelname=\"'Temperature'\" classname=\"'g1'\" "+"floor="+ 5+"></line-chart>";
                //////alert(tmp1);
                $("#g1").empty();
                $("#g1").append(tmp1);
                compile("#g1")(scope);
                var tmp2 = "<line-chart  types=\"'sensor'\"  controllerename=\"'mindtree/humidity'\" " +   "sensorid = "+counter +" yaxislabelname=\"'Humidity'\" classname=\"'g2'\"  "+"floor ="+ 5+"></line-chart>";
                $("#g2").empty();
                $("#g2").append(tmp2);
                compile("#g2")(scope);
            }
             if(floor_lgf_func[counter] == "CO2"){
                //alert("co2");
                $(".hidehumidity").css("display","none");
                $(".hideco2").css("display","block");
                $(".hidetemp").css("display","none");
                var tmp1 = "<line-chart types=\"'sensor'\" controllerename=\"'mindtree/carbon_dioxide'\" " +  "sensorid = "+counter +" yaxislabelname=\"'Carbon Dioxide'\" classname=\"'g3'\""+"floor ="+ 5+"></line-chart>";
                $("#g3").empty();
                $("#g3").append(tmp1);
                compile("#g3")(scope);
            }
        }
      }
      
}
myApp.directive('lineChart', function($compile){
    var scope = angular.element($("body")).scope();
    function link(scope, element, attr){
        function conditions_reset(){
            conditions_reset_graph($compile,scope);
    	}
        function resize(){ }
    	d3.select(window).on('resize', resize);
    	d3.select("#conditions_go_btn").on("click", conditions_reset);
        var controllerName = scope.controllerename;
        var yaxislabel  = scope.yaxislabelname;
        var floor_no  = scope.floor;
        ////alert(floor_no);
        var mydata = null;
        var payload = {};
	var  cstm_Id = null;
        //alert("types"+scope.types)
        if((scope.types).toString() == "sensor"){
          if(floor_no == "1"){
            //////alert("floor matched1"+scope.sensorid);
            mydata = floor_1_sensor_id[scope.sensorid];
            //////alert(mydata);
          }
          if(floor_no == "2"){
            //////alert("floor matched1");
            mydata = floor_2_sensor_id[scope.sensorid]
          }
          if(floor_no == "3"){
            //////alert("floor matched2");
            mydata = floor_3_sensor_id[scope.sensorid]
          }
          if(floor_no == "4"){
            //////alert("floor matched4");
            mydata = floor_4_sensor_id[scope.sensorid]
          }
          if(floor_no == 5){
            ////alert("floor matchedlgf");
            ////alert("id"+scope.sensorid);
            console.log(floor_lgf_sensor_id);
            mydata = floor_lgf_sensor_id[scope.sensorid]
          }

          cstm_Id = scope.classname;
          
          var sen_data = mydata;
          //var sen_data = scope.sensorid;
          sen_data = sen_data.split(",");
          payload["jsondata"] = sen_data;
        }
        if((scope.types).toString() =="group")
        {
          //alert("m");
          if(scope.sensorid == "left")
          {
            if(floor_no == "1"){
              //////alert("left----");
              payload["jsondata"] = ["1008","100d","100b","100a","1007","1006"];
            }
            if(floor_no == "2"){
              //////alert("left----");
              payload["jsondata"] = ["2003","2008","2007","2002"];
            }
            if(floor_no == "3"){
              //////alert("left----");
              payload["jsondata"] = ["3003","3007","3002"];
            }
            if(floor_no == "4"){
              //////alert("left----");
              payload["jsondata"] = ["4003","4004","4006"];
            }
            if(floor_no == "5"){
              //////alert("left----");
              payload["jsondata"] = ["4","7","6"];
            }
          }
          else{
            if(floor_no == "1"){
              payload["jsondata"] = ["1002","1009","1004","1003"];
            }
            if(floor_no == "2"){
              payload["jsondata"] = ["2005","2004"];
            }
            if(floor_no == "3"){
              payload["jsondata"] = ["3004","3005"];
            }
            if(floor_no == "4"){
              payload["jsondata"] = ["4002","4005"];
            }
            if(floor_no == "5"){
              payload["jsondata"] = ["3","2","1"];
            }
          }
        }
        $('#loading-'+cstm_Id).css("display","block");//<img style = "margin:10% 40%;" src="static/lib/img/Fillingbrokenring.gif" alt="loading..."/>
        // $('#loading-'+cstm_Id).html('<img style = "margin:10% 40%;" src="static/lib/img/animate.gif" alt="loading..."/> ');
        var scope = angular.element($("body")).scope(); 
        
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
          console.log("success");
	  var dataobj = {};
	  var datedata = null;
          var indexval = 0;
          var data;
	  var counter = 0;
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
            formatValue = d3.format(",.2f"),
            formatCurrency = function(d) { return "$" + formatValue(d); };  
        var margin = {
                  top: 20,
                  right: 60,
                  bottom: 40,
                  left: 60
              };
        var width = d3.select(".panel-body").style("width").replace(/[^-\d\.]/g, '')- margin.left - margin.right;
	if(width >10){
	      globalwidth = width;
	}else
		width = globalwidth;
          // var height = ((d3.select(".panel-body").style("width").replace(/[^-\d\.]/g, ''))/2) - margin.top - margin.bottom;
        var height = 380 - margin.top -margin.bottom;
        var x = d3.time.scale()
                          .domain(d3.extent(datedata.position, function (d,i) {
                                return parseDate(d);
                          }))
                          .range([0, width]);
        //////alert("s"); 
        var y = d3.scale.linear()
                          .domain([min_temperature-1, max_temperature])
                          .range([height, 0]);
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
        var xAxis = d3.svg.axis()
                                .scale(x)
                                .orient("bottom")
                                .ticks(5);
        var yAxis = d3.svg.axis()
                                .scale(y)
                                .orient("left")
                                .ticks(5);
        var zoom = d3.behavior.zoom()
                                    .x(x)
                                    .y(y)
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
	var max_temp_circle = null;
	$.each(dataobj,function(i,ele){
            max_temp_circle = svg.selectAll("dot")
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
		    var focusdata = mydate_focus.getDate()+" "+monthfocus+","+mydate_focus.getHours()+":"+mydate_focus.getMinutes();
          	    focusobj[index_counter].attr("transform", "translate(" + x(parseDate(ele[0].position[parseInt(obj_index[index_counter].index)])) + "," + y(ele[1].position[parseInt(obj_index[index_counter].index)]) + ")");
          	    focusobj[index_counter].select("text").text(yaxislabel+":"+ele[1].position[parseInt(obj_index[index_counter].index)]);
		    focusobj[index_counter].select("text.mymousefont2").text("date:"+focusdata);

		    index_counter++;
		});
         } 
         function zoomed() {
         	max_temp_circle.remove();//removes the max data circle        
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
      scope: { controllerename: '=' , yaxislabelname: '=' , classname: '=',sensorid: '=',floor:'=',types:'='}
  }//end of return
});//emd of  directive main function

