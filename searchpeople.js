var serviceURL = "http://localhost:8888/";

var users;


function getUsersList() {
	$.getJSON(serviceURL + 'getusers.php', function(data) {
		$('#userList li').remove();
		$.each(data, function(index, user) {
		var userResult = '<li><h2>'+user.Name+'</h2></li>';
			$('#userList').append(userResult);
		});
		$('#userList').listview('refresh');
		$('#one').trigger("create");
	});
}