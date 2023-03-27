$(function () {
  $("#tabs").tabs();
});

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content" 
  });
});

fetch("store/locations.json")
      .then((data) => data.json())
      .then((data) => {
        showLocation(data);
      });

 function showLocation(countryJson) { 
    var headers = Object.keys(countryJson[0]);
    var tableHTML='<table border="0" ></table>';
     $("#table-container").html(tableHTML);
    var allRecordsHTML='';
    $.each(countryJson, function(i,row){
      allRecordsHTML+='<tr>';
      if(row.country=="India"){allRecordsHTML+='<td><img src="img/india.png" class="country-img"/></td>';}
      else if(row.country=="United States") {allRecordsHTML+='<td><img src="img/united-states.png" class="country-img"/></td>';}
      else{allRecordsHTML+='<td><img src="img/canada.png" class="country-img"/></td>';}
      $.each(headers, function(j,header){
        allRecordsHTML+='<td>'+row[header]+'</td>';
      });
      allRecordsHTML+='</tr>';
    });
    $("table").append(allRecordsHTML);
    hide();
}

function hide(){
  $('td:nth-child(2),th:nth-child(2)').hide();
}
