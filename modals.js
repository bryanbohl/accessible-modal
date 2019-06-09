var HERO_modals = {
	config: {
		$modals: $('.modal'),
        $toggleDisplayFields: $('.hidden-fields')
	},

	init: function() {
		var _ = this, modals;
		
		if (_.config.$modals.length > 0) {
			_.config.$modals.each(function(i, item) {
				console.log(item);
				modals = new A11yDialog(item).on('show', function(dialogEl, event) {
					$(dialogEl).addClass("modal--visible");	
				}).on('hide', function(dialogEl, event) {
					$(dialogEl).removeClass("modal--visible");	
				});
			});
		};
		

		$('.modal input:radio').change(function() {
            if($('.toggle-radio').is(':checked')) {
                _.config.$toggleDisplayFields.addClass('show');
            } else {
                _.config.$toggleDisplayFields.removeClass('show');
            }
        });
	}
};

HERO_modals.init();