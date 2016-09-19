
	$(document).ready(function(){
		var contentType ="application/x-www-form-urlencoded; charset=utf-8";
		$("#ajaxSubmit").on("click",function(){
			$.ajax({
				url:$("#serviceUrl").val().trim(),
				type:"POST",
				 cache: false,
				 contentType:contentType,
           		 dataType: "json",
				success:function(data){
					alert(JSON.stringify(data) +"success");
				},
				error:function(data){
					alert(JSON.stringify(data) +"error");
				}

			})
		});	
	})
	
