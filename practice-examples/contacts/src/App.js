import React, { Component } from 'react';

class ContactList extends React.Component {

	render() {

		const people = [
			{name: 'Tyler'},
			{name: 'Karen'},
			{name: 'Richard'}
		];

		return <ol>
			{people.map((person) => (
				<li key={person.name}>{person.name}</li>
			))}
		</ol>
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;