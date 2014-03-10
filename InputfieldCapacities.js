$(document).ready(function() {

	$(document).on("click", ".InputfieldCapacitiesAdd", function(e) {
		$(this).removeClass('ui-state-active');
		var $row = $(this).parents(".InputfieldCapacities").find("tr.CapacityTemplate");
		$row.parent('tbody').append($row.clone().hide().removeClass('CapacityTemplate').css('display', 'table-row').fadeIn());
		var id = $(this).attr('id');
		setTimeout("$('#" + id + "').removeClass('ui-state-active')", 500);
		return false;
	});

	$(document).on("click", ".InputfieldCapacities a.CapacityClone", function(e) {
		var $row = $(this).parents("tr.Capacity");
		var $table = $(this).parents("table.InputfieldCapacities");
		$table.append($row.clone().hide().css('display', 'table-row').fadeIn());
		return false;
	});

	$(document).on("click", ".InputfieldCapacities a.CapacityDel", function(e) {
		var $row = $(this).parents("tr.Capacity");
		if($row.size() == 0) {
			// delete all
			$(this).parents("thead").next("tbody").find('.CapacityDel').click();
			return false;
		}
		var $input = $(this).next('input');
		if($input.val() == 1) {
			$input.val(0);
			$row.removeClass("CapacityTBD");
			$row.removeClass('ui-state-error');
		} else {
			$input.val(1);
			$row.addClass("CapacityTBD");
			$row.addClass('ui-state-error');
		}
		return false;
	});

	$(document).on("focus", ".InputfieldCapacities .datepicker", function() {
		$(this).datepicker({
			dateFormat: 'yy-mm-dd'
		});
	});

});
