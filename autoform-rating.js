import {Template} from 'meteor/templating';

Template.afRating.onRendered(function () {
    Meteor.setTimeout(function () {
        $('#rating').rating({
            initialRating: 5,
        });
    }, 500);
});  

Template.afRating.onCreated(function () {
    this.value = new ReactiveVar(false);
});

Template.afRating.helpers({
    schemaKey() {
        if (this.atts) {
            return this.atts['data-schema-key'];
        }
    },
    value() {
        return Template.instance().value.get();
    },
});

Template.afRating.events({
    'click #rating'(event, template) {
        event.preventDefault();
        let $rating = $('#rating').rating('get rating');
        template.value.set($rating);
    }
});