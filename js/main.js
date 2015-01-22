EstudiosBiblicos = {};

EstudiosBiblicos.Sermon = Backbone.Model.extend({});

EstudiosBiblicos.Sermones = Backbone.Collection.extend({
	model: EstudiosBiblicos.Sermon
});

EstudiosBiblicos.SermonView = Backbone.View.extend({
	events: {
		'click .action.icon-add': 'add'
	},
	tagName: 'li',
	className: 'item border-bottom',
	template: Handlebars.compile($("#sermon-template").html()),

	initialize: function () {
		this.listenTo(this.model, "change", this.render, this);
	},

	render: function () {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	},

	add: function (e) {
		alert(this.model.get("name"));
	}
});

EstudiosBiblicos.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"serie/:name": "serie",
		"profile/:username": "profile"
	},

	index: function () {
		console.log("Estoy en el index");
	},

	serie: function (name) {
		console.log("Serie: " + name);
	},

	profile: function (username) {
		console.log("Username: " + username);
	},
});

EstudiosBiblicos.app = new EstudiosBiblicos.Router();
Backbone.history.start();

window.EstudiosBiblicos = EstudiosBiblicos;

