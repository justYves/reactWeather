const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
    onSearch(e) {
        e.preventDefault();
        alert('Not yet wired up!');
    },
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="search weather" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
})

module.exports = Nav;


// const React = require('react');
// const {Link, IndexLink} = require('react-router');
//
// const Nav = React.createClass({

//     render() {
//         <h1>hi</h1>
//     }
// })

        // return (
            // <div className="top-bar">
            //     <div className="top-bar-left">
            //         <ul className="menu">
            //             <li className="menu-text">React Weather App</li>
            //             <li>
            //                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            //             </li>
            //             <li>
            //                 <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            //             </li>
            //             <li>
            //                 <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            //             </li>
            //         </ul>
            //     </div>
            //     <div top-bar-right>
            //         <form onSubmit={this.onSearch}>
            //             <ul className="menu">
            //                 <li>
            //                     <input type="search" placeholder="search weather" />
            //                 </li>
            //                 <li>
            //                     <input type="submit" className="button" value="Get weather" />
            //                 </li>
            //             </ul>
            //         </form>
            //     </div>
            // </div>
//         )
//     }
// })
