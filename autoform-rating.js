import {Template} from 'meteor/templating';

Template.afRating.onCreated(function () {
    this.value = new ReactiveVar(false);
});

Template.afRating.onRendered(function () {
    this.autorun(() => {
        const data = Template.currentData();
        const intial = data.value ? data.value : (data.atts.ratingOptions ? (data.atts.ratingOptions.initial || 0) : 0); 
        this.value.set(intial);
        const max = data.atts.ratingOptions ? (data.atts.ratingOptions.max || 5) : 5; 
        Meteor.setTimeout(function () {
            $('#rating').rating({
                initialRating: intial,
                maxRating: max
            });
        }, 200);
    });
});  


Template.afRating.helpers({
    schemaKey() {
        if (this.atts) {
            return this.atts['data-schema-key'];
        }
    },
    value() {
        return Template.instance().value.get();
    }
});

Template.afRating.events({
    'click #rating'(event, template) {
        event.preventDefault();
        let $rating = $('#rating').rating('get rating');
        template.value.set($rating);
    }
});