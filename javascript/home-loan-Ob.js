var _$_f3a8=["getDay","getHours","opening_monday","opening_tomorrow","opening_soon","text","call","email","img","getElementsByTagName","length","data-src","getAttribute","src","setAttribute","calc-ss","service-ss","home-valuation-ss","dpa-ss","refinance-ss","sfr-ss","flyer-ss","slide","getElementsByClassName","getElementById","index","className","slide showing","mortgage-prequalification-widget","widget-slide","tabcontent","message","dti_messages","display","style","none","height","0px","block","scrollHeight","px","click","active","contains","classList","remove","toggle","nextElementSibling","addEventListener","value","innerHTML","toLocaleString","scrollIntoView","pp","PP","mySelect","FHA","min","dp","DP%","3.5","VA","USDA","0.0","Conventional","3.0","Jumbo","10.0","max","mySelect2","DP","P","loanMaxNote","jumboLoan","LTV","apr","APR","mi","MI%","pt","PT%","HOI","pow","PI","T","I","MP","total_income","MTL","Income 1","Income ","income-source","income-info","income-2-details","income-3-details","income-4-details","income-5-details","income-summary","calc_results","Hourly","a3a","a3b","Please enter valid Hourly Rate","","Please enter valid Hours Per Week","a8a","a8b","Weekly","a4","Please enter valid Weekly Rate","Semi-Weekly","a5","Please enter valid Semi-Weekly Rate","Monthly","a6","Please enter valid Monthly Salary","Annually","a7","Please enter valid Annual Salary","1099 Employee","a9a","a9b","Please enter required income for 2 years","Self-Employed","I1","inc_1","i1_w2","i1_vp","Income 2","I2","inc_2","i2_w2","i2_vp","Income 3","I3","inc_3","i3_w2","i3_vp","Income 4","I4","inc_4","i4_w2","i4_vp","Income 5","I5","inc_5","i5_w2","i5_vp","auto_loan","student_loan","installment_loan","revolving_account","other_debt","no_income_warning","dti_results","color","FR","red","green","FR%","BR","BR%","dti1","dti2","dti3","inputValue3","slide-1","a2","incomeField","q2","q3","q8","q4","q5","q6","q7","q9","flyers","collapsible","content","onclick","HomeSearchBtnWidget","SearchTextWidget","#home-search-form #SearchValidationError","querySelector","preventDefault","event"];function current_date_time(){var _0xDC5E= new Date,_0xDC7B=_0xDC5E[_$_f3a8[0]](),_0xDC98=_0xDC5E[_$_f3a8[1]]();6== _0xDC7B&& _0xDC98>= 18?open_monday():0== _0xDC7B?open_tomorrow():_0xDC98< 10?open_soon():_0xDC98>= 18?open_tomorrow():show_phone()}function open_monday(){show(_$_f3a8[2]),hide(_$_f3a8[3]),hide(_$_f3a8[4]),hide_phone()}function open_tomorrow(){hide(_$_f3a8[2]),show(_$_f3a8[3]),hide(_$_f3a8[4]),hide_phone()}function open_soon(){hide(_$_f3a8[2]),hide(_$_f3a8[3]),show(_$_f3a8[4]),hide_phone()}function open(){hide(_$_f3a8[2]),hide(_$_f3a8[3]),hide(_$_f3a8[4]),show_phone()}function hide_phone(){show(_$_f3a8[5]),hide(_$_f3a8[6]),show(_$_f3a8[7])}function show_phone(){show(_$_f3a8[5]),show(_$_f3a8[6]),show(_$_f3a8[7])}function init(){for(var _0xDCD2=document[_$_f3a8[9]](_$_f3a8[8]),_0xDB3C=0;_0xDB3C< _0xDCD2[_$_f3a8[10]];_0xDB3C++){if(_0xDCD2[_0xDB3C][_$_f3a8[12]](_$_f3a8[11])){_0xDCD2[_0xDB3C][_$_f3a8[14]](_$_f3a8[13],_0xDCD2[_0xDB3C][_$_f3a8[12]](_$_f3a8[11]));var _0xDCEF=_0xDCD2[_0xDB3C][_$_f3a8[12]](_$_f3a8[11])}}}function slideshow(){setInterval((function(){nextSlide(_$_f3a8[15]),nextSlide(_$_f3a8[16]),nextSlide(_$_f3a8[17]),nextSlide(_$_f3a8[18]),nextSlide(_$_f3a8[19]),nextSlide(_$_f3a8[20]),nextSlide(_$_f3a8[21])}),2e3)}function nextSlide(_0xDCB5){var _0xDD0C=document[_$_f3a8[24]](_0xDCB5)[_$_f3a8[23]](_$_f3a8[22]);_0xDD0C[_$_f3a8[25]]= _0xDD0C[_$_f3a8[25]]|| 0,_0xDD0C[_0xDD0C[_$_f3a8[25]]][_$_f3a8[26]]= _$_f3a8[22],_0xDD0C[_$_f3a8[25]]= (_0xDD0C[_$_f3a8[25]]+ 1)% _0xDD0C[_$_f3a8[10]],_0xDD0C[_0xDD0C[_$_f3a8[25]]][_$_f3a8[26]]= _$_f3a8[27]}setInterval(current_date_time,1e3),init(),onload= slideshow;const calculator=_$_f3a8[28],widget_slides=document[_$_f3a8[24]](calculator)[_$_f3a8[23]](_$_f3a8[29]),tabcontents=document[_$_f3a8[24]](calculator)[_$_f3a8[23]](_$_f3a8[30]),messages=document[_$_f3a8[24]](_$_f3a8[32])[_$_f3a8[23]](_$_f3a8[31]);function show_dti_message(_0xDCB5){slide_up(messages),slide_down(_0xDCB5)}function show_tab_content(_0xDCB5){slide_up(tabcontents),slide_down(_0xDCB5)}function slide_up(_0xDB76){for(var _0xDB3C=0;_0xDB3C< _0xDB76[_$_f3a8[10]];_0xDB3C++){_0xDB76[_0xDB3C][_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[35],_0xDB76[_0xDB3C][_$_f3a8[34]][_$_f3a8[36]]= _$_f3a8[37]}}function slide_down(_0xDCB5){var _0xDC07=document[_$_f3a8[24]](_0xDCB5);_0xDC07[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38],_0xDC07[_$_f3a8[34]][_$_f3a8[36]]= _0xDC07[_$_f3a8[39]]+ _$_f3a8[40]}function collapsible(_0xDBEA,_0xDB93,_0xDBB0){const _0xDB76=document[_$_f3a8[24]](_0xDBEA)[_$_f3a8[23]](_0xDB93),_0xDBCD=document[_$_f3a8[24]](_0xDBEA)[_$_f3a8[23]](_0xDBB0);for(let _0xDB3C=0;_0xDB3C< _0xDB76[_$_f3a8[10]];_0xDB3C++){_0xDB76[_0xDB3C][_$_f3a8[48]](_$_f3a8[41],(function(){for(let _0xDC24=0;_0xDC24< _0xDBCD[_$_f3a8[10]];_0xDC24++){_0xDBCD[_0xDC24][_$_f3a8[34]][_$_f3a8[36]]= _$_f3a8[37]};if(this[_$_f3a8[44]][_$_f3a8[43]](_$_f3a8[42])){this[_$_f3a8[44]][_$_f3a8[45]](_$_f3a8[42])}else {for(let _0xDC41=0;_0xDC41< _0xDB76[_$_f3a8[10]];_0xDC41++){_0xDB76[_0xDC41][_$_f3a8[44]][_$_f3a8[45]](_$_f3a8[42])};this[_$_f3a8[44]][_$_f3a8[46]](_$_f3a8[42]);var _0xDC07=this[_$_f3a8[47]];_0xDC07[_$_f3a8[34]][_$_f3a8[36]]= _0xDC07[_$_f3a8[39]]+ _$_f3a8[40]}}))}}function show(_0xDCB5){document[_$_f3a8[24]](_0xDCB5)[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38]}function hide(_0xDCB5){document[_$_f3a8[24]](_0xDCB5)[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[35]}function get_value(_0xDCB5){return document[_$_f3a8[24]](_0xDCB5)[_$_f3a8[49]]}function set_value(_0xDCB5,_0xDD29){document[_$_f3a8[24]](_0xDCB5)[_$_f3a8[49]]= _0xDD29}function toString(_0xDCB5,_0xDD29,_0xDD46){document[_$_f3a8[24]](_0xDCB5)[_$_f3a8[50]]= _0xDD29[_$_f3a8[51]](void(0),{minimumFractionDigits:_0xDD46,maximumFractionDigits:_0xDD46})}function show_slide(_0xDCB5){slide_up(widget_slides),slide_down(_0xDCB5),document[_$_f3a8[24]](calculator)[_$_f3a8[52]]()}function calc(){purchase_price= Number(get_value(_$_f3a8[53])),toString(_$_f3a8[54],purchase_price,0),loan_program= get_value(_$_f3a8[55]),show_tab_content(loan_program),_$_f3a8[56]=== loan_program?(document[_$_f3a8[24]](_$_f3a8[58])[_$_f3a8[57]]= 3.5,document[_$_f3a8[24]](_$_f3a8[59])[_$_f3a8[50]]= _$_f3a8[60]):_$_f3a8[61]=== loan_program|| _$_f3a8[62]=== loan_program?(document[_$_f3a8[24]](_$_f3a8[58])[_$_f3a8[57]]= 0,document[_$_f3a8[24]](_$_f3a8[59])[_$_f3a8[50]]= _$_f3a8[63]):_$_f3a8[64]=== loan_program?(document[_$_f3a8[24]](_$_f3a8[58])[_$_f3a8[57]]= 3,document[_$_f3a8[24]](_$_f3a8[59])[_$_f3a8[50]]= _$_f3a8[65]):_$_f3a8[66]=== loan_program&& (document[_$_f3a8[24]](_$_f3a8[58])[_$_f3a8[57]]= 10,document[_$_f3a8[24]](_$_f3a8[59])[_$_f3a8[50]]= _$_f3a8[67]),_$_f3a8[66]=== loan_program?(document[_$_f3a8[24]](_$_f3a8[53])[_$_f3a8[57]]= 5e5,document[_$_f3a8[24]](_$_f3a8[53])[_$_f3a8[68]]= 2e6):(document[_$_f3a8[24]](_$_f3a8[53])[_$_f3a8[57]]= 1e5,document[_$_f3a8[24]](_$_f3a8[53])[_$_f3a8[68]]= 1e6),loan_term= get_value(_$_f3a8[69]),down_payment_percent= Number(get_value(_$_f3a8[58])),_$_f3a8[56]=== loan_program&& dp< 3.5&& (down_payment_percent= 3.5),_$_f3a8[64]=== loan_program&& dp< 3&& (down_payment_percent= 3),_$_f3a8[66]=== loan_program&& dp< 10&& (down_payment_percent= 10),toString(_$_f3a8[59],down_payment_percent,1),down_payment= purchase_price* (down_payment_percent/ 100),toString(_$_f3a8[70],down_payment,0),loan_amount= purchase_price- down_payment,toString(_$_f3a8[71],loan_amount,0),_$_f3a8[66]!== loan_program&& loan_amount> 417e3?show(_$_f3a8[72]):hide(_$_f3a8[72]),_$_f3a8[66]=== loan_program&& loan_amount< 484350?show(_$_f3a8[73]):hide(_$_f3a8[73]),loan_to_value= 100- down_payment_percent,toString(_$_f3a8[74],loan_to_value,1),interest_rate= Number(get_value(_$_f3a8[75])),toString(_$_f3a8[76],interest_rate,3),_$_f3a8[61]=== loan_program?mi_rate= 0:_$_f3a8[56]=== loan_program&& down_payment_percent< 5?mi_rate= 0.85:_$_f3a8[56]=== loan_program&& down_payment_percent>= 5?mi_rate= 0.8:_$_f3a8[62]=== loan_program?mi_rate= 0.35:_$_f3a8[64]=== loan_program&& down_payment_percent>= 20?mi_rate= 0:_$_f3a8[66]=== loan_program&& down_payment_percent>= 20?mi_rate= 0:mi_rate= Number(get_value(_$_f3a8[77])),toString(_$_f3a8[78],mi_rate,2),property_tax_rate= Number(get_value(_$_f3a8[79])),toString(_$_f3a8[80],property_tax_rate,2),home_owner_insurance= purchase_price* (0.25/ 1200),toString(_$_f3a8[81],home_owner_insurance,2);var _0xDB02=12* loan_term,_0xDB1F=interest_rate/ 1200;principal_interest= loan_amount* _0xDB1F/ (1- Math[_$_f3a8[82]](1/ (1+ _0xDB1F),_0xDB02)),toString(_$_f3a8[83],principal_interest,2),property_tax= property_tax_rate* purchase_price/ 1200,toString(_$_f3a8[84],property_tax,2),mortgage_insurance= mi_rate* loan_amount/ 1200,toString(_$_f3a8[85],mortgage_insurance,2),housing_expense= principal_interest+ property_tax+ mortgage_insurance+ home_owner_insurance,toString(_$_f3a8[86],housing_expense,2),toString(_$_f3a8[87],income_total,2),toString(_$_f3a8[88],monthly_liability,2),0!= income_total&& calc_dti()}function show_income_source(){0=== income_total?(income_source= _$_f3a8[89],show_income(1)):show_income_summary()}function show_income(_0xDCB5){income_source= _$_f3a8[90]+ _0xDCB5,document[_$_f3a8[24]](_$_f3a8[91])[_$_f3a8[50]]= income_source,_$_f3a8[89]=== income_source?hide(_$_f3a8[45]):show(_$_f3a8[45]),show_slide(_$_f3a8[92])}function show_income_summary(){0=== income2?hide(_$_f3a8[93]):show(_$_f3a8[93]),0=== income3?hide(_$_f3a8[94]):show(_$_f3a8[94]),0=== income4?hide(_$_f3a8[95]):show(_$_f3a8[95]),0=== income5?hide(_$_f3a8[96]):show(_$_f3a8[96]),show_slide(_$_f3a8[97])}function show_calc_results(){update_income(),add_liability(),calc_dti(),show_slide(_$_f3a8[98])}function remove_income(){clear_inc_source(),update_income(),calc_dti()}function calc_inc_source(){if(get_employment_type(),_$_f3a8[99]=== employmentType){if(hr= Number(get_value(_$_f3a8[100])),hpw= Number(get_value(_$_f3a8[101])),hr<= 0){return alert(_$_f3a8[102]),set_value(_$_f3a8[100],_$_f3a8[103]),void((hr= 0))};if(hpw<= 0|| hpw> 168){return alert(_$_f3a8[104]),set_value(_$_f3a8[101],_$_f3a8[103]),void((hpw= 0))};w2= hr* hpw* 52/ 12,vp1= Number(get_value(_$_f3a8[105])),vp2= Number(get_value(_$_f3a8[106])),vp= (vp1+ vp2)/ 24}else {if(_$_f3a8[107]=== employmentType){if(wp= Number(get_value(_$_f3a8[108])),wp<= 0){return alert(_$_f3a8[109]),set_value(_$_f3a8[108],_$_f3a8[103]),void((wp= 0))};w2= 52* wp/ 12,vp1= Number(get_value(_$_f3a8[105])),vp2= Number(get_value(_$_f3a8[106])),vp= (vp1+ vp2)/ 24}else {if(_$_f3a8[110]=== employmentType){if(swp= Number(get_value(_$_f3a8[111])),swp<= 0){return alert(_$_f3a8[112]),set_value(_$_f3a8[111],_$_f3a8[103]),void((swp= 0))};w2= 26* swp/ 12,vp1= Number(get_value(_$_f3a8[105])),vp2= Number(get_value(_$_f3a8[106])),vp= (vp1+ vp2)/ 24}else {if(_$_f3a8[113]=== employmentType){if(mp= Number(get_value(_$_f3a8[114])),mp<= 0){return alert(_$_f3a8[115]),set_value(_$_f3a8[114],_$_f3a8[103]),void((mp= 0))};w2= mp,vp1= Number(get_value(_$_f3a8[105])),vp2= Number(get_value(_$_f3a8[106])),vp= (vp1+ vp2)/ 24}else {if(_$_f3a8[116]=== employmentType){if(ap= Number(get_value(_$_f3a8[117])),ap<= 0){return alert(_$_f3a8[118]),set_value(_$_f3a8[117],_$_f3a8[103]),void((ap= 0))};w2= ap/ 12,vp1= Number(get_value(_$_f3a8[105])),vp2= Number(get_value(_$_f3a8[106])),vp= (vp1+ vp2)/ 24}else {if(_$_f3a8[119]=== employmentType){if(w2= 0,vp1= Number(get_value(_$_f3a8[120])),vp2= Number(get_value(_$_f3a8[121])),vp1<= 0|| vp2<= 0){return void(alert(_$_f3a8[122]))};vp= (vp1+ vp2)/ 24}else {if(_$_f3a8[123]=== employmentType){if(w2= 0,vp1= Number(get_value(_$_f3a8[120])),vp2= Number(get_value(_$_f3a8[121])),vp1<= 0|| vp2<= 0){return void(alert(_$_f3a8[122]))};vp= (vp1+ vp2)/ 24}}}}}}};inc= w2+ vp,_$_f3a8[89]=== income_source?(show(_$_f3a8[124]),toString(_$_f3a8[125],inc,2),toString(_$_f3a8[126],w2,2),toString(_$_f3a8[127],vp,2),income1= inc):_$_f3a8[128]=== income_source?(show(_$_f3a8[129]),toString(_$_f3a8[130],inc,2),toString(_$_f3a8[131],w2,2),toString(_$_f3a8[132],vp,2),income2= inc):_$_f3a8[133]=== income_source?(show(_$_f3a8[134]),toString(_$_f3a8[135],inc,2),toString(_$_f3a8[136],w2,2),toString(_$_f3a8[137],vp,2),income3= inc):_$_f3a8[138]=== income_source?(show(_$_f3a8[139]),toString(_$_f3a8[140],inc,2),toString(_$_f3a8[141],w2,2),toString(_$_f3a8[142],vp,2),income4= inc):_$_f3a8[143]=== income_source&& (show(_$_f3a8[144]),toString(_$_f3a8[145],inc,2),toString(_$_f3a8[146],w2,2),toString(_$_f3a8[147],vp,2),income5= inc),show_income_summary()}function update_income(){income_total= income1+ income2+ income3+ income4+ income5,toString(_$_f3a8[87],income_total,2)}function add_liability(){auto_loan= Number(get_value(_$_f3a8[148])),student_loan= Number(get_value(_$_f3a8[149])),installment_loan= Number(get_value(_$_f3a8[150])),revolving_account= Number(get_value(_$_f3a8[151])),other_debt= Number(get_value(_$_f3a8[152])),monthly_liability= auto_loan+ student_loan+ installment_loan+ revolving_account+ other_debt,toString(_$_f3a8[88],monthly_liability,0)}function clear_liability(){auto_loan= 0,student_loan= 0,installment_loan= 0,revolving_account= 0,other_debt= 0,set_value(_$_f3a8[148],_$_f3a8[103]),set_value(_$_f3a8[149],_$_f3a8[103]),set_value(_$_f3a8[150],_$_f3a8[103]),set_value(_$_f3a8[151],_$_f3a8[103]),set_value(_$_f3a8[152],_$_f3a8[103])}function calc_dti(){monthly_payment= housing_expense+ monthly_liability,front_dti_ratio= housing_expense/ income_total* 100,back_dti_ratio= monthly_payment/ income_total* 100,hide(_$_f3a8[153]),show(_$_f3a8[154]),show(_$_f3a8[32]),front_dti_ratio> 37?document[_$_f3a8[24]](_$_f3a8[156])[_$_f3a8[34]][_$_f3a8[155]]= _$_f3a8[157]:document[_$_f3a8[24]](_$_f3a8[156])[_$_f3a8[34]][_$_f3a8[155]]= _$_f3a8[158],toString(_$_f3a8[156],front_dti_ratio,2),document[_$_f3a8[24]](_$_f3a8[159])[_$_f3a8[49]]= front_dti_ratio[_$_f3a8[51]](),back_dti_ratio> 47?document[_$_f3a8[24]](_$_f3a8[160])[_$_f3a8[34]][_$_f3a8[155]]= _$_f3a8[157]:document[_$_f3a8[24]](_$_f3a8[160])[_$_f3a8[34]][_$_f3a8[155]]= _$_f3a8[158],toString(_$_f3a8[160],back_dti_ratio,2),document[_$_f3a8[24]](_$_f3a8[161])[_$_f3a8[49]]= back_dti_ratio[_$_f3a8[51]](),back_dti_ratio<= 36?(show(_$_f3a8[162]),hide(_$_f3a8[163]),hide(_$_f3a8[164])):back_dti_ratio> 36&& back_dti_ratio<= 50?(hide(_$_f3a8[162]),show(_$_f3a8[163]),hide(_$_f3a8[164])):(hide(_$_f3a8[162]),hide(_$_f3a8[163]),show(_$_f3a8[164]))}function clear_inc_source(){var _0xDB3C,_0xDB59;for(_0xDB59= document[_$_f3a8[23]](_$_f3a8[165]),_0xDB3C= 0;_0xDB3C< _0xDB59[_$_f3a8[10]];_0xDB3C++){_0xDB59[_0xDB3C][_$_f3a8[49]]= _$_f3a8[103]};_$_f3a8[89]=== income_source?(document[_$_f3a8[24]](_$_f3a8[125])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[126])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[127])[_$_f3a8[49]]= 0,income1= 0):_$_f3a8[128]=== income_source?(document[_$_f3a8[24]](_$_f3a8[130])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[131])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[132])[_$_f3a8[49]]= 0,income2= 0,document[_$_f3a8[24]](_$_f3a8[130])[_$_f3a8[50]]= 0):_$_f3a8[133]=== income_source?(document[_$_f3a8[24]](_$_f3a8[135])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[136])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[137])[_$_f3a8[49]]= 0,income3= 0,document[_$_f3a8[24]](_$_f3a8[135])[_$_f3a8[50]]= 0):_$_f3a8[138]=== income_source?(document[_$_f3a8[24]](_$_f3a8[140])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[141])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[142])[_$_f3a8[49]]= 0,income4= 0,document[_$_f3a8[24]](_$_f3a8[140])[_$_f3a8[50]]= 0):_$_f3a8[143]=== income_source&& (document[_$_f3a8[24]](_$_f3a8[145])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[146])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[147])[_$_f3a8[49]]= 0,income5= 0,document[_$_f3a8[24]](_$_f3a8[145])[_$_f3a8[50]]= 0),show_income_summary()}function start_over(){income1= 0,income2= 0,income3= 0,income4= 0,income5= 0,income_total= 0,monthly_liability= 0,document[_$_f3a8[24]](_$_f3a8[125])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[126])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[127])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[125])[_$_f3a8[50]]= 0,document[_$_f3a8[24]](_$_f3a8[130])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[131])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[132])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[130])[_$_f3a8[50]]= 0,document[_$_f3a8[24]](_$_f3a8[135])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[136])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[137])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[135])[_$_f3a8[50]]= 0,document[_$_f3a8[24]](_$_f3a8[140])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[141])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[142])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[140])[_$_f3a8[50]]= 0,document[_$_f3a8[24]](_$_f3a8[145])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[146])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[147])[_$_f3a8[49]]= 0,document[_$_f3a8[24]](_$_f3a8[145])[_$_f3a8[50]]= 0,document[_$_f3a8[24]](_$_f3a8[100])[_$_f3a8[49]]= _$_f3a8[103],document[_$_f3a8[24]](_$_f3a8[101])[_$_f3a8[49]]= _$_f3a8[103],document[_$_f3a8[24]](_$_f3a8[108])[_$_f3a8[49]]= _$_f3a8[103],document[_$_f3a8[24]](_$_f3a8[111])[_$_f3a8[49]]= _$_f3a8[103],document[_$_f3a8[24]](_$_f3a8[114])[_$_f3a8[49]]= _$_f3a8[103],document[_$_f3a8[24]](_$_f3a8[117])[_$_f3a8[49]]= _$_f3a8[103],document[_$_f3a8[24]](_$_f3a8[105])[_$_f3a8[49]]= _$_f3a8[103],document[_$_f3a8[24]](_$_f3a8[106])[_$_f3a8[49]]= _$_f3a8[103],document[_$_f3a8[24]](_$_f3a8[120])[_$_f3a8[49]]= _$_f3a8[103],document[_$_f3a8[24]](_$_f3a8[121])[_$_f3a8[49]]= _$_f3a8[103],clear_liability(),show_slide(_$_f3a8[166])}function get_employment_type(){employmentType= get_value(_$_f3a8[167]),_$_f3a8[99]=== employmentType?show_hourly_pay():_$_f3a8[107]=== employmentType?show_weekly_pay():_$_f3a8[110]=== employmentType?show_semi_weekly_pay():_$_f3a8[113]=== employmentType?show_monthly_pay():_$_f3a8[116]=== employmentType?show_annual_pay():_$_f3a8[119]=== employmentType?show_variable_pay():_$_f3a8[123]=== employmentType&& show_variable_pay()}function hide_income_input(){var _0xDB3C,_0xDB59;for(_0xDB59= document[_$_f3a8[23]](_$_f3a8[168]),_0xDB3C= 0;_0xDB3C< _0xDB59[_$_f3a8[10]];_0xDB3C++){_0xDB59[_0xDB3C][_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[35]}}function show_hourly_pay(){hide_income_input(),document[_$_f3a8[24]](_$_f3a8[169])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38],document[_$_f3a8[24]](_$_f3a8[170])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38],document[_$_f3a8[24]](_$_f3a8[171])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38]}function show_weekly_pay(){hide_income_input(),document[_$_f3a8[24]](_$_f3a8[172])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38],document[_$_f3a8[24]](_$_f3a8[171])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38]}function show_semi_weekly_pay(){hide_income_input(),document[_$_f3a8[24]](_$_f3a8[173])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38],document[_$_f3a8[24]](_$_f3a8[171])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38]}function show_monthly_pay(){hide_income_input(),document[_$_f3a8[24]](_$_f3a8[174])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38],document[_$_f3a8[24]](_$_f3a8[171])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38]}function show_annual_pay(){hide_income_input(),document[_$_f3a8[24]](_$_f3a8[175])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38],document[_$_f3a8[24]](_$_f3a8[171])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38]}function show_variable_pay(){hide_income_input(),document[_$_f3a8[24]](_$_f3a8[176])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38]}collapsible(_$_f3a8[177],_$_f3a8[178],_$_f3a8[179]),document[_$_f3a8[24]](_$_f3a8[181])[_$_f3a8[180]]= function(_0xDAC8){var _0xDAE5=document[_$_f3a8[24]](_$_f3a8[182])[_$_f3a8[49]];_$_f3a8[103]=== _0xDAE5|| void(0)=== _0xDAE5?(document[_$_f3a8[184]](_$_f3a8[183])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[38],window[_$_f3a8[186]][_$_f3a8[185]]()):document[_$_f3a8[184]](_$_f3a8[183])[_$_f3a8[34]][_$_f3a8[33]]= _$_f3a8[35]},income1= 0,income2= 0,income3= 0,income4= 0,income5= 0,income_total= 0,monthly_liability= 0,calc(),slide_up(widget_slides),slide_down(_$_f3a8[166])