import React from 'react';
import {Menu, Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


class NavBar extends React.Component {

    state = { activeItem: 'inbox' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const menuStyle = { marginBottom: '10px' };
        return (
            <Menu style={menuStyle} attached="top" borderless inverted className={"navbar"}>
                <Menu.Item>
                    <Header inverted as='h1'>Wave Forecaster</Header>
                </Menu.Item>
                    <Menu inverted secondary>
                        <Menu.Item
                            name='Forecast'
                            active={activeItem === 'Forecast'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='About'
                            active={activeItem === 'About'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
            </Menu>

        );
    }
}
export default NavBar;

