var result = '';

$('td.cell').on('click', function(e) {
 var value = $(this).text();
 result += value;
 $('td#result').text(result);
 
 if (value === '=') {
   result = result.replace(/\=/g, '');
   $('td#result').text(eval(result));
 }
});

// Clear all
$('td.clear').on('click', function(e) {
 result = '';
 $('td#result').text('0');
});

/*

var result = '';

$('td.cell').on('click', function(e){
    var value = $(this).text();
    result += value;
    $('td#result').text(result);
    //$('td#result').text(eval(result));
});

$('td.clear').on('click', function(e){
    result = '';
    $('td#result').text('0');
});

*/