const React = require('react');

const WeatherForm = React.createClass({
    onFormsubmit(e) {
        e.preventDefault();
        let location = this.refs.location.value;
        if (location.length) {
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    },
    render() {
        return (
            <form onSubmit={this.onFormsubmit}>
                <input type="text" ref="location" placeholder="Enter a city name"></input> <br/>
                <button>Get weather</button>
            </form>
        )
    }
})

module.exports = WeatherForm;
