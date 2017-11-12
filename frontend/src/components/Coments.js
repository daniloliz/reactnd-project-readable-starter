import React, { Component } from 'react';
import { 
    Drawer, 
    FontIcon, 
    MenuItem, 
    Divider, 
    Card, 
    CardHeader,
    CardTitle,
    CardText
} from 'material-ui';

const Close = ({ close }) => (
    <FontIcon 
        className="material-icons" 
        style={{ fontSize: 40, color: '#00bcd4' }}
        onClick={close}
    >
        close
    </FontIcon>
);

class Coments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            openComents: props.openComents,
            comments: []
        };
    }
    handleCloseComents = () => this.setState({openComents: false});
    render() {
        return (
            <div>
                <Drawer 
                    width={450} 
                    openSecondary={true} 
                    open={this.state.openComents}
                >
                    <Close close={this.handleCloseComents} />
                    <MenuItem 
                        primaryText="Comments" 
                        style={{ 
                            position: "center", 
                            textAlign: 'center',
                            fontFamily: "'Gloria Hallelujah', cursive",
                            color: "#00bcd4",
                            fontSize: 25
                        }} 
                    />
                    <Divider />
                    <MenuItem>
                        <Card style={{ marginTop: 10, wordWrap: 'break-word' }}>
                            <CardHeader
                                title="Fulano 1"
                                avatar={require("../images/avatar.jpg")}
                            />
                            <Divider />
                            <CardTitle
                                style={{ fontFamily: "'Acme', sans-serif" }}
                                title="Post 1"
                                subtitle="Sub post 1"
                            />
                            <CardText style={{ 
                                fontFamily: "'Acme', sans-serif", 
                                fontSize: 16,
                                whiteSpace: 'normal',
                                lineHeight: 'normal'
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                            <p style={{ 
                                borderBottom: '1px solid #e8e8e8',
                                position: 'relative',
                                color: '#717274',
                                fontSize: 12,
                                wordWrap: 'break-word',
                                lineHeight: '1rem',
                                marginLeft: 10,
                                marginTop: 17
                            }}>
                                9 comments
                            </p>
                            {this.state.comments.map((comment, index) => (
                                <div>
                                    <CardText key={index} style={{
                                        fontSize: 14,
                                        whiteSpace: 'normal',
                                        lineHeight: 'normal'
                                    }}>
                                        Teste
                                    </CardText>
                                    <Divider />
                                </div>
                            ))}
                        </Card>
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Coments;