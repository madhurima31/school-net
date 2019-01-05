import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";

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
  Thumbnail
} from "native-base";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
 
  }

  componentDidMount() {}
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("Details", {
              navigation: this.props.navigation
            })
          }
        ><Content padder>
          <Card style={{ borderRadius: 8, overflow:'hidden' }}>
            <CardItem cardBody>
              <Image
                
                  source={require("../assets/school.png")}
           
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
               <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../assets/schoollogo.png")}
                />
                <Body>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Text>{this.props.schoolName}</Text>
                      <Text note>{this.props.availability}</Text>
                      <Text note>{this.props.applied}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center"
                      }}
                    >

                      <View>
                        <Text>{this.props.rating}</Text>
                      </View>
                       
                      <View>
                        <Icon name="md-star" style={{marginLeft:5}} />
                      </View>
                    
                    </View>
                  </View>
                </Body>
              </Left>
            </CardItem>
          </Card>
          </Content>
        </TouchableOpacity>
      </View>
    );
  }
}