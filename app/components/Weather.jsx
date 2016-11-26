const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');

const Weather = React.createClass({
    getInitialState() {
        return {
            isLoading: false,
        }
    },
    handleSearch(location) {
        this.setState({isLoading: true});
        OpenWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location: location,
                temp: temp,
                isLoading: false,
            });
        }).catch((err) => {
            alert(err);
            this.setState({isLoading: false});
        })
    },
    render() {
        let {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>
            } else if (temp && location){
                return <WeatherMessage location={location} temp={temp} />
            }
        }
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Weather;
