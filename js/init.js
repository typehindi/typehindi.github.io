/*
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*********************************************************************************/
/* Settings                                                                      */
/*********************************************************************************/

	var helios_settings = {

		// Dropotron (dropdown menus)
			dropotron: {
				mode: 'fade',
				speed: 350,
				noOpenerFade: true,
				alignment: 'center',
				offsetX: -1,
				offsetY: -16
			},

		// skelJS (probably don't need to change anything here unless you know what you're doing)
			skelJS: {
				prefix: 'css/style',
				resetCSS: true,
				boxModel: 'border',
				grid: {
					gutters: 48
				},
				breakpoints: {
					'widest':	{ range: '1680-', hasStyleSheet: false, containers: 1400 },
					'wide':		{ range: '-1680', containers: 1200 },
					'normal':	{ range: '-1280', containers: 'fluid', grid: { gutters: 36 }, viewportWidth: 1140 },
					'narrow':	{ range: '-960', containers: 'fluid', grid: { gutters: 32 } },
					'narrower': 	{ range: '-840', containers: 'fluid', grid: { gutters: 32, collapse: true } },
					'mobile':	{ range: '-640', containers: 'fluid', grid: { gutters: 32, collapse: true }, lockViewport: true }
				}
			},

		// skelJS Plugins (ditto; don't change unless you know what you're doing)
			skelJSPlugins: {
				panels: {
					transformBreakpoints: 'mobile',
					panels: {
						navPanel: {
							breakpoints: 'mobile',
							position: 'left',
							size: '80%',
							html: '<div data-action="navList" data-args="nav"></div>'
						}
					},
					overlays: {
						navButton: {
							breakpoints: 'mobile',
							position: 'left-top',
							width: 100,
							height: 50,
							html: '<div class="toggle" data-action="togglePanel" data-args="navPanel"></div>'
						}
					}
				}
			}

	}

/*********************************************************************************/
/* Don't modify beyond this point unless you know what you're doing!             */
/*********************************************************************************/

// Initialize skelJS
	skel.init(helios_settings.skelJS, helios_settings.skelJSPlugins);

// jQuery functions

	// scrolly
		jQuery.fn.n33_scrolly = function() {				
			jQuery(this).click(function(e) {
				var h = jQuery(this).attr('href'), target;

				if (h.charAt(0) == '#' && h.length > 1 && (target = jQuery(h)).length > 0)
				{
					var pos = Math.max(target.offset().top, 0);
					e.preventDefault();
					jQuery('body,html').animate({ scrollTop: pos }, 'slow', 'swing');
				}
			});
		};

	// preloadImage
		jQuery.n33_preloadImage = function(url, onload) {
			var	$img = $('<img />'),
				_IEVersion = (navigator.userAgent.match(/MSIE ([0-9]+)\./) ? parseInt(RegExp.$1) : 99);
			
			$img.attr('src', url);
			
			if ($img.get(0).complete
			||	_IEVersion < 9)
				(onload)();
			else
				$img.load(onload);
		};

	// formerize
		jQuery.fn.n33_formerize=function(){var _fakes=new Array(),_form = jQuery(this);_form.find('input[type=text],textarea').each(function() { var e = jQuery(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = jQuery(this); var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = jQuery(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = jQuery(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { jQuery(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); jQuery(this).find('select').val(jQuery('option:first').val()); jQuery(this).find('input,textarea').each(function() { var e = jQuery(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };


	// onVisible
		(function() {
		
			// Vars
				var $window = jQuery(window),
					elements = [],
					delay = 10,
					pad = 0,
					timerId,
					poll = function() {
						var l = elements.length,
							x = $window.scrollTop() + $window.height(),
							i, e;
					
						for (i=0; i < l; i++)
						{
							e = elements[i];

							if (!e.state && x - e.pad > e.o.offset().top)
							{
								e.state = true;
								(e.fn)();
							}
						}
					};

			// Event bindings
				$window.load(function() {

					$window.on('scroll resize', function() {

						// Clear existing timeout (if one exists)
							window.clearTimeout(timerId);

						// Set our poll function to run after (delay)ms (prevents it from running until the user's done scrolling/resizing)
							timerId = window.setTimeout(function() { (poll)(); }, delay);

					}).trigger('resize');

				});

			// onVisible jQuery function (pretty much just adds the element to our list of elements to poll)
				jQuery.fn.n33_onVisible = function(fn, p) {
					elements.push({ o: jQuery(this), fn: fn, pad: (p ? p : pad), state: false });
				};

		})();

// Ready stuff
	jQuery(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			_IEVersion = (navigator.userAgent.match(/MSIE ([0-9]+)\./) ? parseInt(RegExp.$1) : 99),
			_isTouch = !!('ontouchstart' in window),
			_isMobile = !!(navigator.userAgent.match(/(iPod|iPhone|iPad|Android|IEMobile)/));

		// Pause CSS transitions until the page has loaded (prevents "flickering")
			$body.addClass('paused');
			$window.load(function() {
				$body.removeClass('paused');
			});

		// Add input "placeholder" support to IE <= 9
			if (_IEVersion < 10)
				$('form').n33_formerize();

		// Initialize scrolly links
			$('.scrolly').n33_scrolly();

		// navigation menu

		$("#nav li a").click(function(){ 
		    if ($("#nav li a").hasClass('current')) {
			    $("#nav li a").removeClass('current'); 
		    }
		    $(this).addClass('current');
		});
	});