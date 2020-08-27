import React, { Component } from 'react';
import { Dimensions, Modal, ActivityIndicator, Share } from 'react-native';
import { Container, Header, Body, Button, Left, Icon,Content, Right, Title } from 'native-base';
import { WebView } from 'react-native-webview';

const webViewHeight = Dimensions.get('window').height - 56;

class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }
        handleClose = () => {
                return this.props.onClose();
        }
        handleShare =() => {

        }

        render() {
            const { showModal, articleData } = this.props;
            const { url } = articleData;
            if( url != undefined ) {
            return(
                <Modal 
                    animationType="slide"
                    transparent
                    visible={showModal}
                    onRequestClose={this.handleClose}
                >
                    <Container style={{margin: 15, marginBottom:0, backgroundColor: "#fff"}}>
                        <Header style={{backgroundColor: "#003999" }}>
                            <Left>
                                <Button onPress={this.handleClose} transparent>
                                    <Icon name="close" style={{color: "#fff", fontSize: 16}} />
                                </Button>
                            </Left> 
                            <Body>
                                <Title children={articleData.title} style={{color: "#fff"}}/>
                            </Body>
                            <Right>
                                <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color:"#fff", fontSize: 16}} />
                            </Button>
                            </Right>
                        </Header>
                        <Content contentContainerStyle={{height: 9220}} >
                        <WebView source={{uri:url}} style={{flex:1}}
                            onError ={this.handleClose} startInLoadingState
                        /> 
                        

                        </Content>
                    </Container>
                </Modal>
            );
            } else {
                return null;
            }
        }
}

export default ModalComponent;

