import React, { Component } from 'react';
import { AppBar, Drawer, Menu, MenuItem, Divider } from 'material-ui';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
    }
    handleToggle = () => this.setState({open: !this.state.open});
    render() {
        return (
            <div>
                <AppBar 
                    onLeftIconButtonTouchTap={this.handleToggle}
                    title={
                        <span className="App-title">
                            <i className="material-icons" 
                            style={{ fontSize: 35, paddingTop: 10 }}
                            >
                            comment
                            </i> Readable
                        </span>
                    } 
                />
                <Drawer 
                    docked={false}
                    width={224}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open: false })}
                    containerStyle={{ backgroundColor: "#00bcd4" }}
                >
                    <Menu style={{ width: 200 }}>
                    <MenuItem 
                        primaryText="Readable" 
                        style={{ 
                        position: "center", 
                        fontFamily: "'Gloria Hallelujah', cursive",
                        color: "white",
                        fontSize: 25
                        }} 
                    />
                    <Divider style={{ backgroundColor: "black" }} />
                    {this.props.categories && this.props.categories.map((category, index) => (
                        <div key={index}>
                        <MenuItem 
                            primaryText={category.name} 
                            style={{ 
                            textAlign: "left", 
                            fontFamily: "'Acme', sans-serif",
                            fontSize: 20
                            }} 
                        />
                        </div>
                    ))}
                </Menu>
            </Drawer>
          </div>
        )
    }
}

export default Header;