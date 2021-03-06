
var examples = [
	{
		"title":"Simple number",
		"data":{"a":123},
		"template":"{\"apple\":{{a}} }"
	},
	{
		"title":"Accessing an array element",
		"data":{
			"a": {
				"aa":"testing",
				"ab":1234
			},
			"b": "xxx",
			"c": [
				{
					"ca":"first",
					"cb":123
				},
				{
					"ca":"second",
					"cb":456
				}
			]
		},
		"template":"{{c.0.ca}}"
	},
	{
		"title":"Triple curly brackets",
		"data":{"a":"<x>"},
		"template":"{ \"a\":\"{{{a}}}\" }"
	},
	{
		"title":"Expanding key names",
		"data":{"i":1234,"l":567,"c":890,"n":765},
		"template":"{\"cellId\":{{i}},\"locationAreaCode\":{{l}},\"mobileCountryCode\":{{c}},\"mobileNetworkCode\":{{n}} }"
	},
	{
		"title":"Preformatted object",
		"data":"{\"a\":[123,456,789]}",
		"template":"{\"anArray\":[{{a}}], \"id\":\"{{PARTICLE_DEVICE_ID}}\"}"
	},
	{
		"title":"Conditional block",
		"data":{"a":123,"b":{"c":"hello","d":false}},
		"template":"{\n\t{{#b}}\n\t\t\"cat\":\"{{c}}\", \n\t\t\"dog\":{{d}}, \n\t{{/b}}\n\t\"apple\":{{a}} \n}"
	},
	{
		"title":"Body with array",
		"data":{"a":[{"b":123,"c":true},{"b":456,"c":false}] },
		"template":"{\n\t\"array\":[\n\t\t{{#a}}\n\t\t{\n\t\t\t\"banana\":{{b}},\n\t\t\t\"capybara\":{{c}}\n\t\t},\n\t\t{{/a}}\n\t\t{}\n\t]\n}"
	},
	{
		"title":"Medium weather data sample",
		"data":
		{
			"response": {
				"version": "0.1",
				"termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
				"features": {
					"forecast": 1
				}
			},
			"forecast": {
				"txt_forecast": {
					"date": "12:25 PM EST",
					"forecastday": {
						"period": 7,
						"icon": "nt_partlycloudy",
						"icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
						"title": "Saturday Night",
						"fcttext": "Partly cloudy early with increasing clouds overnight. Low 29F. Winds NW at 15 to 25 mph.",
						"fcttext_metric": "Partly cloudy early with increasing clouds overnight. Low -2C. Winds NW at 25 to 40 km/h.",
						"pop": "20"
					}
				},
				"simpleforecast": {
					"forecastday": {
						"date": {
							"epoch": "1479600000",
							"pretty": "7:00 PM EST on November 19, 2016",
							"day": 19,
							"month": 11,
							"year": 2016,
							"yday": 323,
							"hour": 19,
							"min": "00",
							"sec": 0,
							"isdst": "0",
							"monthname": "November",
							"monthname_short": "Nov",
							"weekday_short": "Sat",
							"weekday": "Saturday",
							"ampm": "PM",
							"tz_short": "EST",
							"tz_long": "America/New_York"
						},
						"period": 4,
						"high": {
							"fahrenheit": "40",
							"celsius": "4"
						},
						"low": {
							"fahrenheit": "29",
							"celsius": "-2"
						},
						"conditions": "Partly Cloudy",
						"icon": "partlycloudy",
						"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
						"skyicon": "",
						"pop": 20,
						"qpf_allday": {
							"in": 0.00,
							"mm": 0
						},
						"qpf_day": {
							"in": 0.00,
							"mm": 0
						},
						"qpf_night": {
							"in": 0.00,
							"mm": 0
						},
						"snow_allday": {
							"in": 0.0,
							"cm": 0.0
						},
						"snow_day": {
							"in": 0.0,
							"cm": 0.0
						},
						"snow_night": {
							"in": 0.0,
							"cm": 0.0
						},
						"maxwind": {
							"mph": 30,
							"kph": 48,
							"dir": "WNW",
							"degrees": 287
						},
						"avewind": {
							"mph": 24,
							"kph": 39,
							"dir": "WNW",
							"degrees": 287
						},
						"avehumidity": 60,
						"maxhumidity": 0,
						"minhumidity": 0
					}
				}
			}
		},
		"template":""
	},
	
	{
		"title":"Large weather data",
		"data":{"city":{"id":524901,"name":"Moscow","coord":{"lon":37.615555,"lat":55.75222},"country":"RU","population":0,"sys":{"population":0}},"cod":"200","message":0.0168,"cnt":40,"list":[{"dt":1478984400,"main":{"temp":267.67,"temp_min":267.324,"temp_max":267.67,"pressure":1010.4,"sea_level":1031.53,"grnd_level":1010.4,"humidity":90,"temp_kf":0.34},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":4.93,"deg":278.007},"snow":{"3h":0.22125},"sys":{"pod":"n"},"dt_txt":"2016-11-12 21:00:00"},{"dt":1478995200,"main":{"temp":268.12,"temp_min":267.864,"temp_max":268.12,"pressure":1011.27,"sea_level":1032.4,"grnd_level":1011.27,"humidity":90,"temp_kf":0.26},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":80},"wind":{"speed":4.43,"deg":282.506},"snow":{"3h":0.0875},"sys":{"pod":"n"},"dt_txt":"2016-11-13 00:00:00"},{"dt":1479006000,"main":{"temp":268.31,"temp_min":268.137,"temp_max":268.31,"pressure":1012.27,"sea_level":1033.37,"grnd_level":1012.27,"humidity":92,"temp_kf":0.17},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":3.86,"deg":282},"snow":{"3h":0.0525},"sys":{"pod":"n"},"dt_txt":"2016-11-13 03:00:00"},{"dt":1479016800,"main":{"temp":268.65,"temp_min":268.568,"temp_max":268.65,"pressure":1013.5,"sea_level":1034.61,"grnd_level":1013.5,"humidity":89,"temp_kf":0.09},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":76},"wind":{"speed":3.39,"deg":275},"snow":{"3h":0.035},"sys":{"pod":"d"},"dt_txt":"2016-11-13 06:00:00"},{"dt":1479027600,"main":{"temp":269.803,"temp_min":269.803,"temp_max":269.803,"pressure":1014.64,"sea_level":1035.52,"grnd_level":1014.64,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":76},"wind":{"speed":3.04,"deg":276.501},"snow":{"3h":0.0275},"sys":{"pod":"d"},"dt_txt":"2016-11-13 09:00:00"},{"dt":1479038400,"main":{"temp":270.171,"temp_min":270.171,"temp_max":270.171,"pressure":1015.47,"sea_level":1036.45,"grnd_level":1015.47,"humidity":93,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":76},"wind":{"speed":2.06,"deg":274.507},"snow":{"3h":0.015},"sys":{"pod":"d"},"dt_txt":"2016-11-13 12:00:00"},{"dt":1479049200,"main":{"temp":268.01,"temp_min":268.01,"temp_max":268.01,"pressure":1016.46,"sea_level":1037.6,"grnd_level":1016.46,"humidity":94,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":76},"wind":{"speed":1.21,"deg":230.001},"snow":{"3h":0.0275},"sys":{"pod":"n"},"dt_txt":"2016-11-13 15:00:00"},{"dt":1479060000,"main":{"temp":267.244,"temp_min":267.244,"temp_max":267.244,"pressure":1016.99,"sea_level":1038.25,"grnd_level":1016.99,"humidity":87,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":1.17,"deg":158},"snow":{"3h":0.045},"sys":{"pod":"n"},"dt_txt":"2016-11-13 18:00:00"},{"dt":1479070800,"main":{"temp":267.107,"temp_min":267.107,"temp_max":267.107,"pressure":1018.21,"sea_level":1039.42,"grnd_level":1018.21,"humidity":92,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":1.27,"deg":117.501},"snow":{"3h":0.0725},"sys":{"pod":"n"},"dt_txt":"2016-11-13 21:00:00"},{"dt":1479081600,"main":{"temp":266.857,"temp_min":266.857,"temp_max":266.857,"pressure":1019.37,"sea_level":1040.62,"grnd_level":1019.37,"humidity":94,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":64},"wind":{"speed":1.27,"deg":93.0083},"snow":{"3h":0.0525},"sys":{"pod":"n"},"dt_txt":"2016-11-14 00:00:00"},{"dt":1479092400,"main":{"temp":266.348,"temp_min":266.348,"temp_max":266.348,"pressure":1020.46,"sea_level":1041.85,"grnd_level":1020.46,"humidity":93,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":64},"wind":{"speed":1.35,"deg":91.0013},"snow":{"3h":0.0575},"sys":{"pod":"n"},"dt_txt":"2016-11-14 03:00:00"},{"dt":1479103200,"main":{"temp":266.392,"temp_min":266.392,"temp_max":266.392,"pressure":1021.81,"sea_level":1043.18,"grnd_level":1021.81,"humidity":84,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":80},"wind":{"speed":1.84,"deg":88.004},"snow":{"3h":0.0375},"sys":{"pod":"d"},"dt_txt":"2016-11-14 06:00:00"},{"dt":1479114000,"main":{"temp":269.009,"temp_min":269.009,"temp_max":269.009,"pressure":1023.28,"sea_level":1044.55,"grnd_level":1023.28,"humidity":91,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":76},"wind":{"speed":1.71,"deg":98.0012},"snow":{"3h":0.045},"sys":{"pod":"d"},"dt_txt":"2016-11-14 09:00:00"},{"dt":1479124800,"main":{"temp":269.247,"temp_min":269.247,"temp_max":269.247,"pressure":1024.38,"sea_level":1045.67,"grnd_level":1024.38,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":76},"wind":{"speed":1.46,"deg":95.0028},"snow":{"3h":0.035},"sys":{"pod":"d"},"dt_txt":"2016-11-14 12:00:00"},{"dt":1479135600,"main":{"temp":267.264,"temp_min":267.264,"temp_max":267.264,"pressure":1025.74,"sea_level":1047.14,"grnd_level":1025.74,"humidity":88,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":2.03,"deg":80.0043},"snow":{"3h":0.04},"sys":{"pod":"n"},"dt_txt":"2016-11-14 15:00:00"},{"dt":1479146400,"main":{"temp":266.552,"temp_min":266.552,"temp_max":266.552,"pressure":1026.54,"sea_level":1048.18,"grnd_level":1026.54,"humidity":92,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":2.16,"deg":87.5007},"snow":{"3h":0.04},"sys":{"pod":"n"},"dt_txt":"2016-11-14 18:00:00"},{"dt":1479157200,"main":{"temp":266.185,"temp_min":266.185,"temp_max":266.185,"pressure":1027.62,"sea_level":1049.14,"grnd_level":1027.62,"humidity":91,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":1.78,"deg":79.0033},"snow":{"3h":0.055},"sys":{"pod":"n"},"dt_txt":"2016-11-14 21:00:00"},{"dt":1479168000,"main":{"temp":265.804,"temp_min":265.804,"temp_max":265.804,"pressure":1028.34,"sea_level":1050.05,"grnd_level":1028.34,"humidity":93,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":68},"wind":{"speed":2.01,"deg":95.504},"snow":{"3h":0.075},"sys":{"pod":"n"},"dt_txt":"2016-11-15 00:00:00"},{"dt":1479178800,"main":{"temp":265.647,"temp_min":265.647,"temp_max":265.647,"pressure":1028.76,"sea_level":1050.48,"grnd_level":1028.76,"humidity":90,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":64},"wind":{"speed":2.19,"deg":107.502},"snow":{"3h":0.06},"sys":{"pod":"n"},"dt_txt":"2016-11-15 03:00:00"},{"dt":1479189600,"main":{"temp":266.24,"temp_min":266.24,"temp_max":266.24,"pressure":1029.52,"sea_level":1051.28,"grnd_level":1029.52,"humidity":90,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":68},"wind":{"speed":2.32,"deg":124.003},"snow":{"3h":0.04},"sys":{"pod":"d"},"dt_txt":"2016-11-15 06:00:00"},{"dt":1479200400,"main":{"temp":267.396,"temp_min":267.396,"temp_max":267.396,"pressure":1030.18,"sea_level":1051.74,"grnd_level":1030.18,"humidity":95,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":56},"wind":{"speed":2.21,"deg":145.003},"snow":{"3h":0.025},"sys":{"pod":"d"},"dt_txt":"2016-11-15 09:00:00"},{"dt":1479211200,"main":{"temp":266.779,"temp_min":266.779,"temp_max":266.779,"pressure":1029.89,"sea_level":1051.47,"grnd_level":1029.89,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":20},"wind":{"speed":1.81,"deg":146.501},"snow":{"3h":0.015},"sys":{"pod":"d"},"dt_txt":"2016-11-15 12:00:00"},{"dt":1479222000,"main":{"temp":262.227,"temp_min":262.227,"temp_max":262.227,"pressure":1029.9,"sea_level":1051.64,"grnd_level":1029.9,"humidity":74,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":20},"wind":{"speed":2.56,"deg":143.003},"snow":{"3h":0.005},"sys":{"pod":"n"},"dt_txt":"2016-11-15 15:00:00"},{"dt":1479232800,"main":{"temp":262.545,"temp_min":262.545,"temp_max":262.545,"pressure":1029.92,"sea_level":1051.62,"grnd_level":1029.92,"humidity":85,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":68},"wind":{"speed":2.56,"deg":160.503},"snow":{"3h":0.01},"sys":{"pod":"n"},"dt_txt":"2016-11-15 18:00:00"},{"dt":1479243600,"main":{"temp":263.388,"temp_min":263.388,"temp_max":263.388,"pressure":1029.48,"sea_level":1051.35,"grnd_level":1029.48,"humidity":90,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":68},"wind":{"speed":2.02,"deg":175.001},"snow":{"3h":0.045},"sys":{"pod":"n"},"dt_txt":"2016-11-15 21:00:00"},{"dt":1479254400,"main":{"temp":264.288,"temp_min":264.288,"temp_max":264.288,"pressure":1029.15,"sea_level":1050.87,"grnd_level":1029.15,"humidity":90,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":64},"wind":{"speed":2.52,"deg":181.502},"snow":{"3h":0.06},"sys":{"pod":"n"},"dt_txt":"2016-11-16 00:00:00"},{"dt":1479265200,"main":{"temp":263.636,"temp_min":263.636,"temp_max":263.636,"pressure":1028.12,"sea_level":1049.97,"grnd_level":1028.12,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":36},"wind":{"speed":2.76,"deg":184},"snow":{"3h":0.04},"sys":{"pod":"n"},"dt_txt":"2016-11-16 03:00:00"},{"dt":1479276000,"main":{"temp":263.311,"temp_min":263.311,"temp_max":263.311,"pressure":1027.74,"sea_level":1049.53,"grnd_level":1027.74,"humidity":85,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":20},"wind":{"speed":2.97,"deg":189.5},"snow":{"3h":0.02},"sys":{"pod":"d"},"dt_txt":"2016-11-16 06:00:00"},{"dt":1479286800,"main":{"temp":265.831,"temp_min":265.831,"temp_max":265.831,"pressure":1027.59,"sea_level":1049.14,"grnd_level":1027.59,"humidity":93,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":12},"wind":{"speed":3.02,"deg":195.005},"snow":{"3h":0.01},"sys":{"pod":"d"},"dt_txt":"2016-11-16 09:00:00"},{"dt":1479297600,"main":{"temp":265.997,"temp_min":265.997,"temp_max":265.997,"pressure":1026.85,"sea_level":1048.25,"grnd_level":1026.85,"humidity":87,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":3.21,"deg":203.5},"snow":{},"sys":{"pod":"d"},"dt_txt":"2016-11-16 12:00:00"},{"dt":1479308400,"main":{"temp":264.158,"temp_min":264.158,"temp_max":264.158,"pressure":1026.39,"sea_level":1047.94,"grnd_level":1026.39,"humidity":80,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":3.11,"deg":198.506},"snow":{},"sys":{"pod":"n"},"dt_txt":"2016-11-16 15:00:00"},{"dt":1479319200,"main":{"temp":264.512,"temp_min":264.512,"temp_max":264.512,"pressure":1025.64,"sea_level":1047.31,"grnd_level":1025.64,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":56},"wind":{"speed":3.52,"deg":189.501},"snow":{"3h":0.005},"sys":{"pod":"n"},"dt_txt":"2016-11-16 18:00:00"},{"dt":1479330000,"main":{"temp":263.819,"temp_min":263.819,"temp_max":263.819,"pressure":1025.28,"sea_level":1046.91,"grnd_level":1025.28,"humidity":93,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":64},"wind":{"speed":3.71,"deg":192.001},"snow":{"3h":0.01},"sys":{"pod":"n"},"dt_txt":"2016-11-16 21:00:00"},{"dt":1479340800,"main":{"temp":262.263,"temp_min":262.263,"temp_max":262.263,"pressure":1024.86,"sea_level":1046.54,"grnd_level":1024.86,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":56},"wind":{"speed":3.53,"deg":189.01},"snow":{"3h":0.025},"sys":{"pod":"n"},"dt_txt":"2016-11-17 00:00:00"},{"dt":1479351600,"main":{"temp":262.083,"temp_min":262.083,"temp_max":262.083,"pressure":1024.38,"sea_level":1045.95,"grnd_level":1024.38,"humidity":94,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":56},"wind":{"speed":3.7,"deg":186.008},"snow":{"3h":0.03},"sys":{"pod":"n"},"dt_txt":"2016-11-17 03:00:00"},{"dt":1479362400,"main":{"temp":263.138,"temp_min":263.138,"temp_max":263.138,"pressure":1024.03,"sea_level":1045.67,"grnd_level":1024.03,"humidity":86,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":64},"wind":{"speed":4.06,"deg":179.502},"snow":{"3h":0.06},"sys":{"pod":"d"},"dt_txt":"2016-11-17 06:00:00"},{"dt":1479373200,"main":{"temp":265.895,"temp_min":265.895,"temp_max":265.895,"pressure":1023.96,"sea_level":1045.37,"grnd_level":1023.96,"humidity":92,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":76},"wind":{"speed":4.36,"deg":177.502},"snow":{"3h":0.06},"sys":{"pod":"d"},"dt_txt":"2016-11-17 09:00:00"},{"dt":1479384000,"main":{"temp":266.546,"temp_min":266.546,"temp_max":266.546,"pressure":1023.59,"sea_level":1045.05,"grnd_level":1023.59,"humidity":92,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":80},"wind":{"speed":4.4,"deg":179.501},"snow":{"3h":0.06},"sys":{"pod":"d"},"dt_txt":"2016-11-17 12:00:00"},{"dt":1479394800,"main":{"temp":266.485,"temp_min":266.485,"temp_max":266.485,"pressure":1024.08,"sea_level":1045.56,"grnd_level":1024.08,"humidity":93,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":4.83,"deg":183.003},"snow":{"3h":0.1},"sys":{"pod":"n"},"dt_txt":"2016-11-17 15:00:00"},{"dt":1479405600,"main":{"temp":267.329,"temp_min":267.329,"temp_max":267.329,"pressure":1024.37,"sea_level":1045.84,"grnd_level":1024.37,"humidity":91,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":80},"wind":{"speed":4.95,"deg":179.502},"snow":{"3h":0.105},"sys":{"pod":"n"},"dt_txt":"2016-11-17 18:00:00"}]},
		"template":""
	},
	
	
	
	
];


