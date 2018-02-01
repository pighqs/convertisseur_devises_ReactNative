import React, { Component } from "react";
import { ScrollView, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from "prop-types";


import { ListItem, Separator } from "../components/List";

const styles = EStyleSheet.create({
    $corail : '$primaryCorail',
    $orange : '$primaryOrange',
    $green : '$primaryGreen',
    $blue : '$primaryBlue',
});

class Themes extends Component {

  static propTypes = {
    navigation: PropTypes.object
  };


  handleThemePress = (color) => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Magenta"
          onPress={() => this.handleThemePress(styles.$corail)}
          selected
          checkmark={false}
          iconBackground={styles.$corail}
        />
        <Separator />
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Bleu"
          onPress={() => this.handleThemePress(styles.$blue)}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Orange"
          onPress={() => this.handleThemePress(styles.$orange)}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Vert"
          onPress={() => this.handleThemePress(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        
        <Separator />
        
      </ScrollView>
    );
  }
}

export default Themes;
