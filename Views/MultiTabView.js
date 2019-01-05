import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Tab,
  Tabs,
  Card,
  CardItem,
  Thumbnail,
  List,
  ListItem
} from "native-base";
import Dashboard from "./Dashboard";
import MyChildrenView from "./MyChildrenView";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  SlideAnimation,
  ScaleAnimation
} from "react-native-popup-dialog";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  dialogContentView: {
    // flex: 1,
    paddingLeft: 18,
    paddingRight: 18
    // backgroundColor: '#000',
    // opacity: 0.4,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  navigationBar: {
    borderBottomColor: "#b5b5b5",
    borderBottomWidth: 0.5,
    backgroundColor: "#ffffff"
  },
  navigationTitle: {
    padding: 10
  },
  navigationButton: {
    padding: 10
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40
  },
  navigator: {
    flex: 1
    // backgroundColor: '#000000',
  },
  customBackgroundDialog: {
    opacity: 0.5,
    backgroundColor: "#000"
  }
});

export default class TabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNo: 2,
      customBackgroundDialog: false,
      defaultAnimationDialog: false,
      scaleAnimationDialog: false,
      slideAnimationDialog: false
    };
  }

  handleClick() {
    this.setState({ slideAnimationDialog: false });
  }
  toggleFooter = () => {
    if (this.state.tabNo == 1) this.setState({ tabNo: 2 });
    else this.setState({ tabNo: 1 });
  };
  renderFooterOrNot = () => {
    if (this.state.tabNo != 1) {
      return (
        <Footer >
          <FooterTab style={{backgroundColor:"#28A885"}}>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("Filter")}
            >
              <Text style={{fontWeight:'900'}}>Filters</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.setState({
                  slideAnimationDialog: true
                });
              }}
            >
              <Text style={{fontWeight:'900' }}>Sort</Text>
            </Button>
            <Dialog
              onDismiss={() => {
                this.setState({ slideAnimationDialog: false });
              }}
              onTouchOutside={() => {
                this.setState({ slideAnimationDialog: false });
              }}
              visible={this.state.slideAnimationDialog}
              dialogTitle={
                <DialogTitle title="                             Sort By                           " />
              }
              dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
            >
              <DialogContent>
                <List>
                  <ListItem button={true} onPress={this.handleClick}>
                    <Text>Popularity</Text>
                  </ListItem>
                  <ListItem button={true} onPress={this.handleClick}>
                    <Text>Budget</Text>
                  </ListItem>
                  <ListItem button={true} onPress={this.handleClick}>
                    <Text>Distance</Text>
                  </ListItem>
                </List>
              </DialogContent>
            </Dialog>
          </FooterTab>
        </Footer>
      );
    } else return null;
  };
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#ffffff'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" style={{color:'#28A885'}} />
            </Button>
          </Left>
          <Body
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <Icon name="md-locate" />

            <View>
              <Title style={{color:'#28A885'}}>Hyderabad</Title>

              <Subtitle style={{color:'#28A885'}}>Set Location</Subtitle>
            </View>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" style={{color:'#28A885'}}/>
            </Button>
          </Right>
        </Header>

        <Content  style={{backgroundColor:'#ffffff'}}>
        <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}} initialPage={0} onChangeTab={() => this.toggleFooter()}>
            <Tab heading="Schools" tabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#28A885'}} activeTabStyle={{backgroundColor: '#ffffff'}} activeTextStyle={{color: '#28A885', fontWeight: 'normal'}}>
                <Dashboard navigation={this.props.navigation} />
            </Tab>
            <Tab heading="My Children" tabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#28A885'}} activeTabStyle={{backgroundColor: '#ffffff'}} activeTextStyle={{color: '#28A885', fontWeight: 'normal'}}>
                 <MyChildrenView navigation={this.props.navigation} tabStyle={{backgroundColor: '#ffffff'}} />
            </Tab>
        </Tabs>


    
        </Content>
        {this.renderFooterOrNot()}
      </Container>
    );
  }
}
