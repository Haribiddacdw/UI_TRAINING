/**
 * This Function will helps to arrange tabs section
 */

$(function () {
  $("#tabs").tabs();
});
/**
 * This Function will helps to style accordation section
 */
$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content" 
  });
});
/**
 * fetch will helps to get json data
 */
fetch("store/locations.json")
      .then((data) => data.json())
      .then((data) => {
        showLocation(data);
      });


var countryImages = {

        'India': 'img/india.png',
        'United States': 'img/united-states.png',
        'Canada': 'img/canada.png'
};


/**
 * This Function will helps to create dynamic table rows
 * display all json content in table
 */
function showLocation(countryJson) { 
  var headers = Object.keys(countryJson[0]);
  var tableHTML = '<table border="0"></table>';
  $("#table-container").html(tableHTML);
  var allRecordsHTML = '';
  $.each(countryJson, function(i, row){
      allRecordsHTML += '<tr>';
      var countryImageSrc = countryImages[row.country];
      allRecordsHTML += '<td><img src="' + countryImageSrc + '" class="country-img"/></td>';
      $.each(headers, function(j, header){
          allRecordsHTML += '<td>' + row[header] + '</td>';
      });
      allRecordsHTML += '</tr>';
  });
  $("table").append(allRecordsHTML);
  hide();
}

/**
 * This Function will helps to hide column 
 */
function hide(){
  $('td:nth-child(2),th:nth-child(2)').hide();
  console.log( $('td:last-child'));
}
$('tr').each(function() {
  $(this).children('td:last').css('padding-right', '0');
});
