var React = require('react');
var Person = require('./person');

var PersonList = function() {
	return (
		<div className="person-list">
			<Person name="Derek Zoo" />
			<Person name="Al Roker" />
			<Person name="joe" job="plumber"/>
			<Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
			<Person name="don" 
			 		imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
			 		job="cool" />
			<Person />
		</div> 	
	);
};


module.exports = PersonList;