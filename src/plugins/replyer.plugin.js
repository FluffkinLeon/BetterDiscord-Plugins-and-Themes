//META{"name":"Replyer"}*//

function Replyer(){
	this.getName = function() { return "Replyer"; };
	this.getDescription = function() { return "Reply to people with a button."; };
	this.getVersion = function() { return "1.0"; };
	this.getAuthor = function() { return "CosmicSalad"; };
}

var BetterAPI = BetterAPI || bdplugins.BetterAPI.plugin.constructor

Replyer.prototype.load = function() {
	Replyer.prototype.addReply();
};
Replyer.prototype.start = function() {
	Replyer.prototype.addReply();
	console.log('Replyer started.')
};
Replyer.prototype.stop = function() {};
Replyer.prototype.unload = function() {};

Replyer.prototype.onMessage = function() {
	Replyer.prototype.addReply();
};

Replyer.prototype.onSwitch = function() {
	Replyer.prototype.addReply();
};

Replyer.prototype.addReply = function(e) {
	var allmessages = $('.messages .message-group');
	var nameDateBlock = $('.messages .message-group .comment .message .body h2');
	var reply = $('.messages .message-group .replyer');

	allmessages.css('position','relative');
	if(reply.length == 0) {
		nameDateBlock.append('<span class="replyer" style="cursor:pointer;display:none;position:relative;top:-1px;right:0;color:#fff !important;margin-left:5px;text-transform:uppercase;font-size:10px;padding:3px 5px;background:rgba(0,0,0,0.4);border-radius:5px">Reply</span>');
	}
	allmessages.mouseover(function() { $('.replyer', this).stop(true,true).fadeIn(500) });
	allmessages.mouseleave(function() { $('.replyer', this).stop(true,true).fadeOut(100) });

	reply.click(function() {
		var user = $(this).parent().find('.user-name').text();
		$('.content .channel-textarea textarea').val('@'+user+' ').focus();
	});
};	

Replyer.prototype.getSettingsPanel = function() {return null;};
try{exports.Replyer = Replyer;}catch(e){console.warn('Using old version, not exporting functions.')}