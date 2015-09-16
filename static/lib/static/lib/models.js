function user(){
	var user_name = null;
	var user_token = null;
	this.setUserName = function(email_or_name){
		user_name  = email_or_name;
	};
	this.getUserName = function(){
		return user_name;
	};
	this.setToken = function(token){
		user_token = token;
	};
	this.getToken = function(){
		return user_token;
	};
}

function registeration(){
	//variables to be defined for regn
};
function configMapping(){
	this.func = null;
	this.sensorid = null;
	this.building = null;
	this.floor = null;
	this.wing = null;
	this.rawdata = null;
	this.setConfigInfo = function(func,sensorid,building,floor,wing){
		this.func = func;
		this.sensorid = sensorid;
		this.building = building;
		this.floor = floor;
		this.wing = wing;
	}
	this.setConfigRawData = function(configobj){
		this.rawdata = configobj;
	};
	this.getConfigRawData  =function(){
		return this.rawdata;
	};
}
